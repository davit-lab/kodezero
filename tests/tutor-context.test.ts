import test from 'node:test';
import assert from 'node:assert/strict';
import {tutorLessonContext} from '../lib/academy/tutor-lesson-context.ts';
test('teacher receives the actual lesson explanation and task without hidden solutions or grading data',()=>{for(const route of ['lesson/1','review/3','theory/core/13','skills/7','theory/skill/9']){const context=tutorLessonContext(route)!;assert.ok(context.title&&context.explanation&&context.task);assert.deepEqual(Object.keys(context).sort(),['explanation','task','title']);}assert.equal(tutorLessonContext('lesson/999'),null);assert.equal(tutorLessonContext('reference'),null);});
