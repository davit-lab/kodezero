# Email accounts and learner profiles

The learner introduction, avatar builder, settings and course work without a cloud account. Passwords are never stored in progress backups. Email signup, login, confirmation, recovery, session refresh and private progress sync require a real Supabase project.

1. Apply `supabase/migrations/001_learning_state.sql` in your project's SQL editor. The migration is rerunnable, enables row-level security, and scopes learner records to the authenticated user.
2. Enable email/password authentication and email confirmation in Supabase Auth. Configure an email delivery service for production.
3. Add the production origin to Supabase Auth's Site URL and redirect allowlist. For this repository's deployment, use `https://kodezero.vercel.app/`. Add your development origin only when testing locally.
4. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to Vercel, using your project URL and **publishable or anon key**. Never use `service_role` or `sb_secret_*`.
5. Redeploy. `/` starts the guided introduction for a fresh learner; `/#account` exposes email account forms when configuration is valid.
6. Use two test accounts you control. Verify confirmation, rejected login, recovery, refresh, logout, and that each account can only read its own `learner_state`. After reading a cloud record, test the explicit merge/profile restore choices and the revision conflict guard before saving.

No cloud project or credentials are bundled. When configuration is absent, the account page honestly offers a local learner profile and backup rather than pretending registration succeeded.

Session persistence is optional and scoped to the browser tab (`sessionStorage`). Passwords are sent only to the configured Supabase Auth endpoint. Tokens are removed from callback URLs after processing and excluded from downloadable learner backups. Recovery links open the password update view; configure the redirect allowlist before testing.

Age and gender are optional, editable learner profile fields. They are not displayed in the shared interface. They stay in the browser unless the learner explicitly uploads a progress backup to their own cloud account. A downloaded progress backup includes them, so treat the backup as personal data.
