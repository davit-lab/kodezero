import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { studioProjects, studioCanOpen, studioNext, studioDocument, stageKey } from '../lib/academy/studio.ts';
import { initialProgress, finishStudio, parseProgress, mergeProgress, xp, streak, complete, defaultLearning } from '../lib/academy/progress.ts';
import { instrument } from '../lib/academy/runtime.ts';

test('six authored project paths have 36 incremental stages and independent transfer briefs',()=>{
 assert.equal(studioProjects.length,6);assert.equal(new Set(studioProjects.map(p=>p.id)).size,6);
 for(const project of studioProjects){
  assert.equal(project.stages.length,6);assert.ok(project.reuse.length>60);assert.ok(project.preview.html.length>500);
  for(const [i,stage] of project.stages.entries()){
   assert.equal(stage.id,i+1);assert.ok(stage.explanation.length>180);assert.ok(stage.hints.length>=2);assert.ok(stage.checks.length>=3);assert.ok(stage.review.length>=1);
   assert.notDeepEqual(stage.starter,stage.solution);assert.match(stage.task,/[ა-ჰ]/);
   for(const code of [stage.starter.js,stage.solution.js])assert.doesNotThrow(()=>instrument(code),`${project.id}:${stage.id}`);
   if(i>0)assert.deepEqual(stage.starter,project.stages[i-1].solution);
  }
  assert.ok(project.stages[5].transfer);assert.ok(project.stages.slice(0,5).every(s=>!s.transfer));
 }
});
test('project stages open sequentially, keep each path selectable, and never duplicate XP',()=>{
 let p=initialProgress();for(const project of studioProjects)assert.ok(studioCanOpen(project.id,1,p));
 assert.equal(studioCanOpen('solis',2,p),false);assert.equal(studioCanOpen('missing',1,p),false);assert.equal(studioCanOpen('solis',7,p),false);
 assert.equal(finishStudio(p,'solis:2'),p);assert.equal(finishStudio(p,'bad:1'),p);
 p=finishStudio(p,'solis:1');assert.equal(xp(p),20);assert.equal(finishStudio(p,'solis:1'),p);assert.ok(studioCanOpen('solis',2,p));
 assert.equal(studioNext(p)?.stage.id,2);p=complete(p,1);assert.equal(xp(p),50);
});
test('project activity shares calendar streaks with lessons across timezone boundaries',()=>{
 let p=initialProgress();p.profile.timezone='Asia/Tbilisi';p=complete(p,1,new Date('2026-10-24T21:00Z'));p=finishStudio(p,'solis:1',new Date('2026-10-25T21:00Z'));
 assert.equal(streak(p,new Date('2026-10-26T10:00Z')),2);assert.deepEqual(p.studio?.activity['2026-10-26'],['solis:1']);
});
test('legacy backups migrate without losing code or lesson progress',()=>{
 const legacy=initialProgress();delete legacy.studio;delete legacy.profile.learning;legacy.drafts['1']={html:'<h1>ჩემი მონახაზი</h1>',css:'',js:''};legacy.completed=[1];
 const restored=parseProgress(JSON.stringify(legacy));assert.deepEqual(restored.drafts,legacy.drafts);assert.deepEqual(restored.completed,[1]);assert.deepEqual(restored.profile.learning,defaultLearning);assert.deepEqual(restored.studio?.completed,[]);
});
test('backup roundtrip preserves studio drafts, notes, preferences and completion',()=>{
 const p=finishStudio(initialProgress(),'solis:1');p.studio!.drafts['solis:1']=studioProjects[0].stages[0].solution;p.studio!.notes['solis:1']='ამ ბადეს ფოტოგრაფის საიტისთვის გამოვიყენებ.';p.profile.learning={...defaultLearning,mode:'challenge',editorSize:18,autoPreview:false};
 assert.deepEqual(parseProgress(JSON.stringify(p)),p);
 for(const mutation of [{...p,studio:{...p.studio,completed:['solis:7']}},{...p,studio:{...p.studio,drafts:{'../secret':{html:'',css:'',js:''}}}},{...p,profile:{...p.profile,learning:{...defaultLearning,editorSize:99}}},{...p,studio:{...p.studio,notes:{'solis:1':4}}}])assert.throws(()=>parseProgress(JSON.stringify(mutation)));
});
test('cloud merging unions project completions and activity while preserving local edits',()=>{
 const local=finishStudio(initialProgress(),'solis:1'),cloud=finishStudio(finishStudio(initialProgress(),'bloom:1'),'bloom:2');
 local.studio!.drafts['solis:1']={html:'local',css:'',js:''};cloud.studio!.drafts['solis:1']={html:'cloud',css:'',js:''};cloud.studio!.notes['bloom:1']='ღილაკის მდგომარეობა';
 const merged=mergeProgress(local,cloud);assert.equal(merged.studio?.completed.length,3);assert.equal(merged.studio?.drafts['solis:1'].html,'local');assert.equal(merged.studio?.notes['bloom:1'],'ღილაკის მდგომარეობა');assert.equal(xp(merged),60);
});
test('dashboard summary function handles unseen and empty data rather than hard-coded metrics',()=>{
 const stage=studioProjects.find(p=>p.id==='orbit')!.stages[2];
 const node={replaceChildren(){},append(){},textContent:'',className:''};
 const context=vm.createContext({window:{__budget(){}},document:{querySelector:()=>({...node}),createElement:()=>({...node})}});
 vm.runInContext(instrument(stage.solution.js),context);
 assert.equal(vm.runInContext('summarize([{budget:19,active:true},{budget:23,active:false}]).budget',context),42);
 assert.equal(vm.runInContext('summarize([]).count + summarize([]).budget + summarize([]).active',context),0);
});
test('static visual targets are inert, Georgian and useful before running code',()=>{
 for(const project of studioProjects){const doc=studioDocument(project.preview);assert.match(doc,/<html lang="ka">/);assert.match(doc,/script-src 'none'/);assert.doesNotMatch(doc,/<script>/);assert.match(doc,/<h1>/);}
 assert.match(studioProjects.find(p=>p.id==='atlas')!.preview.html,/ყაზბეგი/);assert.match(studioProjects.find(p=>p.id==='orbit')!.preview.html,/4400/);
 assert.equal(stageKey('solis',1),'solis:1');
});
