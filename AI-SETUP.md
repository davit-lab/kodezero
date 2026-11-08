# Georgian AI tutor

The widget uses `/api/assistant`, a Next.js server endpoint. The Google API key is never shipped to the browser. No model fine-tuning is performed: Georgian teaching, programming, accessibility and sandbox instructions are supplied as a server-owned system instruction.

## Activate on Vercel

1. Open the existing **kodezero** Vercel project → Settings → Environment Variables.
2. Add `GEMINI_API_KEY` with your Google AI Studio key for Production. Do not name it `NEXT_PUBLIC_GEMINI_API_KEY`.
3. Optional: set `GEMINI_MODEL` (default `gemini-2.5-flash`). Choose a model supporting generateContent and the configured thinking options.
4. Redeploy the project. Open the tutor and send a short Georgian question.

The key from another ChatGPT conversation is not available to this checkout. The widget accurately reports an unconfigured connection instead of returning canned AI answers. Do not paste credentials into the tutor or commit them to Git.

## Behavior and limits

- History is held in component memory only, and disappears on reload. It is not included in progress exports.
- Sending a message sends it and recent conversation turns to Google. Selected editor files are attached only after the learner checks the attachment option. No provider requests happen merely by opening the widget.
- Generated HTML/CSS/JS can be opened in a separate sandbox; it never replaces a lesson draft automatically. JavaScript requires manual Run.
- Input, output and request duration are bounded. Requests are restricted to the same origin. The lightweight limiter allows 12 requests per IP per 10 minutes **per server instance**, and is not a distributed quota. Configure Vercel Firewall rate limits and provider billing/quota controls before large-scale public usage. The model must not be assumed accurate; the learner must test output.
- No external tools, code execution, network access or account mutations are granted to the model.
- `/api/assistant` GET reports configuration presence, not a successful credential check. POST reports provider failures without leaking provider error bodies or credentials.

Official API: https://ai.google.dev/api/generate-content
Key handling: https://ai.google.dev/gemini-api/docs/generate-content/api-key
