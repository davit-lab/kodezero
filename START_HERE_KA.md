# Firstlight — ქართული ვერსიის გაშვება და GitHub-ზე ატვირთვა

ეს არის პლატფორმის სრული საწყისი კოდი: 48 გაკვეთილი, 144 სავარჯიშო, რედაქტორი, ხუთგვერდიანი პროექტის სამუშაო სივრცე და არასავალდებულო Supabase მიგრაცია.

## გაშვება

საჭიროა Node.js 22.13 ან ახალი ვერსია და pnpm 11.25.0.

```bash
cd firstlight
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install
pnpm dev
```

ბრაუზერში გახსენი ტერმინალში ნაჩვენები ადგილობრივი მისამართი (ჩვეულებრივ http://localhost:5173).

შემოწმება: `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`.

## GitHub-ზე ატვირთვა

ეს ZIP Git ისტორიას არ შეიცავს. ამოარქივე და გახსენი firstlight საქაღალდე. GitHub-ზე შექმენი ცარიელი რეპოზიტორია და მისამართი ქვემოთ გამოიყენე:

```bash
git init -b main
git add .
git commit -m "Initial commit: Firstlight Georgian learning platform"
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

`YOUR_GITHUB_REPOSITORY_URL` შეცვალე შენს რეპოზიტორიაში ნაჩვენები HTTPS ან SSH მისამართით.

თუ GitHub CLI გაქვს, ცალკე რეპოზიტორიის შექმნა და ატვირთვა შეგიძლია ასე:

```bash
gh auth login
gh repo create firstlight --private --source=. --remote=origin --push
```

CLI-ის გზა გამოიყენე მხოლოდ მაშინ, თუ origin ჯერ არ დაგიმატებია.

## მნიშვნელოვანი ფაილები

- `README.md` — სრული ქართული ინსტრუქცია.
- `lib/academy/curriculum-ka.ts` — 48 გაკვეთილის ქართული ტექსტები.
- `components/academy/` — ინტერფეისი და რედაქტორი.
- `supabase/migrations/001_learning_state.sql` — არასავალდებულო ღრუბლოვანი სინქრონიზაცია.
- `.env.example` — მხოლოდ საჯარო კონფიგურაციის მაგალითი.
- `QA.md` — ჩატარებული შემოწმებები და მათი შეზღუდვები.

სტუმრის რეჟიმს ანგარიშის გასაღებები არ სჭირდება. Supabase ავტორიზაციას ცალკე გამართვა სჭირდება. საიტის საცავში არსებული მოსწავლეების პროგრესი ამ ZIP-ში არ შედის: ის თითოეული მომხმარებლის ბრაუზერში ინახება.

არქივში არსებული ჰოსტინგის კონფიგურაცია ნეიტრალურია და თავდაპირველი კერძო საიტის იდენტიფიკატორს არ შეიცავს. არქივში არ შედის node_modules, აგების შედეგები, Git ისტორია და პირადი გარემოს ფაილები.
