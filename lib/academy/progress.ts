import {terms} from './terms.ts';
const termIds=new Set(terms.map(term=>term.id));
import type { Progress, Attempt, LearningPreferences, StudioProgress } from './types';
export const defaultLearning:LearningPreferences={mode:'guided',editorSize:14,autoPreview:true,lineNumbers:true,focus:false,weeklyGoal:4,track:'mixed'};
export const emptyStudio=():StudioProgress=>({completed:[],drafts:{},notes:{},activity:{}});
export const KEY = 'firstlight:progress:v1';
export const initialProgress = ():Progress => ({version:1,curriculum:'2026.1',profile:{name:'',experience:'brand-new',goal:'personal',minutes:10,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC',theme:'light',reducedMotion:false,fontSize:16,onboarded:false,learning:{...defaultLearning}},studio:emptyStudio(),completed:[],attempts:[],daily:{},reviews:[],drafts:{},project:{},milestones:[],updated:new Date().toISOString()});
export function dayKey(date:Date,timezone:string){return new Intl.DateTimeFormat('en-CA',{timeZone:timezone,year:'numeric',month:'2-digit',day:'2-digit'}).format(date);}
export function canOpen(id:number,p:Progress){return id===1||p.completed.includes(id)||p.completed.includes(id-1);}
export function xp(p:Progress){return new Set(p.completed).size*30+new Set(p.studio?.completed??[]).size*20;}
export function complete(p:Progress,id:number,now=new Date()):Progress{
  if(p.completed.includes(id)||!canOpen(id,p)) return p;
  const day=dayKey(now,p.profile.timezone);
  return {...p,completed:[...p.completed,id].sort((a,b)=>a-b),daily:{...p.daily,[day]:[...new Set([...(p.daily[day]??[]),id])]},reviews:[...p.reviews.filter(r=>r.lesson!==id),{lesson:id,due:new Date(now.getTime()+3*86400000).toISOString(),successes:1}],updated:now.toISOString()};
}
export function recordAttempt(p:Progress,lesson:number,exercise:string,correct:boolean):Progress{
 const at=new Date().toISOString();const attempt:Attempt={lesson,exercise,correct,at};const old=p.reviews.find(r=>r.lesson===lesson);const successes=correct?(old?.successes??0)+1:0;
 return {...p,attempts:[...p.attempts,attempt].slice(-2000),reviews:[...p.reviews.filter(r=>r.lesson!==lesson),{lesson,successes,due:new Date(Date.now()+(correct?Math.min(30,Math.pow(2,successes)):0)*86400000).toISOString()}],updated:at};
}
export function finishReview(p:Progress,id:number,now=new Date()):Progress{const reviewed=recordAttempt(p,id,"კოდი",true);const day=dayKey(now,p.profile.timezone);return {...reviewed,daily:{...reviewed.daily,[day]:[...new Set([...(reviewed.daily[day]??[]),id])]}};}
export function streak(p:Progress,now=new Date()){
 const days=[...new Set([...Object.keys(p.daily).filter(k=>p.daily[k].length),...Object.keys(p.studio?.activity??{}).filter(k=>p.studio?.activity[k]?.length)])].sort().reverse();if(!days.length)return 0;
 const today=dayKey(now,p.profile.timezone); const prior=(s:string)=>{const d=new Date(s+'T12:00:00Z');d.setUTCDate(d.getUTCDate()-1);return d.toISOString().slice(0,10)};
 let cursor=days.includes(today)?today:prior(today),count=0;while(days.includes(cursor)){count++;cursor=prior(cursor)}return count;
}
export function parseProgress(text:string):Progress{
 if(text.length>3_000_000) throw new Error("ასლი მეტისმეტად დიდია. მაქსიმალური ზომაა 3 მბ.");
 let p:Progress;try{p=JSON.parse(text) as Progress;}catch{throw new Error('ასლი გამართული JSON ფაილი არ არის.');}const proto=(x:unknown)=>x&&typeof x==='object'&&!Array.isArray(x);
 if(!proto(p)||p.version!==1||p.curriculum!=='2026.1'||!proto(p.profile)||!Array.isArray(p.completed)||!p.completed.every(n=>Number.isInteger(n)&&n>=1&&n<=48)||new Set(p.completed).size!==p.completed.length)throw new Error("ეს Firstlight-ის მხარდაჭერილი პროგრესის ასლი არ არის.");
 const pr=p.profile;if(typeof pr.name!=='string'||pr.name.length>80||!['brand-new','some-html','some-code'].includes(pr.experience)||!['personal','career','curiosity'].includes(pr.goal)||![5,10,20].includes(pr.minutes)||!['light','dark','system'].includes(pr.theme)||typeof pr.reducedMotion!=='boolean'||typeof pr.onboarded!=='boolean'||![16,18,20].includes(pr.fontSize))throw new Error("პროფილის ზოგი პარამეტრი არასწორია.");
 try{dayKey(new Date(),pr.timezone)}catch{throw new Error("ასლში დროის სარტყელი არასწორია.")}
 if(!proto(p.project)||!proto(p.drafts)||!proto(p.daily)||!Array.isArray(p.attempts)||!Array.isArray(p.reviews)||!Array.isArray(p.milestones)||typeof p.updated!=='string'||!Number.isFinite(Date.parse(p.updated)))throw new Error("შენახული სასწავლო მონაცემები არასრულია.");
 const allowed=['index.html','about.html','services.html','projects.html','contact.html','css/styles.css','js/main.js','assets/studio.svg','assets/project.svg','README.md'];
 for(const [k,v] of Object.entries(p.project)){if(!allowed.includes(k)||typeof v!=='string'||v.length>250000)throw new Error("პროექტი მიუღებელ ფაილს შეიცავს.");}
 for(const [k,v] of Object.entries(p.drafts)){if(!/^\d+(:practice)?$/.test(k)||!proto(v)||!['html','css','js'].every(t=>typeof v[t as keyof typeof v]==='string'&&v[t as keyof typeof v].length<250000))throw new Error("სავარჯიშოს მონახაზი არასწორია.");}
 for(const [k,v]of Object.entries(p.daily)){if(!/^\d{4}-\d{2}-\d{2}$/.test(k)||!Array.isArray(v)||!v.every(n=>Number.isInteger(n)&&n>=1&&n<=48))throw new Error("ყოველდღიური აქტივობის მონაცემები არასწორია.");}
 if(p.attempts.length>2000||!p.attempts.every(a=>Number.isInteger(a.lesson)&&a.lesson>=1&&a.lesson<=48&&['quiz','order',"კოდი"].includes(a.exercise)&&typeof a.correct==='boolean'&&Number.isFinite(Date.parse(a.at))))throw new Error("სავარჯიშოს მცდელობების მონაცემები არასწორია.");
 if(!p.reviews.every(r=>Number.isInteger(r.lesson)&&r.lesson>=1&&r.lesson<=48&&Number.isInteger(r.successes)&&r.successes>=0&&Number.isFinite(Date.parse(r.due))))throw new Error("გამეორების განრიგი არასწორია.");
 if(!p.milestones.every(x=>['structure','styles','responsive','interactive','ready'].includes(x)))throw new Error("უცნობი ეტაპია მითითებული.");
 const pref=pr.learning;
 if(pref!==undefined&&(!proto(pref)||!['guided','challenge'].includes(pref.mode)||![14,16,18].includes(pref.editorSize)||!['mixed','foundations','projects'].includes(pref.track)||![2,4,6].includes(pref.weeklyGoal)||!['autoPreview','lineNumbers','focus'].every(k=>typeof pref[k as keyof typeof pref]==='boolean')))throw new Error('სასწავლო პარამეტრები არასწორია.');
 const guide=p.websiteGuide;const guideIds=['purpose','browser','pages','structure','navigation','layout','responsive','files','forms','interaction','quality','publish'];
 if(guide!==undefined&&(!proto(guide)||!Array.isArray(guide.completed)||guide.completed.length>12||new Set(guide.completed).size!==guide.completed.length||!guide.completed.every(id=>guideIds.includes(id))||!proto(guide.notes)||!Object.entries(guide.notes).every(([id,note])=>guideIds.includes(id)&&typeof note==='string'&&note.length<=5000)))throw new Error('საიტის გეგმის მონაცემები არასწორია.');
 const vocabulary=p.vocabulary;
 if(vocabulary!==undefined&&(!proto(vocabulary)||!['saved','known'].every(field=>{const entries=vocabulary[field as 'saved'|'known'];return Array.isArray(entries)&&entries.length<=termIds.size&&new Set(entries).size===entries.length&&entries.every(id=>typeof id==='string'&&termIds.has(id));})))throw new Error('ტერმინების პროგრესი არასწორია.');
 const studio=p.studio;
 const validKey=(key:string)=>/^(?:(solis|bloom|forma|atlas|tempo|orbit):(?:[1-6]|v2:(?:[1-9]|1[0-8]))|(branon|health):v3:(?:[1-9]|1[0-9]|2[0-5])|lab:v1:(?:[1-9]|1[0-8]))$/.test(key);
 if(studio!==undefined){
  if(!proto(studio)||!Array.isArray(studio.completed)||studio.completed.length>212||!studio.completed.every(validKey)||new Set(studio.completed).size!==studio.completed.length||!proto(studio.drafts)||!proto(studio.notes)||!proto(studio.activity))throw new Error('პროექტების პროგრესი არასწორია.');
  for(const [key,v]of Object.entries(studio.drafts))if(!validKey(key)||!proto(v)||!['html','css','js'].every(t=>typeof v[t as keyof typeof v]==='string'&&v[t as keyof typeof v].length<250000))throw new Error('პროექტის მონახაზი არასწორია.');
  for(const [key,v]of Object.entries(studio.notes))if(!validKey(key)||typeof v!=='string'||v.length>10000)throw new Error('პროექტის ჩანაწერი არასწორია.');
  for(const [day,v]of Object.entries(studio.activity))if(!/^\d{4}-\d{2}-\d{2}$/.test(day)||!Array.isArray(v)||!v.every(validKey))throw new Error('პროექტების აქტივობა არასწორია.');
 }
 return {...p,profile:{...pr,learning:{...defaultLearning,...pref}},studio:studio??emptyStudio()};
}
export function mergeProgress(local:Progress,cloud:Progress):Progress{
 const completed=[...new Set([...local.completed,...cloud.completed])].sort((a,b)=>a-b);const daily={...cloud.daily};for(const [k,v]of Object.entries(local.daily))daily[k]=[...new Set([...(daily[k]??[]),...v])];
 const studioLocal=local.studio??emptyStudio(),studioCloud=cloud.studio??emptyStudio();
 const activity={...studioCloud.activity};for(const [day,keys]of Object.entries(studioLocal.activity))activity[day]=[...new Set([...(activity[day]??[]),...keys])];
 const studio={completed:[...new Set([...studioCloud.completed,...studioLocal.completed])],drafts:{...studioCloud.drafts,...studioLocal.drafts},notes:{...studioCloud.notes,...studioLocal.notes},activity};
 return {...local,...(local.websiteGuide||cloud.websiteGuide?{websiteGuide:{completed:[...new Set([...(cloud.websiteGuide?.completed??[]),...(local.websiteGuide?.completed??[])])],notes:{...cloud.websiteGuide?.notes,...local.websiteGuide?.notes}}}:{}),...(local.vocabulary||cloud.vocabulary?{vocabulary:{saved:[...new Set([...(cloud.vocabulary?.saved??[]),...(local.vocabulary?.saved??[])])],known:[...new Set([...(cloud.vocabulary?.known??[]),...(local.vocabulary?.known??[])])]}}:{}),studio,completed,daily,reviews:[...new Map([...cloud.reviews,...local.reviews].map(r=>[r.lesson,r])).values()],attempts:[...cloud.attempts,...local.attempts].slice(-2000),project:{...cloud.project,...local.project},drafts:{...cloud.drafts,...local.drafts},milestones:[...new Set([...cloud.milestones,...local.milestones])],updated:new Date().toISOString()};
}
export function loadProgress():Progress{const raw=localStorage.getItem(KEY);if(!raw)return initialProgress();return parseProgress(raw);}
export function saveProgress(p:Progress){localStorage.setItem(KEY,JSON.stringify(p));}

export function finishStudio(p:Progress,key:string,now=new Date()):Progress {
 if(!/^(branon|health):v3:(?:[1-9]|1[0-9]|2[0-5])$/.test(key))return p;
 const studio=p.studio??emptyStudio();if(studio.completed.includes(key))return p;
 const [project,,number]=key.split(':');if(+number>1&&!studio.completed.includes(`${project}:v3:${+number-1}`))return p;
 const day=dayKey(now,p.profile.timezone);
 return {...p,studio:{...studio,completed:[...studio.completed,key],activity:{...studio.activity,[day]:[...new Set([...(studio.activity[day]??[]),key])]}},updated:now.toISOString()};
}
