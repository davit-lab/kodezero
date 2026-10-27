import test from 'node:test';
import assert from 'node:assert/strict';

import { studioProjects, studioCanOpen, studioNext, studioDocument, studioCount, stageKey } from '../lib/academy/studio.ts';
import { initialProgress, finishStudio, parseProgress, mergeProgress, xp, streak, complete, defaultLearning } from '../lib/academy/progress.ts';
import { instrument } from '../lib/academy/runtime.ts';

test('six authored project paths have 108 incremental stages and independent transfer briefs',()=>{
 assert.equal(studioProjects.length,6);assert.equal(new Set(studioProjects.map(p=>p.id)).size,6);
 for(const project of studioProjects){
  assert.equal(project.stages.length,18);assert.ok(project.reuse.length>60);assert.ok(project.preview.html.length>500);
  for(const [i,stage] of project.stages.entries()){
   assert.equal(stage.id,i+1);assert.ok(stage.explanation.length>180);assert.ok(stage.hints.length>=2);assert.ok(stage.checks.length>=3);assert.ok(stage.review.length>=1);
   assert.notDeepEqual(stage.starter,stage.solution);assert.match(stage.task,/[ა-ჰ]/);
   for(const code of [stage.starter.js,stage.solution.js])assert.doesNotThrow(()=>instrument(code),`${project.id}:${stage.id}`);
   if(i>0&&!stage.resetStarter)assert.deepEqual(stage.starter,project.stages[i-1].solution);
  }
  assert.ok(project.stages[17].transfer);assert.ok(project.stages.slice(0,17).every(s=>!s.transfer));
 }
});
test('project stages open sequentially, keep each path selectable, and never duplicate XP',()=>{
 let p=initialProgress();for(const project of studioProjects)assert.ok(studioCanOpen(project.id,1,p));
 assert.equal(studioCanOpen('solis',2,p),false);assert.equal(studioCanOpen('missing',1,p),false);assert.equal(studioCanOpen('solis',19,p),false);
 assert.equal(finishStudio(p,'solis:v2:2'),p);assert.equal(finishStudio(p,'bad:v2:1'),p);
 p=finishStudio(p,'solis:v2:1');assert.equal(xp(p),20);assert.equal(finishStudio(p,'solis:v2:1'),p);assert.ok(studioCanOpen('solis',2,p));
 assert.equal(studioNext(p)?.stage.id,2);p=complete(p,1);assert.equal(xp(p),50);
});
test('project activity shares calendar streaks with lessons across timezone boundaries',()=>{
 let p=initialProgress();p.profile.timezone='Asia/Tbilisi';p=complete(p,1,new Date('2026-10-24T21:00Z'));p=finishStudio(p,'solis:v2:1',new Date('2026-10-25T21:00Z'));
 assert.equal(streak(p,new Date('2026-10-26T10:00Z')),2);assert.deepEqual(p.studio?.activity['2026-10-26'],['solis:v2:1']);
});
test('legacy backups migrate without losing code or lesson progress',()=>{
 const legacy=initialProgress();delete legacy.studio;delete legacy.profile.learning;legacy.drafts['1']={html:'<h1>ჩემი მონახაზი</h1>',css:'',js:''};legacy.completed=[1];
 const restored=parseProgress(JSON.stringify(legacy));assert.deepEqual(restored.drafts,legacy.drafts);assert.deepEqual(restored.completed,[1]);assert.deepEqual(restored.profile.learning,defaultLearning);assert.deepEqual(restored.studio?.completed,[]);
});
test('backup roundtrip preserves studio drafts, notes, preferences and completion',()=>{
 const p=finishStudio(initialProgress(),'solis:v2:1');p.studio!.drafts['solis:v2:1']=studioProjects[0].stages[0].solution;p.studio!.notes['solis:v2:1']='ამ ბადეს ფოტოგრაფის საიტისთვის გამოვიყენებ.';p.profile.learning={...defaultLearning,mode:'challenge',editorSize:18,autoPreview:false};
 assert.deepEqual(parseProgress(JSON.stringify(p)),p);
 for(const mutation of [{...p,studio:{...p.studio,completed:['solis:v2:19']}},{...p,studio:{...p.studio,drafts:{'../secret':{html:'',css:'',js:''}}}},{...p,profile:{...p.profile,learning:{...defaultLearning,editorSize:99}}},{...p,studio:{...p.studio,notes:{'solis:v2:1':4}}}])assert.throws(()=>parseProgress(JSON.stringify(mutation)));
});
test('cloud merging unions project completions and activity while preserving local edits',()=>{
 const local=finishStudio(initialProgress(),'solis:v2:1'),cloud=finishStudio(finishStudio(initialProgress(),'bloom:v2:1'),'bloom:v2:2');
 local.studio!.drafts['solis:v2:1']={html:'local',css:'',js:''};cloud.studio!.drafts['solis:v2:1']={html:'cloud',css:'',js:''};cloud.studio!.notes['bloom:v2:1']='ღილაკის მდგომარეობა';
 const merged=mergeProgress(local,cloud);assert.equal(merged.studio?.completed.length,3);assert.equal(merged.studio?.drafts['solis:v2:1'].html,'local');assert.equal(merged.studio?.notes['bloom:v2:1'],'ღილაკის მდგომარეობა');assert.equal(xp(merged),60);
});
test('legacy studio work stays intact without unlocking redesigned paths',()=>{
 const p=initialProgress();p.studio!.completed=['solis:1','solis:2'];p.studio!.drafts['solis:2']={html:'<h1>ძველი კოდი</h1>',css:'',js:''};p.studio!.notes['solis:2']='ძველი ჩანაწერი';p.studio!.activity={'2026-10-26':['solis:1','solis:2']};
 const restored=parseProgress(JSON.stringify(p));assert.deepEqual(restored,p);assert.equal(studioCount(restored),0);assert.equal(xp(restored),40);assert.equal(studioCanOpen('solis',2,restored),false);assert.ok(studioCanOpen('solis',1,restored));
 const next=finishStudio(restored,stageKey('solis',1));assert.equal(xp(next),60);assert.equal(next.studio?.drafts['solis:2'].html,'<h1>ძველი კოდი</h1>');
});
test('all eighteen steps can be completed and backed up, without accepting invalid keys',()=>{
 let p=initialProgress();for(const project of studioProjects)for(const stage of project.stages)p=finishStudio(p,stageKey(project.id,stage.id));
 assert.equal(studioCount(p),108);assert.equal(xp(p),2160);assert.equal(studioNext(p),null);assert.deepEqual(parseProgress(JSON.stringify(p)),p);
 for(const key of ['solis:v2:0','solis:v2:19','solis:v2:1.5','solis:7','unknown:v2:1'])assert.equal(finishStudio(p,key),p);
});
test('debug starter is intentionally broken and transfer changes content and storage namespace',()=>{
 for(const project of studioProjects){assert.ok(project.stages[15].resetStarter);assert.match(project.stages[15].starter.js,/menu.open=false;trigger/);assert.match(project.stages[15].solution.js,/menu.open=!menu.open/);assert.match(project.stages[17].solution.js,new RegExp('firstlight-transfer-'+project.id+'-v2'));assert.match(project.stages[17].solution.html,/transfer-brief/);}
});
test('static visual targets are inert, Georgian and useful before running code',()=>{
 for(const project of studioProjects){const doc=studioDocument(project.preview);assert.match(doc,/<html lang="ka">/);assert.match(doc,/script-src 'none'/);assert.doesNotMatch(doc,/<script>/);assert.match(doc,/<h1>/);}
 assert.match(studioProjects.find(p=>p.id==='atlas')!.preview.html,/ყაზბეგი/);assert.match(studioProjects.find(p=>p.id==='orbit')!.preview.html,/4400/);
 assert.equal(stageKey('solis',1),'solis:v2:1');
});

test('a full set of saved redesigned drafts fits the supported backup and roundtrips',()=>{
 const p=initialProgress();for(const project of studioProjects)for(const stage of project.stages)p.studio!.drafts[stageKey(project.id,stage.id)]=stage.solution;
 const json=JSON.stringify(p);assert.ok(json.length<3_000_000);assert.deepEqual(parseProgress(json),p);
});
