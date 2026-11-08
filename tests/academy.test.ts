import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { initialProgress, complete, xp, canOpen, dayKey, finishReview, streak, parseProgress, mergeProgress, recordAttempt } from '../lib/academy/progress.ts';
import { lessons, modules, validateCurriculum } from '../lib/academy/curriculum.ts';
import { zipBytes } from '../lib/academy/zip.ts';
import { starterProject, referenceProject, pageNames } from '../lib/academy/project.ts';
import { instrument, isRuntimeMessage } from '../lib/academy/runtime.ts';

test('48 substantive lessons, 144 interactions and eight checkpoints validate',()=>{assert.deepEqual(validateCurriculum(),{lessons:48,exercises:144,modules:8,checkpoints:8});for(const l of lessons){assert.ok(l.explanation.length>160);assert.notEqual(l.starter[l.language],l.solution[l.language]);assert.ok(l.quiz.explanations.every(x=>x.length>15));}});
test('prerequisites and repeated completion cannot duplicate XP',()=>{let p=initialProgress();assert.equal(canOpen(2,p),false);assert.equal(complete(p,2),p);p=complete(p,1);assert.equal(xp(p),30);assert.equal(complete(p,1),p);assert.equal(canOpen(2,p),true);assert.equal(canOpen(3,p),false);assert.equal(xp(complete(p,2)),60);});
test('timezone-aware day boundaries and streak gaps',()=>{let p=initialProgress();p.profile.timezone='Asia/Tbilisi';p=complete(p,1,new Date('2026-10-24T21:00:00Z'));p=complete(p,2,new Date('2026-10-25T21:00:00Z'));assert.equal(dayKey(new Date('2026-10-25T20:01:00Z'),'Asia/Tbilisi'),'2026-10-26');assert.equal(streak(p,new Date('2026-10-26T10:00:00Z')),2);assert.equal(streak(p,new Date('2026-10-27T10:00:00Z')),2);assert.equal(streak(p,new Date('2026-10-28T10:00:00Z')),0);assert.equal(dayKey(new Date('2026-03-08T06:59:00Z'),'America/New_York'),'2026-03-08');});
test('browser backup restores exercise and project code unchanged',()=>{const p=initialProgress();p.project=starterProject();p.drafts['1']={html:'<h1>My saved idea</h1>',css:'h1 { color: red; }',js:'console.log("saved");'};const restored=parseProgress(JSON.stringify(p));assert.deepEqual(restored.project,p.project);assert.deepEqual(restored.drafts,p.drafts);});
test('imports reject malformed types, paths, timezones, oversized content and attempts',()=>{const p=initialProgress();for(const change of [{version:2},{completed:[1,1]},{completed:[49]},{project:{'../secret':'bad'}},{attempts:[{lesson:1,correct:'yes'}]},{profile:{...p.profile,timezone:'Mars/Nope'}},{drafts:{'1':{html:4,css:'',js:''}}}])assert.throws(()=>parseProgress(JSON.stringify({...p,...change})));assert.throws(()=>parseProgress('x'.repeat(3000001)));});
test('review schedule responds to errors and success without extra XP',()=>{let p=initialProgress();p=recordAttempt(p,1,'quiz',false);assert.equal(p.reviews[0].successes,0);assert.ok(new Date(p.reviews[0].due).getTime()<=Date.now());p=recordAttempt(p,1,'quiz',true);assert.equal(p.reviews[0].successes,1);assert.ok(new Date(p.reviews[0].due).getTime()>Date.now());assert.equal(xp(p),0);});
test('merge unions completions and preserves local project in conflicts',()=>{let a=initialProgress(),b=initialProgress();a=complete(a,1);b=complete(complete(b,1),2);a.project={'index.html':'local'};b.project={'index.html':'cloud','about.html':'about'};const merged=mergeProgress(a,b);assert.equal(xp(merged),60);assert.equal(merged.project['index.html'],'local');assert.equal(merged.project['about.html'],'about');assert.equal(new Set(merged.daily[dayKey(new Date(),a.profile.timezone)]).size,2);});
test('function checks accept correct alternatives and reject hard-coded answers',()=>{const lesson=lessons[34];for(const source of [lesson.solution.js,'function countWeb(projects) { return projects.filter(p => p.category === "web").length; }']){const ctx=vm.createContext({window:{__budget:()=>{}}});vm.runInContext(instrument(source),ctx);assert.ok(lesson.checks.every(c=>vm.runInContext(c.expression!,ctx)));}const bad=vm.createContext({});vm.runInContext('function countWeb() {return 2}',bad);assert.ok(lesson.checks.some(c=>!vm.runInContext(c.expression!,bad)));});
test('guards cover braced, unbraced loops and recursive functions',()=>{for(const source of ['while (true) {}','for (;;) continue;','function recurse(){return recurse()} recurse();','const f=()=>f();f();','for(const x of [1,2]) { while(true) {} }']){let calls=0;const ctx=vm.createContext({window:{__budget:()=>{if(++calls>100)throw new Error('budget');}}});assert.throws(()=>vm.runInContext(instrument(source),ctx,{timeout:1000}),/budget/);}});
test('instrumented arrow expressions retain values',()=>{const ctx=vm.createContext({window:{__budget:()=>{}}});assert.equal(vm.runInContext(instrument('const f=x=>x*2; f(4);'),ctx),8);});
test('runtime messages require token, shape and known message type',()=>{assert.ok(isRuntimeMessage({firstlight:'abc',type:'results',data:[]},'abc'));assert.equal(isRuntimeMessage({firstlight:'wrong',type:'results'},'abc'),false);assert.equal(isRuntimeMessage({firstlight:'abc',type:'credentials'},'abc'),false);});
test('capstone ZIP contains five pages and shared resources with preserved UTF-8 code',()=>{for(const files of [starterProject(),referenceProject()]){const bytes=zipBytes(files);const view=new DataView(bytes.buffer);const decoded:Record<string,string>={};let offset=0;while(view.getUint32(offset,true)===0x04034b50){const size=view.getUint32(offset+18,true),nameLength=view.getUint16(offset+26,true);const name=new TextDecoder().decode(bytes.slice(offset+30,offset+30+nameLength));decoded[name]=new TextDecoder().decode(bytes.slice(offset+30+nameLength,offset+30+nameLength+size));offset+=30+nameLength+size;}assert.deepEqual(decoded,files);for(const path of [...pageNames,'css/styles.css','js/main.js','assets/studio.svg','README.md'])assert.ok(path in decoded);assert.equal(view.getUint32(offset,true),0x02014b50);}});

test('a completed review counts on a new calendar day without additional XP',()=>{let p=initialProgress();p.profile.timezone='UTC';p=complete(p,1,new Date('2026-10-25T10:00Z'));p=finishReview(p,1,new Date('2026-10-26T10:00Z'));assert.equal(xp(p),30);assert.equal(streak(p,new Date('2026-10-26T12:00Z')),2);assert.deepEqual(p.daily['2026-10-26'],[1]);});

test('all 48 lessons and eight module descriptions have complete Georgian learning copy',()=>{
 assert.equal(modules.length,8);for(const moduleInfo of modules)for(const text of [moduleInfo.title,moduleInfo.short,moduleInfo.description])assert.match(text,/[ა-ჰ]/);
 for(const lesson of lessons){
  for(const field of ['title','objective','explanation','annotation','task','recap','connection'] as const)assert.match(lesson[field],/[ა-ჰ]/,`${lesson.id}: ${field}`);
  assert.match(lesson.quiz.question,/[ა-ჰ]/);assert.match(lesson.order.prompt,/[ა-ჰ]/);
  for(const text of [...lesson.hints,...lesson.quiz.explanations,...lesson.checks.map(c=>c.label)])assert.match(text,/[ა-ჰ]/);
  assert.equal(lesson.quiz.choices.length,lesson.quiz.explanations.length);
 }
});
test('new and reference exports use Georgian pages and truthful Georgian form feedback',()=>{
 for(const files of [starterProject(),referenceProject()]){
  for(const name of pageNames){assert.match(files[name],/<html lang="ka">/);assert.match(files[name],/მთავარი/);assert.match(files[name],/კონტაქტი/);}
  assert.match(files['README.md'],/გახსენი index.html/);
 }
 const files=referenceProject();assert.match(files['contact.html'],/შეტყობინებას არ აგზავნის/);assert.match(files['js/main.js'],/არაფერი გაგზავნილა/);
});
test('backup validation errors are understandable in Georgian',()=>{
 assert.throws(()=>parseProgress('{}'),/მხარდაჭერილი პროგრესის ასლი/);assert.throws(()=>parseProgress('not json'),/გამართული JSON/);
 const p=initialProgress();assert.throws(()=>parseProgress(JSON.stringify({...p,profile:{...p.profile,timezone:'Mars/Nope'}})),/დროის სარტყელი/);
});
