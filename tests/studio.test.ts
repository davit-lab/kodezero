import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { studioProjects, studioCanOpen, studioNext, studioDocument, studioCount, stageKey, studioTotal, isCurrentStudioKey } from '../lib/academy/studio.ts';
import { initialProgress, finishStudio, parseProgress, mergeProgress, xp, streak, complete, defaultLearning } from '../lib/academy/progress.ts';
import { instrument } from '../lib/academy/runtime.ts';

test('the uploaded restaurant and clinic designs have fifty progressive authored stages',()=>{
 assert.deepEqual(studioProjects.map(project=>project.id),['branon','health']);assert.equal(studioTotal,50);
 for(const project of studioProjects){
  assert.equal(project.stages.length,25);assert.ok(project.reuse.length>60);assert.ok(project.sourceArchive?.endsWith('.zip'));
  for(const [i,stage] of project.stages.entries()){
   assert.equal(stage.id,i+1);assert.ok(stage.explanation.length>180);assert.ok(stage.hints.length>=2);assert.ok(stage.checks.length>=3);assert.ok(stage.review.length>=1);assert.ok(stage.source?.file);assert.match(stage.task,/[ა-ჰ]/);
   assert.notDeepEqual(stage.starter,stage.solution);
   for(const code of [stage.starter.js,stage.solution.js])assert.doesNotThrow(()=>instrument(code),`${project.id}:${stage.id}`);
   if(i>0&&!stage.resetStarter)assert.deepEqual(stage.starter,project.stages[i-1].solution);
  }
  assert.ok(project.stages[24].transfer);assert.ok(project.stages.slice(0,24).every(stage=>!stage.transfer));
 }
});
test('stages open sequentially and repeated completion never duplicates XP',()=>{
 let p=initialProgress();for(const project of studioProjects)assert.ok(studioCanOpen(project.id,1,p));
 assert.equal(studioCanOpen('branon',2,p),false);assert.equal(studioCanOpen('missing',1,p),false);assert.equal(studioCanOpen('branon',26,p),false);
 assert.equal(finishStudio(p,'branon:v3:2'),p);assert.equal(finishStudio(p,'solis:v2:1'),p);
 p=finishStudio(p,stageKey('branon',1));assert.equal(xp(p),20);assert.equal(finishStudio(p,stageKey('branon',1)),p);assert.ok(studioCanOpen('branon',2,p));assert.equal(studioNext(p)?.stage.id,2);
 p=complete(p,1);assert.equal(xp(p),50);
});
test('uploaded project activity shares timezone-aware calendar streaks with lessons',()=>{
 let p=initialProgress();p.profile.timezone='Asia/Tbilisi';p=complete(p,1,new Date('2026-10-24T21:00Z'));p=finishStudio(p,'health:v3:1',new Date('2026-10-25T21:00Z'));
 assert.equal(streak(p,new Date('2026-10-26T10:00Z')),2);assert.deepEqual(p.studio?.activity['2026-10-26'],['health:v3:1']);
});
test('old backups retain drafts, notes, completions and XP without unlocking new lessons',()=>{
 const p=initialProgress();p.studio!.completed=['solis:1','solis:v2:1','solis:v2:2'];p.studio!.drafts['solis:v2:2']={html:'<h1>ჩემი ძველი კოდი</h1>',css:'',js:''};p.studio!.notes['solis:v2:2']='ძველი ჩანაწერი';p.studio!.activity={'2026-10-26':['solis:1','solis:v2:1','solis:v2:2']};
 const restored=parseProgress(JSON.stringify(p));assert.deepEqual(restored,p);assert.equal(studioCount(restored),0);assert.equal(xp(restored),60);assert.equal(studioCanOpen('branon',2,restored),false);assert.equal(isCurrentStudioKey('solis:v2:2'),false);
 const next=finishStudio(restored,stageKey('branon',1));assert.equal(xp(next),80);assert.deepEqual(next.studio?.drafts,restored.studio?.drafts);
});
test('legacy lesson-only backups gain default studio and learning preferences',()=>{
 const legacy=initialProgress();delete legacy.studio;delete legacy.profile.learning;legacy.drafts['1']={html:'<h1>მონახაზი</h1>',css:'',js:''};legacy.completed=[1];
 const restored=parseProgress(JSON.stringify(legacy));assert.deepEqual(restored.drafts,legacy.drafts);assert.deepEqual(restored.completed,[1]);assert.deepEqual(restored.profile.learning,defaultLearning);assert.deepEqual(restored.studio?.completed,[]);
});
test('backup roundtrip preserves uploaded project code and rejects invalid stage keys',()=>{
 const p=finishStudio(initialProgress(),'branon:v3:1');p.studio!.drafts['branon:v3:1']=studioProjects[0].stages[0].solution;p.studio!.notes['branon:v3:1']='სტრუქტურა და ვიზუალი ცალკე ნაწილებია.';
 assert.deepEqual(parseProgress(JSON.stringify(p)),p);
 for(const key of ['branon:v3:0','branon:v3:26','health:v3:1.5','solis:v2:19','../secret'])assert.throws(()=>parseProgress(JSON.stringify({...p,studio:{...p.studio,completed:[key]}})));
});
test('merging unions both course generations while preserving local edits',()=>{
 const local=finishStudio(initialProgress(),'branon:v3:1'),cloud=finishStudio(finishStudio(initialProgress(),'health:v3:1'),'health:v3:2');
 local.studio!.drafts['branon:v3:1']={html:'local',css:'',js:''};cloud.studio!.drafts['branon:v3:1']={html:'cloud',css:'',js:''};cloud.studio!.completed.push('solis:v2:1');
 const merged=mergeProgress(local,cloud);assert.equal(merged.studio?.completed.length,4);assert.equal(studioCount(merged),3);assert.equal(merged.studio?.drafts['branon:v3:1'].html,'local');assert.equal(xp(merged),80);
});
test('all fifty stages can finish and a full set of drafts fits the supported backup',()=>{
 let p=initialProgress();for(const project of studioProjects)for(const stage of project.stages){p=finishStudio(p,stageKey(project.id,stage.id));p.studio!.drafts[stageKey(project.id,stage.id)]=stage.solution;}
 assert.equal(studioCount(p),50);assert.equal(xp(p),1000);assert.equal(studioNext(p),null);const json=JSON.stringify(p);assert.ok(json.length<3_000_000);assert.deepEqual(parseProgress(json),p);
 for(const key of ['branon:v3:0','branon:v3:26','solis:7','unknown:v3:1'])assert.equal(finishStudio(p,key),p);
});
test('debug case targets a real boundary error; transfer changes data and storage namespace',()=>{
 for(const project of studioProjects){const debug=project.stages[23],transfer=project.stages[24];assert.ok(debug.resetStarter);assert.match(debug.starter.js,/slideIndex=index;/);assert.match(debug.solution.js,/\(index\+slides.length\)%slides.length/);assert.match(transfer.solution.js,new RegExp('independent-course-'+project.id+'-v3'));assert.match(transfer.solution.html,/transfer-brief/);}
});
test('visual targets use the uploaded images and remain inert until explicitly interactive',()=>{
 for(const project of studioProjects){const doc=studioDocument(project.preview);assert.match(doc,/<html lang="ka">/);assert.match(doc,/script-src 'none'/);assert.doesNotMatch(doc,/<script>/);assert.match(doc,/<h1/);
  const paths=new Set(Object.values(project.preview).join('\n').match(/\/course-assets\/(?:branon|health)\/[A-Za-z0-9_-]+\.(?:jpg|png)/g));assert.ok(paths.size>=8);for(const path of paths)assert.ok(existsSync(new URL('../public'+path,import.meta.url)),path);
 }
 assert.equal(stageKey('branon',1),'branon:v3:1');assert.ok(isCurrentStudioKey('health:v3:25'));
});
