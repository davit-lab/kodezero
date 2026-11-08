import test from 'node:test';
import assert from 'node:assert/strict';
import { pick, praise, retry, streakLine } from '../lib/academy/voice.ts';
import { SCORES, motionAllowed, playSound, setSoundEnabled, soundEnabled, haptic } from '../lib/academy/fx.ts';

test('pick is deterministic, always in range and survives odd seeds', () => {
  for (const list of [praise, retry] as readonly (readonly string[])[]) {
    assert.ok(list.length >= 3, 'enough variety that feedback does not repeat every time');
    for (const seed of [0, 1, 7, 99, -3, -100, 2.9, Number.NaN, Infinity, 1e15]) {
      const a = pick(list, seed);
      assert.equal(a, pick(list, seed));
      assert.ok(list.includes(a));
    }
    // consecutive attempts walk through different lines
    assert.notEqual(pick(list, 0), pick(list, 1));
  }
});

test('every encouragement line is real, trimmed text with no duplicates', () => {
  for (const list of [praise, retry] as readonly (readonly string[])[]) {
    for (const line of list) assert.ok(line.trim() === line && line.length > 3);
    assert.equal(new Set(list).size, list.length);
  }
});

test('streak line reads naturally at each stage and stays silent at zero', () => {
  assert.equal(streakLine(0), '');
  assert.equal(streakLine(-4), '');
  assert.equal(streakLine(Number.NaN), '');
  assert.match(streakLine(1), /ხვალაც/);
  assert.ok(streakLine(3).includes('3'));
  assert.ok(streakLine(12).includes('12'));
  assert.notEqual(streakLine(3), streakLine(12));
});

test('every sound has valid, audible, well-ordered notes', () => {
  for (const [kind, notes] of Object.entries(SCORES)) {
    assert.ok(notes.length > 0, kind);
    for (const [freq, at, dur, type, peak] of notes) {
      assert.ok(freq >= 80 && freq <= 4000, `${kind} frequency ${freq}`);
      assert.ok(at >= 0 && at < 1, `${kind} offset`);
      assert.ok(dur > 0 && dur < 1.5, `${kind} duration`);
      assert.ok(peak > 0 && peak <= 0.12, `${kind} peak gain stays gentle`);
      assert.ok(['sine', 'triangle', 'sawtooth', 'square'].includes(type));
    }
  }
});

test('correct rises and wrong falls, so the ear can tell them apart', () => {
  const first = (k: keyof typeof SCORES) => SCORES[k][0][0];
  const last = (k: keyof typeof SCORES) => SCORES[k][SCORES[k].length - 1][0];
  assert.ok(last('correct') > first('correct'));
  assert.ok(last('wrong') < first('wrong'));
  // the wrong sound must be quieter than the correct one: it nudges, it does not punish
  const loudest = (k: keyof typeof SCORES) => Math.max(...SCORES[k].map(n => n[4]));
  assert.ok(loudest('wrong') < loudest('correct'));
});

test('effects are safe no-ops outside a browser', () => {
  assert.equal(motionAllowed(), false);
  assert.equal(soundEnabled(), true);
  assert.doesNotThrow(() => { setSoundEnabled(false); playSound('correct'); playSound('complete'); haptic([10, 20]); });
});
