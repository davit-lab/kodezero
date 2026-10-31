import {tutorLessonContext} from '../../../lib/academy/tutor-lesson-context.ts';
import {createHash} from 'node:crypto';
import {parseTutorRequest,tutorContents,tutorInstruction} from '../../../lib/academy/assistant.ts';
export const runtime='nodejs';
export const maxDuration=40;
const buckets=new Map<string,{count:number;until:number}>();
function reply(body:unknown,status=200){return Response.json(body,{status,headers:{'Cache-Control':'no-store'}});}
function allow(ip:string){const now=Date.now();for(const [key,v] of buckets)if(v.until<now)buckets.delete(key);if(buckets.size>5000)return false;const key=createHash('sha256').update(ip).digest('hex');const current=buckets.get(key)??{count:0,until:now+10*60*1000};if(current.count>=12)return false;current.count++;buckets.set(key,current);return true;}
export async function GET(){return reply({available:!!process.env.GEMINI_API_KEY,provider:'Gemini'});}
export async function POST(request:Request){
 const origin=request.headers.get('origin');if(!origin||origin!==new URL(request.url).origin)return reply({error:'მოთხოვნა საიტის სასწავლო სივრციდან გაგზავნე.'},403);
 const key=process.env.GEMINI_API_KEY;if(!key)return reply({error:'AI ასისტენტი ჯერ არ არის დაკავშირებული. საიტის მფლობელმა Vercel-ში GEMINI_API_KEY უნდა დაამატოს.'},503);
 if(!request.headers.get('content-type')?.startsWith('application/json'))return reply({error:'მოთხოვნის ფორმატი არასწორია.'},415);
 if(Number(request.headers.get('content-length')??0)>65000)return reply({error:'მოთხოვნა ზედმეტად დიდია.'},413);
 if(!allow(request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim()??request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()??'unknown'))return reply({error:'ამ სესიაში ბევრი მოთხოვნა გაიგზავნა. სცადე რამდენიმე წუთში.'},429);
 let parsed;try{const reader=request.body?.getReader();if(!reader)return reply({error:'შეტყობინება ცარიელია.'},400);let size=0;const decoder=new TextDecoder();let text='';while(true){const chunk=await reader.read();if(chunk.done)break;size+=chunk.value.byteLength;if(size>65000){await reader.cancel();return reply({error:'მოთხოვნა ზედმეტად დიდია.'},413);}text+=decoder.decode(chunk.value,{stream:true});}text+=decoder.decode();if(text.length>65000)return reply({error:'მოთხოვნა ზედმეტად დიდია.'},413);parsed=parseTutorRequest(JSON.parse(text));}catch(error){return reply({error:error instanceof SyntaxError?'შეტყობინების ფორმატი არასწორია.':error instanceof Error?error.message:'მოთხოვნა ვერ წავიკითხეთ.'},400);}
 const groundedContext={...parsed.context,lesson:tutorLessonContext(parsed.context.route)};
 const model=process.env.GEMINI_MODEL||'gemini-2.5-flash';if(!/^[a-zA-Z0-9.-]+$/.test(model))return reply({error:'ასისტენტის მოდელის პარამეტრი შესასწორებელია.'},503);
 try{
 const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':key},body:JSON.stringify({systemInstruction:{parts:[{text:tutorInstruction}]},contents:tutorContents(parsed.messages,groundedContext),generationConfig:{temperature:0.35,maxOutputTokens:4096,thinkingConfig:{thinkingBudget:0}}}),signal:AbortSignal.timeout(30000)});
 if(!response.ok)return reply({error:response.status===429?'AI სერვისის ლიმიტი ამოიწურა. მოგვიანებით სცადე.':response.status===400||response.status===401||response.status===403?'AI კავშირის პარამეტრები გადასამოწმებელია. დაუკავშირდი საიტის მფლობელს.':'AI სერვისი დროებით მიუწვდომელია. ხელახლა სცადე.'},response.status===429?429:502);
 const data=await response.json() as {candidates?:{content?:{parts?:{text?:string;thought?:boolean}[]}}[]};const text=data.candidates?.[0]?.content?.parts?.filter((p:{text?:string;thought?:boolean})=>p.text&&!p.thought).map(p=>p.text).join('\n');
 if(!text)return reply({error:'პასუხი ვერ მომზადდა. კითხვა სხვა ფორმით დაწერე.'},502);return reply({text:String(text).slice(0,24000)});
 }catch{return reply({error:'პასუხის მიღება ვერ დასრულდა. შეამოწმე კავშირი და სცადე ხელახლა.'},504);}
}
