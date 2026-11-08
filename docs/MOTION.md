# Motion and feedback layer

Added on top of the existing app. Nothing here needs a new dependency or an asset file.

| File | Role |
| --- | --- |
| `lib/academy/fx.ts` | Motion preference, synthesized sounds (Web Audio), haptics, confetti engine |
| `lib/academy/voice.ts` | Varied encouragement lines, `pick(list, seed)`, `streakLine(days)` |
| `components/academy/Fx.tsx` | `Counter`, `Confetti`, `SoundToggle`, `useFlip` |
| `components/academy/Celebration.tsx` | The lesson-complete screen |
| `components/academy/LearningCoach.tsx` | Niko now takes `mood`: `idle`, `happy`, `think`, `oops` |
| `app/fx.css` | All keyframes and the feedback styles (loaded last in `layout.tsx`) |

## Rules
- **Reduced motion.** CSS animations are switched off by the existing rule in `globals.css`.
  JS effects must call `motionAllowed()` first. Both the OS setting and the in-app
  "reduced motion" profile switch are honoured.
- **Sound** is on by default, remembered in `localStorage['firstlight:sound']`, and
  toggled from the topbar. It is deliberately outside the progress backup.
- **Changing a sound:** edit `SCORES` in `fx.ts`. `tests/fx.test.ts` checks that notes are
  audible and gentle, and that "correct" rises while "wrong" falls.
- **Copy:** add lines to `praise` / `retry` in `voice.ts`. Lines are picked by attempt count,
  so they never change between re-renders.
- `translate` and `scale` (not `transform`) are used for entrance animations on elements
  that already use `transform` (the path map nodes use it for their horizontal shift).
