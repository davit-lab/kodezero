import type { CodeFiles, Check, Progress } from './types';
export type StudioStage = { id:number; title:string; concept:string; explanation:string; task:string; snippet:string; hints:string[]; checks:Check[]; review:string[]; starter:CodeFiles; solution:CodeFiles; transfer:boolean };
export type StudioProject = { id:string; title:string; subtitle:string; kind:string; level:number; minutes:number; skills:string[]; lessons:number[]; accent:string; paper:string; ink:string; brief:string; audience:string; reuse:string; preview:CodeFiles; stages:StudioStage[] };
export const studioProjects:StudioProject[] = [
  {
    "id": "solis",
    "title": "Solis — შენი პორტფოლიო",
    "subtitle": "იდეები, რომლებსაც საკუთარი სივრცე აქვთ.",
    "kind": "პორტფოლიო",
    "level": 1,
    "minutes": 90,
    "skills": [
      "სემანტიკური HTML",
      "ტიპოგრაფია",
      "Grid",
      "ადაპტირებადი დიზაინი"
    ],
    "lessons": [
      4,
      8,
      15,
      18,
      22,
      26
    ],
    "accent": "#d9f279",
    "paper": "#f5f5ed",
    "ink": "#21312a",
    "brief": "შექმენი ახალგაზრდა დიზაინერის პორტფოლიო: მკაფიო გაცნობა, სამი ნამუშევარი და ელფოსტის ბმული.",
    "audience": "კლიენტი, რომელიც 30 წამში უნდა მიხვდეს, რას ქმნი.",
    "reuse": "იგივე სტრუქტურით ააწყობ ფოტოგრაფის, არქიტექტორის ან დეველოპერის პორტფოლიოს.",
    "stages": [
      {
        "id": 1,
        "title": "სათქმელი და სტრუქტურა",
        "concept": "სემანტიკური HTML",
        "explanation": "საიტი კითხვაზე პასუხით იწყება: ვინ ხარ, რას ქმნი და რა შეუძლია ვიზიტორს შემდეგ? main-ის შიგნით section აერთიანებს შესავალს, h1 აღწერს მთავარ სათქმელს, ბმული კი კონკრეტულ შედეგამდე მიდის. ჯერ მნიშვნელობა დაწერე, შემდეგ — დეკორაცია.",
        "task": "main-ში დაამატე .hero სექცია, ერთი h1, .intro აბზაცი და #work-ზე მიმავალი ბმული. ტექსტი შეგიძლია შენი სიტყვებით დაწერო.",
        "snippet": "<section class=\"hero\">\n  <h1>ვქმნი იდეებს, რომლებიც მუშაობს.</h1>\n  <p class=\"intro\">დიზაინერი და ვების შემქმნელი.</p>\n  <a href=\"#work\">ნამუშევრები</a>\n</section>",
        "hints": [
          "იპოვე main-ის შიგნით კომენტარი და მის ადგილას დაწერე სექცია.",
          "კლასებს ზუსტად .hero და .intro დაარქვი: მათ შემდეგ სტილებში გამოიყენებ."
        ],
        "checks": [
          {
            "label": "გვერდს ერთი მთავარი h1 აქვს",
            "selector": "main h1",
            "count": 1
          },
          {
            "label": "გაცნობის სექციას განმარტება აქვს",
            "selector": ".hero .intro"
          },
          {
            "label": "მოქმედების ბმულს შიდა მისამართი აქვს",
            "selector": ".hero a",
            "attribute": "href",
            "contains": "#"
          }
        ],
        "review": [
          "h1 ზუსტად ამბობს, რას სთავაზობს ავტორი ვიზიტორს."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">solis®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#work\">ნამუშევრები</a><a href=\"#contact\">კონტაქტი</a></nav>\n</header>\n<main>\n  <!-- შენი პირველი სექცია აქ დაამატე. -->\n</main>\n<footer>შექმნილია სწავლის პროცესში · solis®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">solis®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#work\">ნამუშევრები</a><a href=\"#contact\">კონტაქტი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დიზაინი · დეველოპმენტი</p>\n    <h1>იდეას მიეცი<br>საკუთარი სივრცე.</h1>\n    <p class=\"intro\">გამარჯობა, მე ანა ვარ. ვქმნი მკაფიო ბრენდებსა და ცოცხალ ვებგამოცდილებებს.</p>\n    <a class=\"button\" href=\"#work\">ნახე ნამუშევრები ↗</a>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · solis®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 2,
        "title": "სარედაქციო ტიპოგრაფია",
        "concept": "CSS ცვლადები და იერარქია",
        "explanation": "ლამაზი გვერდი შრიფტის ზომების შემთხვევითი არჩევანი არ არის. სამ ფერს ცვლადებში ვინახავთ, h1-ის ზომას clamp() ვანიჭებთ და ტექსტს სუნთქვისთვის სივრცეს ვუტოვებთ. line-height გრძელ ტექსტს წაკითხვადს ხდის, max-width კი თვალს ზედმეტად გრძელი ხაზის გავლას არ აიძულებს.",
        "task": "შექმენი --accent ცვლადი. header-ს მიეცი flex განლაგება. h1-ის ზომა მინიმუმ 32px გახადე და body-ის line-height მინიმუმ 1.5.",
        "snippet": ".hero { padding: 60px 0; }\nh1 { font-size: clamp(32px, 5vw, 68px); line-height: 1.18; }\nheader { display: flex; justify-content: space-between; }",
        "hints": [
          ":root-ში განსაზღვრე --accent და var(--accent)-ით გამოიყენე.",
          "line-height: 1.7 მიუთითე body-ზე; სათაურისთვის ცალკე 1.18 გამოიყენე."
        ],
        "checks": [
          {
            "label": "header იყენებს Flexbox-ს",
            "selector": "header",
            "property": "display",
            "values": [
              "flex"
            ]
          },
          {
            "label": "სათაური საკმარისად დიდია",
            "expression": "parseFloat(getComputedStyle(document.querySelector('h1')).fontSize)>=32"
          },
          {
            "label": "ძირითადი ტექსტის ხაზები წაკითხვადია",
            "expression": "parseFloat(getComputedStyle(document.body).lineHeight)/parseFloat(getComputedStyle(document.body).fontSize)>=1.5"
          },
          {
            "label": "აქცენტის ფერი ცვლადშია",
            "expression": "getComputedStyle(document.documentElement).getPropertyValue('--accent').trim().length>0"
          }
        ],
        "review": [
          "სათაური, აღწერა და მოქმედება ვიზუალურად სხვადასხვა მნიშვნელობისაა."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">solis®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#work\">ნამუშევრები</a><a href=\"#contact\">კონტაქტი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დიზაინი · დეველოპმენტი</p>\n    <h1>იდეას მიეცი<br>საკუთარი სივრცე.</h1>\n    <p class=\"intro\">გამარჯობა, მე ანა ვარ. ვქმნი მკაფიო ბრენდებსა და ცოცხალ ვებგამოცდილებებს.</p>\n    <a class=\"button\" href=\"#work\">ნახე ნამუშევრები ↗</a>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · solis®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">solis®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#work\">ნამუშევრები</a><a href=\"#contact\">კონტაქტი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დიზაინი · დეველოპმენტი</p>\n    <h1>იდეას მიეცი<br>საკუთარი სივრცე.</h1>\n    <p class=\"intro\">გამარჯობა, მე ანა ვარ. ვქმნი მკაფიო ბრენდებსა და ცოცხალ ვებგამოცდილებებს.</p>\n    <a class=\"button\" href=\"#work\">ნახე ნამუშევრები ↗</a>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · solis®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d9f279; --paper: #f5f5ed; --ink: #21312a; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { position: relative; isolation: isolate; } .hero h1 { max-width: 720px; } .hero:after { content: \"✳\"; color: var(--accent); position: absolute; right: 12px; top: 30px; font-size: 190px; line-height: 1; z-index: -1; } @media(max-width:700px) { .hero:after { display:none; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 3,
        "title": "შექმენი პროექტების გალერეა",
        "concept": "განმეორებადი კომპონენტები",
        "explanation": "ერთი კარგი ბარათი განმეორებადი კომპონენტის დასაწყისია. article-ს დამოუკიდებელი შინაარსი აქვს: ვიზუალური ნიმუში, სათაური და აღწერა. ერთნაირი კლასები ყველა ბარათს ერთიან ენას აძლევს. ამ ეტაპზე სამი პროექტი დაწერე; შემდეგ მათ ეკრანის ზომას მოვარგებთ.",
        "task": "შექმენი #work სექცია, .grid მშობელი და სამი article.card. თითოეულ ბარათში ჩასვი .art დეკორაცია, h2 და განმარტება.",
        "snippet": "<section id=\"work\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\">✳</div><h2>ბრენდის ისტორია</h2><p>იდენტობა კაფესთვის.</p></article>\n  </div>\n</section>",
        "hints": [
          "სექცია main-ის დასრულებამდე დაამატე.",
          "სამივე ბარათს .card კლასი მიეცი; დეკორაციაზე aria-hidden=\"true\" გამოიყენე."
        ],
        "checks": [
          {
            "label": "სამი დამოუკიდებელი ბარათია",
            "selector": "#work article.card",
            "count": 3
          },
          {
            "label": "თითოეულ ბარათს სათაური აქვს",
            "selector": "#work .card h2",
            "count": 3
          },
          {
            "label": "სამივე ბარათს ვიზუალური არე აქვს",
            "selector": "#work .art",
            "count": 3
          }
        ],
        "review": [
          "პროექტების აღწერებში კონკრეტული ნამუშევარი და დანიშნულება ჩანს."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">solis®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#work\">ნამუშევრები</a><a href=\"#contact\">კონტაქტი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დიზაინი · დეველოპმენტი</p>\n    <h1>იდეას მიეცი<br>საკუთარი სივრცე.</h1>\n    <p class=\"intro\">გამარჯობა, მე ანა ვარ. ვქმნი მკაფიო ბრენდებსა და ცოცხალ ვებგამოცდილებებს.</p>\n    <a class=\"button\" href=\"#work\">ნახე ნამუშევრები ↗</a>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · solis®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d9f279; --paper: #f5f5ed; --ink: #21312a; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { position: relative; isolation: isolate; } .hero h1 { max-width: 720px; } .hero:after { content: \"✳\"; color: var(--accent); position: absolute; right: 12px; top: 30px; font-size: 190px; line-height: 1; z-index: -1; } @media(max-width:700px) { .hero:after { display:none; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">solis®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#work\">ნამუშევრები</a><a href=\"#contact\">კონტაქტი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დიზაინი · დეველოპმენტი</p>\n    <h1>იდეას მიეცი<br>საკუთარი სივრცე.</h1>\n    <p class=\"intro\">გამარჯობა, მე ანა ვარ. ვქმნი მკაფიო ბრენდებსა და ცოცხალ ვებგამოცდილებებს.</p>\n    <a class=\"button\" href=\"#work\">ნახე ნამუშევრები ↗</a>\n  </section>\n  <section id=\"work\" aria-label=\"რჩეული ნამუშევრები\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>Mori — ბრენდის იდენტობა</h2><p>მშვიდი ვიზუალური ენა ქალაქის პატარა კაფესთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◒</div><h2>Forma — ციფრული გამოცდილება</h2><p>ინტუიციური პორტფოლიო კრეატიული გუნდისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>Studio 03 — ვებდიზაინი</h2><p>იდეები, რომლებიც მარტივად საპოვნელია.</p></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · solis®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d9f279; --paper: #f5f5ed; --ink: #21312a; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { position: relative; isolation: isolate; } .hero h1 { max-width: 720px; } .hero:after { content: \"✳\"; color: var(--accent); position: absolute; right: 12px; top: 30px; font-size: 190px; line-height: 1; z-index: -1; } @media(max-width:700px) { .hero:after { display:none; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 4,
        "title": "დიზაინი ყველა ეკრანისთვის",
        "concept": "Grid და mobile-first",
        "explanation": "ჯერ ერთსვეტიანი გვერდი ააწყე. როცა კონტენტი სივრცეს ითხოვს და ეკრანი იძლევა, 700px-ზე სამი სვეტი დაამატე. minmax(0,1fr) გრძელ შინაარსს სვეტის გაწელვის საშუალებას არ აძლევს. ეს მიდგომა სხვადასხვა ზომის ტელეფონებსაც მოერგება.",
        "task": "დაამატე ბარათების სტილები, ვიწრო ეკრანზე ერთი სვეტი, 700px-დან სამი. header მცირე ეკრანზე სვეტად გადააწყე.",
        "snippet": ".grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) {\n  .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }\n}",
        "hints": [
          "ბაზისურ .grid წესში ერთი სვეტი ჩაწერე.",
          "მედიამოთხოვნაში მხოლოდ სვეტები შეცვალე. ვიწრო ეკრანისთვის ფიქსირებული სიგანეები არ გამოიყენო."
        ],
        "checks": [
          {
            "label": "ბარათების მშობელი Grid-ია",
            "selector": ".grid",
            "property": "display",
            "values": [
              "grid"
            ]
          },
          {
            "label": "ფართო ეკრანზე სამი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 3",
            "width": 1000
          },
          {
            "label": "ვიწრო ეკრანზე ერთი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 1",
            "width": 360
          },
          {
            "label": "360px-ზე ჰორიზონტალური გადაცდენა არ არის",
            "expression": "document.documentElement.scrollWidth <= innerWidth",
            "width": 360
          }
        ],
        "review": [
          "360px და ფართო ეკრანი შეადარე: ტექსტი სრულად იკითხება.",
          "Tab-ით გადადი მოქმედებებზე და დარწმუნდი, რომ ფოკუსი ჩანს."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">solis®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#work\">ნამუშევრები</a><a href=\"#contact\">კონტაქტი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დიზაინი · დეველოპმენტი</p>\n    <h1>იდეას მიეცი<br>საკუთარი სივრცე.</h1>\n    <p class=\"intro\">გამარჯობა, მე ანა ვარ. ვქმნი მკაფიო ბრენდებსა და ცოცხალ ვებგამოცდილებებს.</p>\n    <a class=\"button\" href=\"#work\">ნახე ნამუშევრები ↗</a>\n  </section>\n  <section id=\"work\" aria-label=\"რჩეული ნამუშევრები\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>Mori — ბრენდის იდენტობა</h2><p>მშვიდი ვიზუალური ენა ქალაქის პატარა კაფესთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◒</div><h2>Forma — ციფრული გამოცდილება</h2><p>ინტუიციური პორტფოლიო კრეატიული გუნდისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>Studio 03 — ვებდიზაინი</h2><p>იდეები, რომლებიც მარტივად საპოვნელია.</p></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · solis®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d9f279; --paper: #f5f5ed; --ink: #21312a; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { position: relative; isolation: isolate; } .hero h1 { max-width: 720px; } .hero:after { content: \"✳\"; color: var(--accent); position: absolute; right: 12px; top: 30px; font-size: 190px; line-height: 1; z-index: -1; } @media(max-width:700px) { .hero:after { display:none; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">solis®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#work\">ნამუშევრები</a><a href=\"#contact\">კონტაქტი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დიზაინი · დეველოპმენტი</p>\n    <h1>იდეას მიეცი<br>საკუთარი სივრცე.</h1>\n    <p class=\"intro\">გამარჯობა, მე ანა ვარ. ვქმნი მკაფიო ბრენდებსა და ცოცხალ ვებგამოცდილებებს.</p>\n    <a class=\"button\" href=\"#work\">ნახე ნამუშევრები ↗</a>\n  </section>\n  <section id=\"work\" aria-label=\"რჩეული ნამუშევრები\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>Mori — ბრენდის იდენტობა</h2><p>მშვიდი ვიზუალური ენა ქალაქის პატარა კაფესთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◒</div><h2>Forma — ციფრული გამოცდილება</h2><p>ინტუიციური პორტფოლიო კრეატიული გუნდისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>Studio 03 — ვებდიზაინი</h2><p>იდეები, რომლებიც მარტივად საპოვნელია.</p></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · solis®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d9f279; --paper: #f5f5ed; --ink: #21312a; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { position: relative; isolation: isolate; } .hero h1 { max-width: 720px; } .hero:after { content: \"✳\"; color: var(--accent); position: absolute; right: 12px; top: 30px; font-size: 190px; line-height: 1; z-index: -1; } @media(max-width:700px) { .hero:after { display:none; } }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 5,
        "title": "სასარგებლო დასრულება",
        "concept": "ნავიგაცია და ხელმისაწვდომობა",
        "explanation": "ვიზუალური ღილაკი სასარგებლო ხდება, როცა დანიშნულებამდე მიგიყვანს. mailto ბმული ელფოსტის პროგრამას ხსნის, ხოლო შიდა ბმული — გვერდის სექციას. ფოკუსი უნდა ჩანდეს კლავიატურითაც. ავტომატური შემოწმება სტრუქტურას ხედავს; კლავიატურის რეალური გზა შენ უნდა შეამოწმო.",
        "task": "დაამატე #contact სექცია, mailto ბმული და :focus-visible წესი. ბმულზე დაწერე, რას გააკეთებს.",
        "snippet": "<section id=\"contact\">\n  <h2>მოდი, ერთად შევქმნათ.</h2>\n  <a href=\"mailto:hello@example.com\">მომწერე ელფოსტაზე ↗</a>\n</section>",
        "hints": [
          "#contact სექციის id უნდა ემთხვეოდეს მენიუს href-ს.",
          "a:focus-visible-ზე outline: 3px solid #6d48d8 გამოიყენე."
        ],
        "checks": [
          {
            "label": "კონტაქტის სექცია არსებობს",
            "selector": "#contact h2"
          },
          {
            "label": "ელფოსტაზე მიმავალი ბმული არსებობს",
            "selector": "#contact a",
            "attribute": "href",
            "contains": "mailto:"
          },
          {
            "label": "ყველა შიდა ბმულს სამიზნე აქვს",
            "expression": "[...document.querySelectorAll('a[href^=\"#\"]')].filter(a=>a.hash.length>1).every(a=>document.getElementById(a.hash.slice(1)))"
          }
        ],
        "review": [
          "360px და ფართო ეკრანი შეადარე: ტექსტი სრულად იკითხება.",
          "Tab-ით გადადი მოქმედებებზე და დარწმუნდი, რომ ფოკუსი ჩანს."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">solis®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#work\">ნამუშევრები</a><a href=\"#contact\">კონტაქტი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დიზაინი · დეველოპმენტი</p>\n    <h1>იდეას მიეცი<br>საკუთარი სივრცე.</h1>\n    <p class=\"intro\">გამარჯობა, მე ანა ვარ. ვქმნი მკაფიო ბრენდებსა და ცოცხალ ვებგამოცდილებებს.</p>\n    <a class=\"button\" href=\"#work\">ნახე ნამუშევრები ↗</a>\n  </section>\n  <section id=\"work\" aria-label=\"რჩეული ნამუშევრები\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>Mori — ბრენდის იდენტობა</h2><p>მშვიდი ვიზუალური ენა ქალაქის პატარა კაფესთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◒</div><h2>Forma — ციფრული გამოცდილება</h2><p>ინტუიციური პორტფოლიო კრეატიული გუნდისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>Studio 03 — ვებდიზაინი</h2><p>იდეები, რომლებიც მარტივად საპოვნელია.</p></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · solis®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d9f279; --paper: #f5f5ed; --ink: #21312a; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { position: relative; isolation: isolate; } .hero h1 { max-width: 720px; } .hero:after { content: \"✳\"; color: var(--accent); position: absolute; right: 12px; top: 30px; font-size: 190px; line-height: 1; z-index: -1; } @media(max-width:700px) { .hero:after { display:none; } }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">solis®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#work\">ნამუშევრები</a><a href=\"#contact\">კონტაქტი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დიზაინი · დეველოპმენტი</p>\n    <h1>იდეას მიეცი<br>საკუთარი სივრცე.</h1>\n    <p class=\"intro\">გამარჯობა, მე ანა ვარ. ვქმნი მკაფიო ბრენდებსა და ცოცხალ ვებგამოცდილებებს.</p>\n    <a class=\"button\" href=\"#work\">ნახე ნამუშევრები ↗</a>\n  </section>\n  <section id=\"work\" aria-label=\"რჩეული ნამუშევრები\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>Mori — ბრენდის იდენტობა</h2><p>მშვიდი ვიზუალური ენა ქალაქის პატარა კაფესთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◒</div><h2>Forma — ციფრული გამოცდილება</h2><p>ინტუიციური პორტფოლიო კრეატიული გუნდისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>Studio 03 — ვებდიზაინი</h2><p>იდეები, რომლებიც მარტივად საპოვნელია.</p></article>\n  </div>\n  </section>\n<section id=\"contact\"><p class=\"eyebrow\">შემდეგი საინტერესო იდეა</p><h2>მოდი, ერთად შევქმნათ.</h2><a class=\"button\" href=\"mailto:hello@example.com\">მომწერე ელფოსტაზე ↗</a></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · solis®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d9f279; --paper: #f5f5ed; --ink: #21312a; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { position: relative; isolation: isolate; } .hero h1 { max-width: 720px; } .hero:after { content: \"✳\"; color: var(--accent); position: absolute; right: 12px; top: 30px; font-size: 190px; line-height: 1; z-index: -1; } @media(max-width:700px) { .hero:after { display:none; } }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 6,
        "title": "შენი პირველი დამოუკიდებელი ბრიფი",
        "concept": "ცოდნის ახალ კონტექსტში გადატანა",
        "explanation": "ახლა ნიმუშის სიტყვები აღარ გჭირდება. წარმოიდგინე, რომ კლიენტი ინტერიერის დიზაინერია. იგივე სემანტიკა და ბადე შენარჩუნდება, მაგრამ სათქმელი, ნამუშევრები და ფერები ახალ აუდიტორიას უნდა მოარგო. ესაა განსხვავება კოდის გამეორებასა და ცოდნის გამოყენებას შორის.",
        "task": "პორტფოლიო ინტერიერის დიზაინერისთვის გადააკეთე: h1-ში ახსენე „სივრცე“, სამივე პროექტს ახალი სათაური მიეცი და --accent შეცვალე. შეინარჩუნე მობილური განლაგება.",
        "snippet": "/* ბრიფი ახალია, სტრუქტურა უკვე იცი. */\n:root { --accent: #f0cdb5; }",
        "hints": [
          "მთელი გვერდის გადაწერა საჭირო არ არის: ჯერ სათქმელი და ფერის ცვლადი შეცვალე.",
          "პროექტის სახელები უნდა აღწერდეს სხვადასხვა სივრცეს, მაგალითად ბინას, სტუდიასა და კაფეს."
        ],
        "checks": [
          {
            "label": "მთავარი სათქმელი ახალ სფეროს ეხება",
            "selector": "h1",
            "contains": "სივრცე"
          },
          {
            "label": "სამივე პროექტი საკუთარი სათაურითაა",
            "expression": "[...document.querySelectorAll('.card h2')].length===3 && [...document.querySelectorAll('.card h2')].every(x=>!['Mori — ბრენდის იდენტობა','Forma — ციფრული გამოცდილება','Studio 03 — ვებდიზაინი'].includes(x.textContent))"
          },
          {
            "label": "ფერების აქცენტი შეიცვალა",
            "expression": "getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() !== '#d9f279'"
          },
          {
            "label": "ბარათების მშობელი Grid-ია",
            "selector": ".grid",
            "property": "display",
            "values": [
              "grid"
            ]
          },
          {
            "label": "ფართო ეკრანზე სამი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 3",
            "width": 1000
          },
          {
            "label": "ვიწრო ეკრანზე ერთი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 1",
            "width": 360
          },
          {
            "label": "360px-ზე ჰორიზონტალური გადაცდენა არ არის",
            "expression": "document.documentElement.scrollWidth <= innerWidth",
            "width": 360
          }
        ],
        "review": [
          "დიზაინის არჩევანი შეესაბამება ინტერიერის სტუდიას.",
          "შემიძლია ავხსნა, როგორ გამოვიყენებ ამ ბადეს სხვა პორტფოლიოში."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">solis®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#work\">ნამუშევრები</a><a href=\"#contact\">კონტაქტი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დიზაინი · დეველოპმენტი</p>\n    <h1>იდეას მიეცი<br>საკუთარი სივრცე.</h1>\n    <p class=\"intro\">გამარჯობა, მე ანა ვარ. ვქმნი მკაფიო ბრენდებსა და ცოცხალ ვებგამოცდილებებს.</p>\n    <a class=\"button\" href=\"#work\">ნახე ნამუშევრები ↗</a>\n  </section>\n  <section id=\"work\" aria-label=\"რჩეული ნამუშევრები\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>Mori — ბრენდის იდენტობა</h2><p>მშვიდი ვიზუალური ენა ქალაქის პატარა კაფესთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◒</div><h2>Forma — ციფრული გამოცდილება</h2><p>ინტუიციური პორტფოლიო კრეატიული გუნდისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>Studio 03 — ვებდიზაინი</h2><p>იდეები, რომლებიც მარტივად საპოვნელია.</p></article>\n  </div>\n  </section>\n<section id=\"contact\"><p class=\"eyebrow\">შემდეგი საინტერესო იდეა</p><h2>მოდი, ერთად შევქმნათ.</h2><a class=\"button\" href=\"mailto:hello@example.com\">მომწერე ელფოსტაზე ↗</a></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · solis®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d9f279; --paper: #f5f5ed; --ink: #21312a; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { position: relative; isolation: isolate; } .hero h1 { max-width: 720px; } .hero:after { content: \"✳\"; color: var(--accent); position: absolute; right: 12px; top: 30px; font-size: 190px; line-height: 1; z-index: -1; } @media(max-width:700px) { .hero:after { display:none; } }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">solis®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#work\">ნამუშევრები</a><a href=\"#contact\">კონტაქტი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დიზაინი · დეველოპმენტი</p>\n    <h1>სივრცე, სადაც<br>ცხოვრება იწყება.</h1>\n    <p class=\"intro\">გამარჯობა, მე ანა ვარ. ვქმნი მკაფიო ბრენდებსა და ცოცხალ ვებგამოცდილებებს.</p>\n    <a class=\"button\" href=\"#work\">ნახე ნამუშევრები ↗</a>\n  </section>\n  <section id=\"work\" aria-label=\"რჩეული ნამუშევრები\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>ქალაქის ბინა</h2><p>მშვიდი ვიზუალური ენა ქალაქის პატარა კაფესთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◒</div><h2>სინათლის სტუდია</h2><p>ინტუიციური პორტფოლიო კრეატიული გუნდისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>ეზოს კაფე</h2><p>იდეები, რომლებიც მარტივად საპოვნელია.</p></article>\n  </div>\n  </section>\n<section id=\"contact\"><p class=\"eyebrow\">შემდეგი საინტერესო იდეა</p><h2>მოდი, ერთად შევქმნათ.</h2><a class=\"button\" href=\"mailto:hello@example.com\">მომწერე ელფოსტაზე ↗</a></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · solis®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d9f279; --paper: #f5f5ed; --ink: #21312a; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { position: relative; isolation: isolate; } .hero h1 { max-width: 720px; } .hero:after { content: \"✳\"; color: var(--accent); position: absolute; right: 12px; top: 30px; font-size: 190px; line-height: 1; z-index: -1; } @media(max-width:700px) { .hero:after { display:none; } }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n:root { --accent: #f0cdb5; }",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": true
      }
    ],
    "preview": {
      "html": "<header>\n  <a class=\"logo\" href=\"#\">solis®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#work\">ნამუშევრები</a><a href=\"#contact\">კონტაქტი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დიზაინი · დეველოპმენტი</p>\n    <h1>იდეას მიეცი<br>საკუთარი სივრცე.</h1>\n    <p class=\"intro\">გამარჯობა, მე ანა ვარ. ვქმნი მკაფიო ბრენდებსა და ცოცხალ ვებგამოცდილებებს.</p>\n    <a class=\"button\" href=\"#work\">ნახე ნამუშევრები ↗</a>\n  </section>\n  <section id=\"work\" aria-label=\"რჩეული ნამუშევრები\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>Mori — ბრენდის იდენტობა</h2><p>მშვიდი ვიზუალური ენა ქალაქის პატარა კაფესთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◒</div><h2>Forma — ციფრული გამოცდილება</h2><p>ინტუიციური პორტფოლიო კრეატიული გუნდისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>Studio 03 — ვებდიზაინი</h2><p>იდეები, რომლებიც მარტივად საპოვნელია.</p></article>\n  </div>\n  </section>\n<section id=\"contact\"><p class=\"eyebrow\">შემდეგი საინტერესო იდეა</p><h2>მოდი, ერთად შევქმნათ.</h2><a class=\"button\" href=\"mailto:hello@example.com\">მომწერე ელფოსტაზე ↗</a></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · solis®</footer>",
      "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d9f279; --paper: #f5f5ed; --ink: #21312a; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { position: relative; isolation: isolate; } .hero h1 { max-width: 720px; } .hero:after { content: \"✳\"; color: var(--accent); position: absolute; right: 12px; top: 30px; font-size: 190px; line-height: 1; z-index: -1; } @media(max-width:700px) { .hero:after { display:none; } }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n",
      "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
    }
  },
  {
    "id": "bloom",
    "title": "Bloom — მცენარეების მაღაზია",
    "subtitle": "ცოტა მეტი სიმწვანე ყოველდღიურობაში.",
    "kind": "მაღაზია",
    "level": 1,
    "minutes": 110,
    "skills": [
      "ბარათები",
      "data ატრიბუტები",
      "მოვლენები",
      "მდგომარეობა"
    ],
    "lessons": [
      18,
      22,
      26,
      39,
      41
    ],
    "accent": "#c5e6bb",
    "paper": "#f4f6ee",
    "ink": "#203c2b",
    "brief": "შექმენი მცენარეების კატალოგი კატეგორიების ფილტრითა და კალათის მრიცხველით. ეს სასწავლო პროტოტიპია, გადახდას არ ამუშავებს.",
    "audience": "მყიდველი, რომელიც ოთახისთვის შესაფერის მცენარეს ეძებს.",
    "reuse": "იგივე ნიმუშები გამოგადგება წიგნების, ავეჯის ან ღონისძიებების კატალოგში.",
    "stages": [
      {
        "id": 1,
        "title": "მაღაზიის მკაფიო შესავალი",
        "concept": "კონტენტის იერარქია",
        "explanation": "მაღაზიის შესავალი პროდუქტამდე მიმყვანი გზა უნდა იყოს. ერთმა სათაურმა უნდა თქვას, რას ყიდი და რატომ აინტერესებს ეს მყიდველს. მეორეხარისხოვანი ტექსტი არჩევანის გამარტივებას ემსახურება. კალათის მრიცხველი header-ში რჩება, რათა ყოველთვის საპოვნელი იყოს.",
        "task": "main-ში ააწყე .hero ერთი h1-ით, .intro აღწერითა და #catalog-ზე ბმულით.",
        "snippet": "<h1>შენი სახლის მწვანე მხარე.</h1>\n<p class=\"intro\">მცენარეები ყველა სივრცისთვის.</p>\n<a class=\"button\" href=\"#catalog\">აღმოაჩინე კოლექცია</a>",
        "hints": [
          "გამოიყენე Solis-ის შესავალის სტრუქტურა, მაგრამ შეცვალე დანიშნულება.",
          "კალათის საწყისი მნიშვნელობა 0 დარჩეს; მოგვიანებით JavaScript შეცვლის."
        ],
        "checks": [
          {
            "label": "გვერდს ერთი მთავარი h1 აქვს",
            "selector": "main h1",
            "count": 1
          },
          {
            "label": "გაცნობის სექციას განმარტება აქვს",
            "selector": ".hero .intro"
          },
          {
            "label": "მოქმედების ბმულს შიდა მისამართი აქვს",
            "selector": ".hero a",
            "attribute": "href",
            "contains": "#"
          }
        ],
        "review": [
          "სათაური და მოქმედება პირდაპირ პროდუქტებთანაა დაკავშირებული."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">bloom.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#catalog\">კატალოგი</a><span>კალათა <b id=\"cart-count\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <!-- შენი პირველი სექცია აქ დაამატე. -->\n</main>\n<footer>შექმნილია სწავლის პროცესში · bloom.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">bloom.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#catalog\">კატალოგი</a><span>კალათა <b id=\"cart-count\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ბუნება შენთან ახლოს</p>\n    <h1>შენი სახლის<br>მწვანე მხარე.</h1>\n    <p class=\"intro\">პატარა ფოთლიდან დიდ ცვლილებამდე. იპოვე მცენარე შენი სივრცისთვის.</p>\n    <a class=\"button\" href=\"#catalog\">აღმოაჩინე კოლექცია ↗</a>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · bloom.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 2,
        "title": "მცენარეების ვიზუალური ენა",
        "concept": "დიზაინის სისტემა",
        "explanation": "ერთიანი ფერები და ფორმები მაღაზიას სანდო სახეს აძლევს. შეარჩიე ფონი, ტექსტი და აქცენტი; ამავე ცვლადებს ყველა კომპონენტი გამოიყენებს. დიდი სათაურის გვერდით პროდუქტის მოქმედება მკაფიო უნდა დარჩეს. დიზაინის სისტემის შეცვლა ერთ ადგილას მთელ საიტზე იმოქმედებს.",
        "task": "დაამატე --accent, --paper, --ink ცვლადები; header-ს Flexbox, .hero-ს მინიმუმ 40px ზედა სივრცე, h1-ს 32px ან მეტი ზომა. ",
        "snippet": ":root { --accent: #c5e6bb; --paper: #f4f6ee; --ink: #203c2b; }\n.hero { padding-block: 60px; }",
        "hints": [
          "შეგიძლია Solis-ში ნასწავლი ტიპოგრაფია გადმოიტანო და ფერები შეცვალო.",
          "ფერი გამოიყენე var(--accent)-ით, რომ შემდგომ სხვა სფეროზეც მარტივად მოარგო."
        ],
        "checks": [
          {
            "label": "მენიუ Flexbox-ითაა",
            "selector": "header",
            "property": "display",
            "values": [
              "flex"
            ]
          },
          {
            "label": "აქცენტის ფერი განსაზღვრულია",
            "expression": "!!getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()"
          },
          {
            "label": "შესავალს თავისუფალი სივრცე აქვს",
            "expression": "parseFloat(getComputedStyle(document.querySelector('.hero')).paddingTop)>=40"
          }
        ],
        "review": [
          "საკმარისი კონტრასტია ტექსტსა და ფონს შორის."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">bloom.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#catalog\">კატალოგი</a><span>კალათა <b id=\"cart-count\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ბუნება შენთან ახლოს</p>\n    <h1>შენი სახლის<br>მწვანე მხარე.</h1>\n    <p class=\"intro\">პატარა ფოთლიდან დიდ ცვლილებამდე. იპოვე მცენარე შენი სივრცისთვის.</p>\n    <a class=\"button\" href=\"#catalog\">აღმოაჩინე კოლექცია ↗</a>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · bloom.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">bloom.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#catalog\">კატალოგი</a><span>კალათა <b id=\"cart-count\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ბუნება შენთან ახლოს</p>\n    <h1>შენი სახლის<br>მწვანე მხარე.</h1>\n    <p class=\"intro\">პატარა ფოთლიდან დიდ ცვლილებამდე. იპოვე მცენარე შენი სივრცისთვის.</p>\n    <a class=\"button\" href=\"#catalog\">აღმოაჩინე კოლექცია ↗</a>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · bloom.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #c5e6bb; --paper: #f4f6ee; --ink: #203c2b; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: radial-gradient(ellipse at 95% 20%, #c5e6bb80, transparent 55%); border-radius: 20px; } .hero h1 { max-width: 700px; } .logo { letter-spacing: -2px; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 3,
        "title": "პროდუქტების ბადე",
        "concept": "სტრუქტურირებული მონაცემები HTML-ში",
        "explanation": "data-category ატრიბუტი ვიზუალურ ბარათს მონაცემს აკავშირებს. ტექსტი მკითხველს ეკუთვნის, ატრიბუტი კი პროგრამას ეუბნება, რომელ ჯგუფშია პროდუქტი. ერთი სტრუქტურა საკმარისია უამრავი პროდუქტის საჩვენებლად. ღილაკს type=\"button\" მიეცი, რომ ფორმაში შემთხვევით გაგზავნა არ დაიწყოს.",
        "task": "დაამატე #catalog სექცია სამი article.card-ით. ორ ბარათს data-category=\"indoor\", ერთს \"outdoor\" მიეცი. თითოეულზე ჩასვი button.add; მოარგე ბადე 360px და 1000px ეკრანებს.",
        "snippet": "<article class=\"card\" data-category=\"indoor\">\n  <h2>მონსტერა</h2><p>49 ₾</p>\n  <button class=\"add\" type=\"button\">დამატება</button>\n</article>",
        "hints": [
          "ფილტრისთვის category-ის მნიშვნელობები ზუსტად indoor და outdoor გამოიყენე.",
          "ბადე ერთ სვეტზე დაიწყე და 700px-დან სამზე გადაიყვანე."
        ],
        "checks": [
          {
            "label": "სამი პროდუქტი კალათის მოქმედებით",
            "selector": "#catalog .card .add",
            "count": 3
          },
          {
            "label": "ორი ოთახის მცენარეა",
            "selector": "[data-category=\"indoor\"]",
            "count": 2
          },
          {
            "label": "ერთი გარე მცენარეა",
            "selector": "[data-category=\"outdoor\"]",
            "count": 1
          },
          {
            "label": "ბარათების მშობელი Grid-ია",
            "selector": ".grid",
            "property": "display",
            "values": [
              "grid"
            ]
          },
          {
            "label": "ფართო ეკრანზე სამი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 3",
            "width": 1000
          },
          {
            "label": "ვიწრო ეკრანზე ერთი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 1",
            "width": 360
          },
          {
            "label": "360px-ზე ჰორიზონტალური გადაცდენა არ არის",
            "expression": "document.documentElement.scrollWidth <= innerWidth",
            "width": 360
          }
        ],
        "review": [
          "360px და ფართო ეკრანი შეადარე: ტექსტი სრულად იკითხება.",
          "Tab-ით გადადი მოქმედებებზე და დარწმუნდი, რომ ფოკუსი ჩანს."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">bloom.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#catalog\">კატალოგი</a><span>კალათა <b id=\"cart-count\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ბუნება შენთან ახლოს</p>\n    <h1>შენი სახლის<br>მწვანე მხარე.</h1>\n    <p class=\"intro\">პატარა ფოთლიდან დიდ ცვლილებამდე. იპოვე მცენარე შენი სივრცისთვის.</p>\n    <a class=\"button\" href=\"#catalog\">აღმოაჩინე კოლექცია ↗</a>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · bloom.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #c5e6bb; --paper: #f4f6ee; --ink: #203c2b; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: radial-gradient(ellipse at 95% 20%, #c5e6bb80, transparent 55%); border-radius: 20px; } .hero h1 { max-width: 700px; } .logo { letter-spacing: -2px; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">bloom.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#catalog\">კატალოგი</a><span>კალათა <b id=\"cart-count\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ბუნება შენთან ახლოს</p>\n    <h1>შენი სახლის<br>მწვანე მხარე.</h1>\n    <p class=\"intro\">პატარა ფოთლიდან დიდ ცვლილებამდე. იპოვე მცენარე შენი სივრცისთვის.</p>\n    <a class=\"button\" href=\"#catalog\">აღმოაჩინე კოლექცია ↗</a>\n  </section>\n  <section id=\"catalog\" aria-label=\"მცენარეები\">\n  <div class=\"grid\">\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>მონსტერა</h2><p>49 ₾ · ნათელი ოთახისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>ფიკუსი</h2><p>65 ₾ · ფანჯრის გვერდით</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"outdoor\"><div class=\"art\" aria-hidden=\"true\">❀</div><h2>ლავანდა</h2><p>29 ₾ · მზიანი აივნისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · bloom.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #c5e6bb; --paper: #f4f6ee; --ink: #203c2b; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: radial-gradient(ellipse at 95% 20%, #c5e6bb80, transparent 55%); border-radius: 20px; } .hero h1 { max-width: 700px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 4,
        "title": "კატეგორიებით ფილტრაცია",
        "concept": "dataset და hidden",
        "explanation": "მოვლენის დამმუშავებელი მომხმარებლის არჩევანს ქცევად აქცევს. dataset.filter-ს შეადარე ბარათის dataset.category. hidden ზუსტად იმას ამბობს, რომ ბარათი ამ არჩევანის ნაწილია. ყველა კატეგორიის არჩევამ ელემენტები უკან უნდა დააბრუნოს; მონაცემები არ წაშალო.",
        "task": "დაამატე სამი ღილაკი data-filter=\"all\", \"indoor\", \"outdoor\". click-ზე დამალე შეუსაბამო ბარათები და აქტიურ ღილაკზე aria-pressed=\"true\" მიუთითე.",
        "snippet": "card.hidden = selected !== \"all\" && card.dataset.category !== selected;",
        "hints": [
          "querySelectorAll-ით ჯერ ღილაკებს მოუსმინე, შემდეგ თითოეულ ბარათს გადაუარე.",
          "hidden არის ლოგიკური თვისება. მხოლოდ display-ის ფერის შეცვლა ბარათს არ ფილტრავს."
        ],
        "checks": [
          {
            "label": "აივნის ფილტრი ერთ ბარათს ტოვებს",
            "expression": "document.querySelectorAll('.card:not([hidden])').length===1 && !document.querySelector('[data-category=outdoor]').hidden",
            "action": {
              "selector": "[data-filter=\"outdoor\"]",
              "event": "click"
            }
          },
          {
            "label": "აქტიური ფილტრი ხელმისაწვდომად აღინიშნება",
            "expression": "document.querySelector('[data-filter=outdoor]').getAttribute('aria-pressed')==='true'"
          },
          {
            "label": "ყველა პროდუქტი უკან ბრუნდება",
            "expression": "document.querySelectorAll('.card:not([hidden])').length===3",
            "action": {
              "selector": "[data-filter=\"all\"]",
              "event": "click"
            }
          }
        ],
        "review": [
          "ღილაკზე სახელი იცვლება არა ფერით, არამედ გასაგები ტექსტითა და მდგომარეობით."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">bloom.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#catalog\">კატალოგი</a><span>კალათა <b id=\"cart-count\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ბუნება შენთან ახლოს</p>\n    <h1>შენი სახლის<br>მწვანე მხარე.</h1>\n    <p class=\"intro\">პატარა ფოთლიდან დიდ ცვლილებამდე. იპოვე მცენარე შენი სივრცისთვის.</p>\n    <a class=\"button\" href=\"#catalog\">აღმოაჩინე კოლექცია ↗</a>\n  </section>\n  <section id=\"catalog\" aria-label=\"მცენარეები\">\n  <div class=\"grid\">\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>მონსტერა</h2><p>49 ₾ · ნათელი ოთახისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>ფიკუსი</h2><p>65 ₾ · ფანჯრის გვერდით</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"outdoor\"><div class=\"art\" aria-hidden=\"true\">❀</div><h2>ლავანდა</h2><p>29 ₾ · მზიანი აივნისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · bloom.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #c5e6bb; --paper: #f4f6ee; --ink: #203c2b; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: radial-gradient(ellipse at 95% 20%, #c5e6bb80, transparent 55%); border-radius: 20px; } .hero h1 { max-width: 700px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">bloom.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#catalog\">კატალოგი</a><span>კალათა <b id=\"cart-count\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ბუნება შენთან ახლოს</p>\n    <h1>შენი სახლის<br>მწვანე მხარე.</h1>\n    <p class=\"intro\">პატარა ფოთლიდან დიდ ცვლილებამდე. იპოვე მცენარე შენი სივრცისთვის.</p>\n    <a class=\"button\" href=\"#catalog\">აღმოაჩინე კოლექცია ↗</a>\n  </section>\n  <section id=\"catalog\" aria-label=\"მცენარეები\">\n  <div class=\"filters\"><button data-filter=\"all\">ყველა</button><button data-filter=\"indoor\">ოთახის</button><button data-filter=\"outdoor\">აივნის</button></div>\n  <div class=\"grid\">\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>მონსტერა</h2><p>49 ₾ · ნათელი ოთახისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>ფიკუსი</h2><p>65 ₾ · ფანჯრის გვერდით</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"outdoor\"><div class=\"art\" aria-hidden=\"true\">❀</div><h2>ლავანდა</h2><p>29 ₾ · მზიანი აივნისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · bloom.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #c5e6bb; --paper: #f4f6ee; --ink: #203c2b; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: radial-gradient(ellipse at 95% 20%, #c5e6bb80, transparent 55%); border-radius: 20px; } .hero h1 { max-width: 700px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; }\n.filters button[aria-pressed=\"true\"] { outline: 2px solid currentColor; outline-offset: 2px; }",
          "js": "document.querySelectorAll('[data-filter]').forEach(button => {\n  button.addEventListener('click', () => {\n    document.querySelectorAll('[data-category]').forEach(card => {\n      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;\n    });\n    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));\n  });\n});"
        },
        "transfer": false
      },
      {
        "id": 5,
        "title": "მდგომარეობა და კალათის პასუხი",
        "concept": "ცვლადი და DOM-ის განახლება",
        "explanation": "მრიცხველის წყარო ცვლადი უნდა იყოს. ღილაკზე დაჭერა count-ს ზრდის, შემდეგ DOM ახალ მნიშვნელობას აჩვენებს. ასე მონაცემი და ჩვენება ერთმანეთს არ ერევა. aria-live=\"polite\" ცვლილებას დამხმარე ტექნოლოგიასაც აცნობებს. ეს ჯერ მხოლოდ მრიცხველია და შეკვეთას არ ქმნის.",
        "task": "დაამატე count ცვლადი. ნებისმიერ .add ღილაკზე თითო დაჭერამ #cart-count ერთით უნდა გაზარდოს. არ დაარღვიო ფილტრაცია.",
        "snippet": "let count = 0;\nbutton.addEventListener(\"click\", () => {\n  count += 1;\n  output.textContent = count;\n});",
        "hints": [
          "ცვლადი click-ის ფუნქციის გარეთ შექმენი, რომ ყოველ დაჭერაზე ნულიდან არ დაიწყოს.",
          "ფილტრის კოდს ახალი დამმუშავებლები ქვემოთ დაუმატე."
        ],
        "checks": [
          {
            "label": "პირველი დამატება 1-ს აჩვენებს",
            "expression": "document.querySelector('#cart-count').textContent==='1'",
            "action": {
              "selector": ".add",
              "event": "click"
            }
          },
          {
            "label": "განმეორებითი დამატება 2-ს აჩვენებს",
            "expression": "document.querySelector('#cart-count').textContent==='2'",
            "action": {
              "selector": ".add",
              "event": "click"
            }
          },
          {
            "label": "მრიცხველს ცოცხალი სტატუსი აქვს",
            "selector": "#cart-count",
            "attribute": "aria-live",
            "contains": "polite"
          }
        ],
        "review": [
          "მრიცხველის ქცევა გასაგებია, თუმცა გვერდი გადახდას არ ჰპირდება."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">bloom.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#catalog\">კატალოგი</a><span>კალათა <b id=\"cart-count\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ბუნება შენთან ახლოს</p>\n    <h1>შენი სახლის<br>მწვანე მხარე.</h1>\n    <p class=\"intro\">პატარა ფოთლიდან დიდ ცვლილებამდე. იპოვე მცენარე შენი სივრცისთვის.</p>\n    <a class=\"button\" href=\"#catalog\">აღმოაჩინე კოლექცია ↗</a>\n  </section>\n  <section id=\"catalog\" aria-label=\"მცენარეები\">\n  <div class=\"filters\"><button data-filter=\"all\">ყველა</button><button data-filter=\"indoor\">ოთახის</button><button data-filter=\"outdoor\">აივნის</button></div>\n  <div class=\"grid\">\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>მონსტერა</h2><p>49 ₾ · ნათელი ოთახისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>ფიკუსი</h2><p>65 ₾ · ფანჯრის გვერდით</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"outdoor\"><div class=\"art\" aria-hidden=\"true\">❀</div><h2>ლავანდა</h2><p>29 ₾ · მზიანი აივნისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · bloom.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #c5e6bb; --paper: #f4f6ee; --ink: #203c2b; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: radial-gradient(ellipse at 95% 20%, #c5e6bb80, transparent 55%); border-radius: 20px; } .hero h1 { max-width: 700px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; }\n.filters button[aria-pressed=\"true\"] { outline: 2px solid currentColor; outline-offset: 2px; }",
          "js": "document.querySelectorAll('[data-filter]').forEach(button => {\n  button.addEventListener('click', () => {\n    document.querySelectorAll('[data-category]').forEach(card => {\n      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;\n    });\n    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));\n  });\n});"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">bloom.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#catalog\">კატალოგი</a><span>კალათა <b id=\"cart-count\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ბუნება შენთან ახლოს</p>\n    <h1>შენი სახლის<br>მწვანე მხარე.</h1>\n    <p class=\"intro\">პატარა ფოთლიდან დიდ ცვლილებამდე. იპოვე მცენარე შენი სივრცისთვის.</p>\n    <a class=\"button\" href=\"#catalog\">აღმოაჩინე კოლექცია ↗</a>\n  </section>\n  <section id=\"catalog\" aria-label=\"მცენარეები\">\n  <div class=\"filters\"><button data-filter=\"all\">ყველა</button><button data-filter=\"indoor\">ოთახის</button><button data-filter=\"outdoor\">აივნის</button></div>\n  <div class=\"grid\">\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>მონსტერა</h2><p>49 ₾ · ნათელი ოთახისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>ფიკუსი</h2><p>65 ₾ · ფანჯრის გვერდით</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"outdoor\"><div class=\"art\" aria-hidden=\"true\">❀</div><h2>ლავანდა</h2><p>29 ₾ · მზიანი აივნისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · bloom.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #c5e6bb; --paper: #f4f6ee; --ink: #203c2b; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: radial-gradient(ellipse at 95% 20%, #c5e6bb80, transparent 55%); border-radius: 20px; } .hero h1 { max-width: 700px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; }\n.filters button[aria-pressed=\"true\"] { outline: 2px solid currentColor; outline-offset: 2px; }",
          "js": "document.querySelectorAll('[data-filter]').forEach(button => {\n  button.addEventListener('click', () => {\n    document.querySelectorAll('[data-category]').forEach(card => {\n      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;\n    });\n    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));\n  });\n});\nlet count = 0;\ndocument.querySelectorAll('.add').forEach(button => {\n  button.addEventListener('click', () => {\n    count += 1;\n    document.querySelector('#cart-count').textContent = count;\n  });\n});"
        },
        "transfer": false
      },
      {
        "id": 6,
        "title": "მაღაზიიდან წიგნების თარომდე",
        "concept": "პატერნის ხელახალი გამოყენება",
        "explanation": "კატალოგს მხოლოდ მცენარეებისთვის არ ვიყენებთ. პროდუქტის ბარათი, კატეგორია და მრიცხველი წიგნების მაღაზიასაც სჭირდება. ამჯერად თავად განსაზღვრე ტექსტი და ვიზუალური ხასიათი. ქცევისგან შინაარსის გამოყოფა ნიშნავს, რომ ახალი საიტისთვის თავიდან სწავლა არ გიწევს.",
        "task": "გადააკეთე გვერდი წიგნების კატალოგად: h1-ში გამოიყენე „წიგნ“, სამივე ბარათს ახალი სათაური და აღწერა მიეცი. შეცვალე --accent; შეინარჩუნე ფილტრი და კალათა.",
        "snippet": "// data ატრიბუტები შეგიძლია შეინარჩუნო,\n// მაგრამ ღილაკებს ახალი კატეგორიების სახელები მიეცი.",
        "hints": [
          "ატრიბუტების კავშირი კოდთან შეინარჩუნე; მომხმარებლისთვის ხილული ტექსტი შეცვალე.",
          "ფერების ცვლადი ერთ ადგილას შეცვალე და ყველა კომპონენტზე შედეგი შეამოწმე."
        ],
        "checks": [
          {
            "label": "ახალი ბრიფი წიგნებს ეხება",
            "selector": "h1",
            "contains": "წიგნ"
          },
          {
            "label": "პროდუქტების სათაურები შეიცვალა",
            "expression": "document.querySelectorAll('.card h2').length===3 && [...document.querySelectorAll('.card h2')].every(x=>!['მონსტერა','ფიკუსი','ლავანდა'].includes(x.textContent))"
          },
          {
            "label": "ფილტრის პატერნი კვლავ მუშაობს",
            "expression": "document.querySelectorAll('.card:not([hidden])').length===1",
            "action": {
              "selector": "[data-filter=\"outdoor\"]",
              "event": "click"
            }
          },
          {
            "label": "მრიცხველი კვლავ მუშაობს",
            "expression": "document.querySelector('#cart-count').textContent==='1'",
            "action": {
              "selector": ".add",
              "event": "click"
            }
          },
          {
            "label": "ახალი ფერის სისტემა შეარჩიე",
            "expression": "getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()!=='#c5e6bb'"
          }
        ],
        "review": [
          "ხილული კატეგორიები და აღწერები წიგნებს შეესაბამება.",
          "შემიძლია ავხსნა, რატომ არ დასჭირდა მრიცხველს გადაწერა."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">bloom.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#catalog\">კატალოგი</a><span>კალათა <b id=\"cart-count\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ბუნება შენთან ახლოს</p>\n    <h1>შენი სახლის<br>მწვანე მხარე.</h1>\n    <p class=\"intro\">პატარა ფოთლიდან დიდ ცვლილებამდე. იპოვე მცენარე შენი სივრცისთვის.</p>\n    <a class=\"button\" href=\"#catalog\">აღმოაჩინე კოლექცია ↗</a>\n  </section>\n  <section id=\"catalog\" aria-label=\"მცენარეები\">\n  <div class=\"filters\"><button data-filter=\"all\">ყველა</button><button data-filter=\"indoor\">ოთახის</button><button data-filter=\"outdoor\">აივნის</button></div>\n  <div class=\"grid\">\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>მონსტერა</h2><p>49 ₾ · ნათელი ოთახისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>ფიკუსი</h2><p>65 ₾ · ფანჯრის გვერდით</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"outdoor\"><div class=\"art\" aria-hidden=\"true\">❀</div><h2>ლავანდა</h2><p>29 ₾ · მზიანი აივნისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · bloom.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #c5e6bb; --paper: #f4f6ee; --ink: #203c2b; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: radial-gradient(ellipse at 95% 20%, #c5e6bb80, transparent 55%); border-radius: 20px; } .hero h1 { max-width: 700px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; }\n.filters button[aria-pressed=\"true\"] { outline: 2px solid currentColor; outline-offset: 2px; }",
          "js": "document.querySelectorAll('[data-filter]').forEach(button => {\n  button.addEventListener('click', () => {\n    document.querySelectorAll('[data-category]').forEach(card => {\n      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;\n    });\n    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));\n  });\n});\nlet count = 0;\ndocument.querySelectorAll('.add').forEach(button => {\n  button.addEventListener('click', () => {\n    count += 1;\n    document.querySelector('#cart-count').textContent = count;\n  });\n});"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">bloom.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#catalog\">კატალოგი</a><span>კალათა <b id=\"cart-count\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ბუნება შენთან ახლოს</p>\n    <h1>წიგნები შენი<br>შემდეგი თავგადასავლისთვის.</h1>\n    <p class=\"intro\">პატარა ფოთლიდან დიდ ცვლილებამდე. იპოვე მცენარე შენი სივრცისთვის.</p>\n    <a class=\"button\" href=\"#catalog\">აღმოაჩინე კოლექცია ↗</a>\n  </section>\n  <section id=\"catalog\" aria-label=\"მცენარეები\">\n  <div class=\"filters\"><button data-filter=\"all\">ყველა</button><button data-filter=\"indoor\">ოთახის</button><button data-filter=\"outdoor\">აივნის</button></div>\n  <div class=\"grid\">\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>დიზაინის საფუძვლები</h2><p>49 ₾ · ნათელი ოთახისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>პატარა მოგზაურობები</h2><p>65 ₾ · ფანჯრის გვერდით</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"outdoor\"><div class=\"art\" aria-hidden=\"true\">❀</div><h2>კრეატიული ჩვევები</h2><p>29 ₾ · მზიანი აივნისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · bloom.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #c5e6bb; --paper: #f4f6ee; --ink: #203c2b; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: radial-gradient(ellipse at 95% 20%, #c5e6bb80, transparent 55%); border-radius: 20px; } .hero h1 { max-width: 700px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; }\n.filters button[aria-pressed=\"true\"] { outline: 2px solid currentColor; outline-offset: 2px; }\n:root { --accent: #e9c5a1; }",
          "js": "document.querySelectorAll('[data-filter]').forEach(button => {\n  button.addEventListener('click', () => {\n    document.querySelectorAll('[data-category]').forEach(card => {\n      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;\n    });\n    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));\n  });\n});\nlet count = 0;\ndocument.querySelectorAll('.add').forEach(button => {\n  button.addEventListener('click', () => {\n    count += 1;\n    document.querySelector('#cart-count').textContent = count;\n  });\n});"
        },
        "transfer": true
      }
    ],
    "preview": {
      "html": "<header>\n  <a class=\"logo\" href=\"#\">bloom.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#catalog\">კატალოგი</a><span>კალათა <b id=\"cart-count\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ბუნება შენთან ახლოს</p>\n    <h1>შენი სახლის<br>მწვანე მხარე.</h1>\n    <p class=\"intro\">პატარა ფოთლიდან დიდ ცვლილებამდე. იპოვე მცენარე შენი სივრცისთვის.</p>\n    <a class=\"button\" href=\"#catalog\">აღმოაჩინე კოლექცია ↗</a>\n  </section>\n  <section id=\"catalog\" aria-label=\"მცენარეები\">\n  <div class=\"filters\"><button data-filter=\"all\">ყველა</button><button data-filter=\"indoor\">ოთახის</button><button data-filter=\"outdoor\">აივნის</button></div>\n  <div class=\"grid\">\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>მონსტერა</h2><p>49 ₾ · ნათელი ოთახისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"indoor\"><div class=\"art\" aria-hidden=\"true\">♧</div><h2>ფიკუსი</h2><p>65 ₾ · ფანჯრის გვერდით</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n    <article class=\"card\" data-category=\"outdoor\"><div class=\"art\" aria-hidden=\"true\">❀</div><h2>ლავანდა</h2><p>29 ₾ · მზიანი აივნისთვის</p><button class=\"add\" type=\"button\">კალათაში დამატება</button></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · bloom.</footer>",
      "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #c5e6bb; --paper: #f4f6ee; --ink: #203c2b; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: radial-gradient(ellipse at 95% 20%, #c5e6bb80, transparent 55%); border-radius: 20px; } .hero h1 { max-width: 700px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; }\n.filters button[aria-pressed=\"true\"] { outline: 2px solid currentColor; outline-offset: 2px; }",
      "js": "document.querySelectorAll('[data-filter]').forEach(button => {\n  button.addEventListener('click', () => {\n    document.querySelectorAll('[data-category]').forEach(card => {\n      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;\n    });\n    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));\n  });\n});\nlet count = 0;\ndocument.querySelectorAll('.add').forEach(button => {\n  button.addEventListener('click', () => {\n    count += 1;\n    document.querySelector('#cart-count').textContent = count;\n  });\n});"
    }
  },
  {
    "id": "forma",
    "title": "Forma — შემოქმედებითი სტუდია",
    "subtitle": "მკაფიო დიზაინი, ძლიერი პირველი შთაბეჭდილება.",
    "kind": "ბიზნესგვერდი",
    "level": 2,
    "minutes": 120,
    "skills": [
      "კომპონენტები",
      "ფორმები",
      "ვალიდაცია",
      "ხელმისაწვდომობა"
    ],
    "lessons": [
      8,
      10,
      11,
      22,
      29,
      42
    ],
    "accent": "#cbb9ef",
    "paper": "#f5f1ec",
    "ink": "#2c2440",
    "brief": "ააწყე სააგენტოს გვერდი მომსახურების ბარათებით, ხშირად დასმული კითხვებითა და დემო საკონტაქტო ფორმით.",
    "audience": "პოტენციური კლიენტი, რომელსაც შეთავაზების გაგება და კითხვაზე პასუხი სჭირდება.",
    "reuse": "ეს კომპონენტები გამოგადგება კონსულტანტის, კურსის ან მცირე ბიზნესის საიტში.",
    "stages": [
      {
        "id": 1,
        "title": "ბიზნესის ღირებულება",
        "concept": "შესავალი და დიზაინის ტოკენები",
        "explanation": "მეორე დონეზე რამდენიმე ცოდნას ერთად იყენებ. შესავალი აუდიტორიის პრობლემას უნდა ეხმაურებოდეს. CSS ცვლადები ბრენდის ენას ინახავს, Flexbox მენიუს აწყობს. წინარე პროექტებიდან გადაიტანე ტექნიკა, მაგრამ სათქმელი ამ სააგენტოსთვის დაწერე.",
        "task": "ააწყე .hero ერთი h1-ით და .intro-თი. მთავარი ბმული #services-ზე მივიდეს. თავად შექმენი ფერები, ტიპოგრაფია და header-ის Flexbox განლაგება.",
        "snippet": "<a class=\"button\" href=\"#services\">ნახე, რას ვქმნით ↗</a>",
        "hints": [
          "ჯერ შესავლის HTML დაწერე, შემდეგ სტილის ცვლადები.",
          "Solis-ის პრინციპები გაიხსენე: დიდი სათაური, მოკლე აღწერა, ერთი მთავარი მოქმედება."
        ],
        "checks": [
          {
            "label": "გვერდს ერთი მთავარი h1 აქვს",
            "selector": "main h1",
            "count": 1
          },
          {
            "label": "გაცნობის სექციას განმარტება აქვს",
            "selector": ".hero .intro"
          },
          {
            "label": "მოქმედების ბმულს შიდა მისამართი აქვს",
            "selector": ".hero a",
            "attribute": "href",
            "contains": "#"
          },
          {
            "label": "header Flexbox-ით ეწყობა",
            "selector": "header",
            "property": "display",
            "values": [
              "flex"
            ]
          }
        ],
        "review": [
          "ვიზიტორი ხვდება სააგენტოს შეთავაზებას გრძელი ახსნის გარეშე."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">forma®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#services\">სერვისები</a><a href=\"#contact\">დაგვიკავშირდი</a></nav>\n</header>\n<main>\n  <!-- შენი პირველი სექცია აქ დაამატე. -->\n</main>\n<footer>შექმნილია სწავლის პროცესში · forma®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">forma®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#services\">სერვისები</a><a href=\"#contact\">დაგვიკავშირდი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დამოუკიდებელი კრეატიული სტუდია</p>\n    <h1>იდეები, რომლებსაც<br>შედეგი მოჰყვება.</h1>\n    <p class=\"intro\">სტრატეგიიდან ციფრულ გამოცდილებამდე. ვქმნით ბრენდებს, რომლებიც ადამიანებს ახსოვთ.</p>\n    <a class=\"button\" href=\"#services\">ნახე, რას ვქმნით ↗</a>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · forma®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #cbb9ef; --paper: #f5f1ec; --ink: #2c2440; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { border-bottom: 1px solid #b7a9c7; margin-bottom: 35px; } .hero h1 { font-weight: 500; } .logo { font-style: italic; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 2,
        "title": "მომსახურება როგორც კომპონენტი",
        "concept": "კომპონენტის ერთიანი სტრუქტურა",
        "explanation": "სერვისის ბარათები ერთნაირი სტრუქტურით მომხმარებელს შედარებაში ეხმარება. მოცულობა და ფასის კონტექსტი თანაბრად მოათავსე. Grid სვეტებს მართავს, ხოლო ბარათის შიგნით ინფორმაცია ერთნაირი წესით მეორდება. უკვე იცი ბადე — ამჯერად დამოუკიდებლად ააწყე.",
        "task": "შექმენი #services .grid და სამი .card, თითოეულში h2 და აღწერა. გამოიყენე ერთი სვეტი პატარა ეკრანზე და სამი — 700px-დან.",
        "snippet": ".card { padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; }",
        "hints": [
          "სამი განსხვავებული სერვისი აღწერე: ბრენდინგი, ვებსაიტი, სტრატეგია.",
          "გაიმეორე mobile-first წესები, ფიქსირებული 1100px სიგანე არ მიანიჭო."
        ],
        "checks": [
          {
            "label": "სამი სერვისის სათაურია",
            "selector": "#services .card h2",
            "count": 3
          },
          {
            "label": "ბარათების მშობელი Grid-ია",
            "selector": ".grid",
            "property": "display",
            "values": [
              "grid"
            ]
          },
          {
            "label": "ფართო ეკრანზე სამი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 3",
            "width": 1000
          },
          {
            "label": "ვიწრო ეკრანზე ერთი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 1",
            "width": 360
          },
          {
            "label": "360px-ზე ჰორიზონტალური გადაცდენა არ არის",
            "expression": "document.documentElement.scrollWidth <= innerWidth",
            "width": 360
          }
        ],
        "review": [
          "360px და ფართო ეკრანი შეადარე: ტექსტი სრულად იკითხება.",
          "Tab-ით გადადი მოქმედებებზე და დარწმუნდი, რომ ფოკუსი ჩანს."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">forma®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#services\">სერვისები</a><a href=\"#contact\">დაგვიკავშირდი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დამოუკიდებელი კრეატიული სტუდია</p>\n    <h1>იდეები, რომლებსაც<br>შედეგი მოჰყვება.</h1>\n    <p class=\"intro\">სტრატეგიიდან ციფრულ გამოცდილებამდე. ვქმნით ბრენდებს, რომლებიც ადამიანებს ახსოვთ.</p>\n    <a class=\"button\" href=\"#services\">ნახე, რას ვქმნით ↗</a>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · forma®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #cbb9ef; --paper: #f5f1ec; --ink: #2c2440; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { border-bottom: 1px solid #b7a9c7; margin-bottom: 35px; } .hero h1 { font-weight: 500; } .logo { font-style: italic; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">forma®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#services\">სერვისები</a><a href=\"#contact\">დაგვიკავშირდი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დამოუკიდებელი კრეატიული სტუდია</p>\n    <h1>იდეები, რომლებსაც<br>შედეგი მოჰყვება.</h1>\n    <p class=\"intro\">სტრატეგიიდან ციფრულ გამოცდილებამდე. ვქმნით ბრენდებს, რომლებიც ადამიანებს ახსოვთ.</p>\n    <a class=\"button\" href=\"#services\">ნახე, რას ვქმნით ↗</a>\n  </section>\n  <section id=\"services\" aria-label=\"მომსახურება\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>ბრენდის იდენტობა</h2><p>ხასიათი, რომელსაც პირველივე შეხებაზე ცნობ.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>ვებგამოცდილება</h2><p>გააზრებული ინტერფეისი შენი აუდიტორიისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◈</div><h2>სტრატეგია</h2><p>მკაფიო მიმართულება შენი შემდეგი ნაბიჯისთვის.</p></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · forma®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #cbb9ef; --paper: #f5f1ec; --ink: #2c2440; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { border-bottom: 1px solid #b7a9c7; margin-bottom: 35px; } .hero h1 { font-weight: 500; } .logo { font-style: italic; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 3,
        "title": "მეტი ქცევა ნაკლები კოდით",
        "concept": "HTML-ის ჩაშენებული ინტერაქცია",
        "explanation": "ინტერაქტიულობას ყოველთვის JavaScript არ სჭირდება. details და summary ქმნის დასაკეც შინაარსს ჩაშენებული კლავიატურის მხარდაჭერით. სემანტიკური ელემენტი ხშირად უფრო გამძლეა, ვიდრე იმავე ქცევის თავიდან დაწერა. ამით სწავლობ ხელსაწყოს არჩევას და არა მხოლოდ კოდის დამატებას.",
        "task": "დაამატე #faq ორი details ელემენტით; თითოეულს უნდა ჰქონდეს summary კითხვა და პასუხი. მიეცი სუფთა ჩარჩო და საკმარისი სივრცე.",
        "snippet": "<details>\n  <summary>როგორ ვიწყებთ?</summary>\n  <p>ჯერ შენს მიზნებზე ვსაუბრობთ.</p>\n</details>",
        "hints": [
          "summary მოათავსე details-ის პირველ შვილად.",
          "არ დაამატო ღილაკი summary-ის შიგნით: თავად summary უკვე ინტერაქტიულია."
        ],
        "checks": [
          {
            "label": "ორი შეკითხვა ჩაშენებული ელემენტითაა",
            "selector": "#faq details",
            "count": 2
          },
          {
            "label": "თითოეულს თავისი სათაური აქვს",
            "selector": "#faq details > summary",
            "count": 2
          },
          {
            "label": "კითხვა პროგრამულადაც იხსნება",
            "expression": "(() => { const d=document.querySelector('#faq details'); d.open=true; return d.open && d.querySelector('p').textContent.length>10; })()"
          }
        ],
        "review": [
          "Tab და Enter-ით კითხვა იხსნება და იკეცება."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">forma®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#services\">სერვისები</a><a href=\"#contact\">დაგვიკავშირდი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დამოუკიდებელი კრეატიული სტუდია</p>\n    <h1>იდეები, რომლებსაც<br>შედეგი მოჰყვება.</h1>\n    <p class=\"intro\">სტრატეგიიდან ციფრულ გამოცდილებამდე. ვქმნით ბრენდებს, რომლებიც ადამიანებს ახსოვთ.</p>\n    <a class=\"button\" href=\"#services\">ნახე, რას ვქმნით ↗</a>\n  </section>\n  <section id=\"services\" aria-label=\"მომსახურება\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>ბრენდის იდენტობა</h2><p>ხასიათი, რომელსაც პირველივე შეხებაზე ცნობ.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>ვებგამოცდილება</h2><p>გააზრებული ინტერფეისი შენი აუდიტორიისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◈</div><h2>სტრატეგია</h2><p>მკაფიო მიმართულება შენი შემდეგი ნაბიჯისთვის.</p></article>\n  </div>\n  </section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · forma®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #cbb9ef; --paper: #f5f1ec; --ink: #2c2440; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { border-bottom: 1px solid #b7a9c7; margin-bottom: 35px; } .hero h1 { font-weight: 500; } .logo { font-style: italic; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">forma®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#services\">სერვისები</a><a href=\"#contact\">დაგვიკავშირდი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დამოუკიდებელი კრეატიული სტუდია</p>\n    <h1>იდეები, რომლებსაც<br>შედეგი მოჰყვება.</h1>\n    <p class=\"intro\">სტრატეგიიდან ციფრულ გამოცდილებამდე. ვქმნით ბრენდებს, რომლებიც ადამიანებს ახსოვთ.</p>\n    <a class=\"button\" href=\"#services\">ნახე, რას ვქმნით ↗</a>\n  </section>\n  <section id=\"services\" aria-label=\"მომსახურება\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>ბრენდის იდენტობა</h2><p>ხასიათი, რომელსაც პირველივე შეხებაზე ცნობ.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>ვებგამოცდილება</h2><p>გააზრებული ინტერფეისი შენი აუდიტორიისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◈</div><h2>სტრატეგია</h2><p>მკაფიო მიმართულება შენი შემდეგი ნაბიჯისთვის.</p></article>\n  </div>\n  </section>\n<section id=\"faq\"><h2>კითხვები თანამშრომლობამდე</h2>\n<details><summary>რამდენ ხანს გრძელდება პროექტი?</summary><p>მასშტაბის მიხედვით, დაახლოებით 3–6 კვირა.</p></details>\n<details><summary>მცირე პროექტებსაც იღებთ?</summary><p>დიახ, ვიწყებთ საჭიროების მოკლე განხილვით.</p></details>\n</section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · forma®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #cbb9ef; --paper: #f5f1ec; --ink: #2c2440; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { border-bottom: 1px solid #b7a9c7; margin-bottom: 35px; } .hero h1 { font-weight: 500; } .logo { font-style: italic; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#faq { margin-block: 60px; } details { padding: 18px 0; border-bottom: 1px solid #b9b0c3; } summary { cursor: pointer; font-weight: 700; }",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 4,
        "title": "ფორმა, რომლის შევსებაც მარტივია",
        "concept": "label და შეზღუდვები",
        "explanation": "placeholder წარწერას ვერ ცვლის: წერის დაწყებისთანავე ქრება. label ყოველთვის ხსნის ველის დანიშნულებას. required და type=\"email\" ბრაუზერს ვალიდაციის პირველ ფენას აძლევს. ასეთი შეზღუდვები მომხმარებლის დახმარებაა; რეალურ სერვისში სერვერზეც მოწმდება.",
        "task": "დაამატე #contact-form. name ველს label, required და minlength=\"2\" მიეცი; email ველს label, type=\"email\" და required. დაამატე submit ღილაკი და #status role=\"status\".",
        "snippet": "<label for=\"email\">ელფოსტა</label>\n<input id=\"email\" type=\"email\" required>",
        "hints": [
          "label-ის for და input-ის id ერთმანეთს უნდა ემთხვეოდეს.",
          "სტატუსი თავიდან ცარიელი იყოს. ფორმის გვერდით დაწერე, რომ ეს დემოა."
        ],
        "checks": [
          {
            "label": "სახელის ველი სავალდებულოა",
            "selector": "#name",
            "attribute": "required"
          },
          {
            "label": "სახელის მინიმალური ზომა 2-ია",
            "selector": "#name",
            "attribute": "minlength",
            "contains": "2"
          },
          {
            "label": "ელფოსტას სწორი ტიპი აქვს",
            "selector": "#email",
            "attribute": "type",
            "contains": "email"
          },
          {
            "label": "ორივე ველს თავისი წარწერა აქვს",
            "selector": "#contact-form label",
            "count": 2
          },
          {
            "label": "პასუხისთვის ცოცხალი რეგიონია",
            "selector": "#status",
            "attribute": "role",
            "contains": "status"
          }
        ],
        "review": [
          "ფორმის ყოველი ველი გასაგებია placeholder-ის გარეშე."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">forma®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#services\">სერვისები</a><a href=\"#contact\">დაგვიკავშირდი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დამოუკიდებელი კრეატიული სტუდია</p>\n    <h1>იდეები, რომლებსაც<br>შედეგი მოჰყვება.</h1>\n    <p class=\"intro\">სტრატეგიიდან ციფრულ გამოცდილებამდე. ვქმნით ბრენდებს, რომლებიც ადამიანებს ახსოვთ.</p>\n    <a class=\"button\" href=\"#services\">ნახე, რას ვქმნით ↗</a>\n  </section>\n  <section id=\"services\" aria-label=\"მომსახურება\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>ბრენდის იდენტობა</h2><p>ხასიათი, რომელსაც პირველივე შეხებაზე ცნობ.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>ვებგამოცდილება</h2><p>გააზრებული ინტერფეისი შენი აუდიტორიისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◈</div><h2>სტრატეგია</h2><p>მკაფიო მიმართულება შენი შემდეგი ნაბიჯისთვის.</p></article>\n  </div>\n  </section>\n<section id=\"faq\"><h2>კითხვები თანამშრომლობამდე</h2>\n<details><summary>რამდენ ხანს გრძელდება პროექტი?</summary><p>მასშტაბის მიხედვით, დაახლოებით 3–6 კვირა.</p></details>\n<details><summary>მცირე პროექტებსაც იღებთ?</summary><p>დიახ, ვიწყებთ საჭიროების მოკლე განხილვით.</p></details>\n</section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · forma®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #cbb9ef; --paper: #f5f1ec; --ink: #2c2440; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { border-bottom: 1px solid #b7a9c7; margin-bottom: 35px; } .hero h1 { font-weight: 500; } .logo { font-style: italic; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#faq { margin-block: 60px; } details { padding: 18px 0; border-bottom: 1px solid #b9b0c3; } summary { cursor: pointer; font-weight: 700; }",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">forma®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#services\">სერვისები</a><a href=\"#contact\">დაგვიკავშირდი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დამოუკიდებელი კრეატიული სტუდია</p>\n    <h1>იდეები, რომლებსაც<br>შედეგი მოჰყვება.</h1>\n    <p class=\"intro\">სტრატეგიიდან ციფრულ გამოცდილებამდე. ვქმნით ბრენდებს, რომლებიც ადამიანებს ახსოვთ.</p>\n    <a class=\"button\" href=\"#services\">ნახე, რას ვქმნით ↗</a>\n  </section>\n  <section id=\"services\" aria-label=\"მომსახურება\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>ბრენდის იდენტობა</h2><p>ხასიათი, რომელსაც პირველივე შეხებაზე ცნობ.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>ვებგამოცდილება</h2><p>გააზრებული ინტერფეისი შენი აუდიტორიისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◈</div><h2>სტრატეგია</h2><p>მკაფიო მიმართულება შენი შემდეგი ნაბიჯისთვის.</p></article>\n  </div>\n  </section>\n<section id=\"faq\"><h2>კითხვები თანამშრომლობამდე</h2>\n<details><summary>რამდენ ხანს გრძელდება პროექტი?</summary><p>მასშტაბის მიხედვით, დაახლოებით 3–6 კვირა.</p></details>\n<details><summary>მცირე პროექტებსაც იღებთ?</summary><p>დიახ, ვიწყებთ საჭიროების მოკლე განხილვით.</p></details>\n</section>\n<section id=\"contact\"><h2>მოგვიყევი შენს იდეაზე.</h2>\n<p>სასწავლო დემო — შეტყობინება არ გაიგზავნება.</p>\n<form id=\"contact-form\">\n<label for=\"name\">შენი სახელი</label><input id=\"name\" name=\"name\" required minlength=\"2\">\n<label for=\"email\">ელფოსტა</label><input id=\"email\" name=\"email\" type=\"email\" required>\n<button type=\"submit\">დემოს შემოწმება ↗</button>\n<p id=\"status\" role=\"status\"></p>\n</form></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · forma®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #cbb9ef; --paper: #f5f1ec; --ink: #2c2440; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { border-bottom: 1px solid #b7a9c7; margin-bottom: 35px; } .hero h1 { font-weight: 500; } .logo { font-style: italic; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#faq { margin-block: 60px; } details { padding: 18px 0; border-bottom: 1px solid #b9b0c3; } summary { cursor: pointer; font-weight: 700; }\nform { max-width: 540px; display: grid; gap: 10px; } input { width: 100%; padding: 14px; border: 1px solid #a79bb9; border-radius: 10px; background: #fff; color: #2c2440; } form button { margin-top: 12px; }",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 5,
        "title": "პასუხი, რომელსაც ენდობი",
        "concept": "ვალიდაცია და ზუსტი უკუკავშირი",
        "explanation": "submit მოვლენა ფორმის დონეზე დაამუშავე, რათა Enter-ით გაგზავნაც მუშაობდეს. preventDefault გვერდის გადასვლას აჩერებს, checkValidity კი შეზღუდვებს ამოწმებს. წარმატების ტექსტი უნდა აღწერდეს რეალურად შესრულებულ მოქმედებას: ამ დემოს არაფერი გაუგზავნია.",
        "task": "submit-ზე შეწყვიტე ნაგულისხმევი გადასვლა. ცარიელ ფორმაზე #status-ში „შეავსე“ დაწერე. სწორ მონაცემებზე მიუთითე „არაფერი გაგზავნილა“.",
        "snippet": "event.preventDefault();\nif (!form.checkValidity()) {\n  status.textContent = \"შეავსე ველები სწორად.\";\n  return;\n}",
        "hints": [
          "return წყვეტს წარმატების გზის გაგრძელებას, თუ მონაცემები არასწორია.",
          "ტესტი submit მოვლენას უშუალოდაც გზავნის; დამმუშავებელში ვალიდაცია მაინც შეამოწმე."
        ],
        "checks": [
          {
            "label": "ცარიელი ფორმა შეცდომის ახსნას იძლევა",
            "expression": "document.querySelector('#status').textContent.includes('შეავსე')",
            "action": {
              "selector": "#contact-form",
              "event": "submit"
            }
          },
          {
            "label": "ტესტისთვის სწორი მონაცემები შეგვყავს",
            "expression": "(() => { document.querySelector('#name').value='ანა'; document.querySelector('#email').value='ana@example.com'; return document.querySelector('#contact-form').checkValidity(); })()"
          },
          {
            "label": "სწორი პასუხი დემოს ზუსტად აღწერს",
            "expression": "document.querySelector('#status').textContent.includes('არაფერი გაგზავნილა')",
            "action": {
              "selector": "#contact-form",
              "event": "submit"
            }
          }
        ],
        "review": [
          "ვიზიტორს არ ექმნება შთაბეჭდილება, რომ შეტყობინება მართლა გაიგზავნა."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">forma®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#services\">სერვისები</a><a href=\"#contact\">დაგვიკავშირდი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დამოუკიდებელი კრეატიული სტუდია</p>\n    <h1>იდეები, რომლებსაც<br>შედეგი მოჰყვება.</h1>\n    <p class=\"intro\">სტრატეგიიდან ციფრულ გამოცდილებამდე. ვქმნით ბრენდებს, რომლებიც ადამიანებს ახსოვთ.</p>\n    <a class=\"button\" href=\"#services\">ნახე, რას ვქმნით ↗</a>\n  </section>\n  <section id=\"services\" aria-label=\"მომსახურება\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>ბრენდის იდენტობა</h2><p>ხასიათი, რომელსაც პირველივე შეხებაზე ცნობ.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>ვებგამოცდილება</h2><p>გააზრებული ინტერფეისი შენი აუდიტორიისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◈</div><h2>სტრატეგია</h2><p>მკაფიო მიმართულება შენი შემდეგი ნაბიჯისთვის.</p></article>\n  </div>\n  </section>\n<section id=\"faq\"><h2>კითხვები თანამშრომლობამდე</h2>\n<details><summary>რამდენ ხანს გრძელდება პროექტი?</summary><p>მასშტაბის მიხედვით, დაახლოებით 3–6 კვირა.</p></details>\n<details><summary>მცირე პროექტებსაც იღებთ?</summary><p>დიახ, ვიწყებთ საჭიროების მოკლე განხილვით.</p></details>\n</section>\n<section id=\"contact\"><h2>მოგვიყევი შენს იდეაზე.</h2>\n<p>სასწავლო დემო — შეტყობინება არ გაიგზავნება.</p>\n<form id=\"contact-form\">\n<label for=\"name\">შენი სახელი</label><input id=\"name\" name=\"name\" required minlength=\"2\">\n<label for=\"email\">ელფოსტა</label><input id=\"email\" name=\"email\" type=\"email\" required>\n<button type=\"submit\">დემოს შემოწმება ↗</button>\n<p id=\"status\" role=\"status\"></p>\n</form></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · forma®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #cbb9ef; --paper: #f5f1ec; --ink: #2c2440; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { border-bottom: 1px solid #b7a9c7; margin-bottom: 35px; } .hero h1 { font-weight: 500; } .logo { font-style: italic; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#faq { margin-block: 60px; } details { padding: 18px 0; border-bottom: 1px solid #b9b0c3; } summary { cursor: pointer; font-weight: 700; }\nform { max-width: 540px; display: grid; gap: 10px; } input { width: 100%; padding: 14px; border: 1px solid #a79bb9; border-radius: 10px; background: #fff; color: #2c2440; } form button { margin-top: 12px; }",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">forma®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#services\">სერვისები</a><a href=\"#contact\">დაგვიკავშირდი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დამოუკიდებელი კრეატიული სტუდია</p>\n    <h1>იდეები, რომლებსაც<br>შედეგი მოჰყვება.</h1>\n    <p class=\"intro\">სტრატეგიიდან ციფრულ გამოცდილებამდე. ვქმნით ბრენდებს, რომლებიც ადამიანებს ახსოვთ.</p>\n    <a class=\"button\" href=\"#services\">ნახე, რას ვქმნით ↗</a>\n  </section>\n  <section id=\"services\" aria-label=\"მომსახურება\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>ბრენდის იდენტობა</h2><p>ხასიათი, რომელსაც პირველივე შეხებაზე ცნობ.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>ვებგამოცდილება</h2><p>გააზრებული ინტერფეისი შენი აუდიტორიისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◈</div><h2>სტრატეგია</h2><p>მკაფიო მიმართულება შენი შემდეგი ნაბიჯისთვის.</p></article>\n  </div>\n  </section>\n<section id=\"faq\"><h2>კითხვები თანამშრომლობამდე</h2>\n<details><summary>რამდენ ხანს გრძელდება პროექტი?</summary><p>მასშტაბის მიხედვით, დაახლოებით 3–6 კვირა.</p></details>\n<details><summary>მცირე პროექტებსაც იღებთ?</summary><p>დიახ, ვიწყებთ საჭიროების მოკლე განხილვით.</p></details>\n</section>\n<section id=\"contact\"><h2>მოგვიყევი შენს იდეაზე.</h2>\n<p>სასწავლო დემო — შეტყობინება არ გაიგზავნება.</p>\n<form id=\"contact-form\">\n<label for=\"name\">შენი სახელი</label><input id=\"name\" name=\"name\" required minlength=\"2\">\n<label for=\"email\">ელფოსტა</label><input id=\"email\" name=\"email\" type=\"email\" required>\n<button type=\"submit\">დემოს შემოწმება ↗</button>\n<p id=\"status\" role=\"status\"></p>\n</form></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · forma®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #cbb9ef; --paper: #f5f1ec; --ink: #2c2440; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { border-bottom: 1px solid #b7a9c7; margin-bottom: 35px; } .hero h1 { font-weight: 500; } .logo { font-style: italic; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#faq { margin-block: 60px; } details { padding: 18px 0; border-bottom: 1px solid #b9b0c3; } summary { cursor: pointer; font-weight: 700; }\nform { max-width: 540px; display: grid; gap: 10px; } input { width: 100%; padding: 14px; border: 1px solid #a79bb9; border-radius: 10px; background: #fff; color: #2c2440; } form button { margin-top: 12px; }",
          "js": "document.querySelector('#contact-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const form = event.currentTarget;\n  if (!form.checkValidity()) {\n    document.querySelector('#status').textContent = 'შეავსე ორივე ველი სწორად.';\n    return;\n  }\n  document.querySelector('#status').textContent = 'დემო შემოწმებულია. არაფერი გაგზავნილა.';\n});"
        },
        "transfer": false
      },
      {
        "id": 6,
        "title": "ახალი კლიენტი: კერამიკის სახელოსნო",
        "concept": "ბრიფის დამოუკიდებლად გადაწყვეტა",
        "explanation": "კლიენტის შეცვლა მხოლოდ ლოგოს შეცვლა არ არის. კერამიკის სახელოსნოს სერვისების ნაცვლად მასტერკლასები აქვს, ხოლო ფორმა შეკვეთის ინტერესს აგროვებს. შეცვალე შინაარსი და ვიზუალური განწყობა ისე, რომ კომპონენტებისა და ხელმისაწვდომობის ხარისხი შენარჩუნდეს.",
        "task": "შეცვალე h1 — გამოიყენე „კერამიკ“. განაახლე სამი შეთავაზების სათაური და --accent. შეინარჩუნე კითხვები, ფორმა და ადაპტირებადი ბადე.",
        "snippet": "/* თავიდან განსაზღვრე აუდიტორია, შემდეგ ფერი და ტექსტი. */",
        "hints": [
          "შეინარჩუნე ტექნიკური id-ები, მაგრამ ხილული ტექსტი ახალ კლიენტს მოარგე.",
          "მოიფიქრე სამი შეთავაზება: პირველი ნაბიჯი, ჭურჭლის შექმნა, ჯგუფური შეხვედრა."
        ],
        "checks": [
          {
            "label": "შესავალი ახალ ბრიფს პასუხობს",
            "selector": "h1",
            "contains": "კერამიკ"
          },
          {
            "label": "სამივე შეთავაზება განახლებულია",
            "expression": "document.querySelectorAll('.card h2').length===3 && [...document.querySelectorAll('.card h2')].every(x=>!['ბრენდის იდენტობა','ვებგამოცდილება','სტრატეგია'].includes(x.textContent))"
          },
          {
            "label": "ფორმის ვალიდაცია შენარჩუნებულია",
            "selector": "#email",
            "attribute": "required"
          },
          {
            "label": "აქცენტის ახალი ფერია",
            "expression": "getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()!=='#cbb9ef'"
          },
          {
            "label": "ბარათების მშობელი Grid-ია",
            "selector": ".grid",
            "property": "display",
            "values": [
              "grid"
            ]
          },
          {
            "label": "ფართო ეკრანზე სამი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 3",
            "width": 1000
          },
          {
            "label": "ვიწრო ეკრანზე ერთი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 1",
            "width": 360
          },
          {
            "label": "360px-ზე ჰორიზონტალური გადაცდენა არ არის",
            "expression": "document.documentElement.scrollWidth <= innerWidth",
            "width": 360
          }
        ],
        "review": [
          "ხილული ტექსტები სახელოსნოს სტუმარს ესაუბრება.",
          "კომპონენტების გამოყენება სხვა ბიზნესისთვისაც შემიძლია."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">forma®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#services\">სერვისები</a><a href=\"#contact\">დაგვიკავშირდი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დამოუკიდებელი კრეატიული სტუდია</p>\n    <h1>იდეები, რომლებსაც<br>შედეგი მოჰყვება.</h1>\n    <p class=\"intro\">სტრატეგიიდან ციფრულ გამოცდილებამდე. ვქმნით ბრენდებს, რომლებიც ადამიანებს ახსოვთ.</p>\n    <a class=\"button\" href=\"#services\">ნახე, რას ვქმნით ↗</a>\n  </section>\n  <section id=\"services\" aria-label=\"მომსახურება\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>ბრენდის იდენტობა</h2><p>ხასიათი, რომელსაც პირველივე შეხებაზე ცნობ.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>ვებგამოცდილება</h2><p>გააზრებული ინტერფეისი შენი აუდიტორიისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◈</div><h2>სტრატეგია</h2><p>მკაფიო მიმართულება შენი შემდეგი ნაბიჯისთვის.</p></article>\n  </div>\n  </section>\n<section id=\"faq\"><h2>კითხვები თანამშრომლობამდე</h2>\n<details><summary>რამდენ ხანს გრძელდება პროექტი?</summary><p>მასშტაბის მიხედვით, დაახლოებით 3–6 კვირა.</p></details>\n<details><summary>მცირე პროექტებსაც იღებთ?</summary><p>დიახ, ვიწყებთ საჭიროების მოკლე განხილვით.</p></details>\n</section>\n<section id=\"contact\"><h2>მოგვიყევი შენს იდეაზე.</h2>\n<p>სასწავლო დემო — შეტყობინება არ გაიგზავნება.</p>\n<form id=\"contact-form\">\n<label for=\"name\">შენი სახელი</label><input id=\"name\" name=\"name\" required minlength=\"2\">\n<label for=\"email\">ელფოსტა</label><input id=\"email\" name=\"email\" type=\"email\" required>\n<button type=\"submit\">დემოს შემოწმება ↗</button>\n<p id=\"status\" role=\"status\"></p>\n</form></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · forma®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #cbb9ef; --paper: #f5f1ec; --ink: #2c2440; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { border-bottom: 1px solid #b7a9c7; margin-bottom: 35px; } .hero h1 { font-weight: 500; } .logo { font-style: italic; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#faq { margin-block: 60px; } details { padding: 18px 0; border-bottom: 1px solid #b9b0c3; } summary { cursor: pointer; font-weight: 700; }\nform { max-width: 540px; display: grid; gap: 10px; } input { width: 100%; padding: 14px; border: 1px solid #a79bb9; border-radius: 10px; background: #fff; color: #2c2440; } form button { margin-top: 12px; }",
          "js": "document.querySelector('#contact-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const form = event.currentTarget;\n  if (!form.checkValidity()) {\n    document.querySelector('#status').textContent = 'შეავსე ორივე ველი სწორად.';\n    return;\n  }\n  document.querySelector('#status').textContent = 'დემო შემოწმებულია. არაფერი გაგზავნილა.';\n});"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">forma®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#services\">სერვისები</a><a href=\"#contact\">დაგვიკავშირდი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დამოუკიდებელი კრეატიული სტუდია</p>\n    <h1>კერამიკა შენი<br>ხელების ისტორიით.</h1>\n    <p class=\"intro\">სტრატეგიიდან ციფრულ გამოცდილებამდე. ვქმნით ბრენდებს, რომლებიც ადამიანებს ახსოვთ.</p>\n    <a class=\"button\" href=\"#services\">ნახე, რას ვქმნით ↗</a>\n  </section>\n  <section id=\"services\" aria-label=\"მომსახურება\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>პირველი შეხება</h2><p>ხასიათი, რომელსაც პირველივე შეხებაზე ცნობ.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>შენი პირველი ჭიქა</h2><p>გააზრებული ინტერფეისი შენი აუდიტორიისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◈</div><h2>ჯგუფური შეხვედრა</h2><p>მკაფიო მიმართულება შენი შემდეგი ნაბიჯისთვის.</p></article>\n  </div>\n  </section>\n<section id=\"faq\"><h2>კითხვები თანამშრომლობამდე</h2>\n<details><summary>რამდენ ხანს გრძელდება პროექტი?</summary><p>მასშტაბის მიხედვით, დაახლოებით 3–6 კვირა.</p></details>\n<details><summary>მცირე პროექტებსაც იღებთ?</summary><p>დიახ, ვიწყებთ საჭიროების მოკლე განხილვით.</p></details>\n</section>\n<section id=\"contact\"><h2>მოგვიყევი შენს იდეაზე.</h2>\n<p>სასწავლო დემო — შეტყობინება არ გაიგზავნება.</p>\n<form id=\"contact-form\">\n<label for=\"name\">შენი სახელი</label><input id=\"name\" name=\"name\" required minlength=\"2\">\n<label for=\"email\">ელფოსტა</label><input id=\"email\" name=\"email\" type=\"email\" required>\n<button type=\"submit\">დემოს შემოწმება ↗</button>\n<p id=\"status\" role=\"status\"></p>\n</form></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · forma®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #cbb9ef; --paper: #f5f1ec; --ink: #2c2440; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { border-bottom: 1px solid #b7a9c7; margin-bottom: 35px; } .hero h1 { font-weight: 500; } .logo { font-style: italic; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#faq { margin-block: 60px; } details { padding: 18px 0; border-bottom: 1px solid #b9b0c3; } summary { cursor: pointer; font-weight: 700; }\nform { max-width: 540px; display: grid; gap: 10px; } input { width: 100%; padding: 14px; border: 1px solid #a79bb9; border-radius: 10px; background: #fff; color: #2c2440; } form button { margin-top: 12px; }\n:root { --accent: #e5b79c; }",
          "js": "document.querySelector('#contact-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const form = event.currentTarget;\n  if (!form.checkValidity()) {\n    document.querySelector('#status').textContent = 'შეავსე ორივე ველი სწორად.';\n    return;\n  }\n  document.querySelector('#status').textContent = 'დემო შემოწმებულია. არაფერი გაგზავნილა.';\n});"
        },
        "transfer": true
      }
    ],
    "preview": {
      "html": "<header>\n  <a class=\"logo\" href=\"#\">forma®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#services\">სერვისები</a><a href=\"#contact\">დაგვიკავშირდი</a></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">დამოუკიდებელი კრეატიული სტუდია</p>\n    <h1>იდეები, რომლებსაც<br>შედეგი მოჰყვება.</h1>\n    <p class=\"intro\">სტრატეგიიდან ციფრულ გამოცდილებამდე. ვქმნით ბრენდებს, რომლებიც ადამიანებს ახსოვთ.</p>\n    <a class=\"button\" href=\"#services\">ნახე, რას ვქმნით ↗</a>\n  </section>\n  <section id=\"services\" aria-label=\"მომსახურება\">\n  <div class=\"grid\">\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">✳</div><h2>ბრენდის იდენტობა</h2><p>ხასიათი, რომელსაც პირველივე შეხებაზე ცნობ.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">↗</div><h2>ვებგამოცდილება</h2><p>გააზრებული ინტერფეისი შენი აუდიტორიისთვის.</p></article>\n    <article class=\"card\"><div class=\"art\" aria-hidden=\"true\">◈</div><h2>სტრატეგია</h2><p>მკაფიო მიმართულება შენი შემდეგი ნაბიჯისთვის.</p></article>\n  </div>\n  </section>\n<section id=\"faq\"><h2>კითხვები თანამშრომლობამდე</h2>\n<details><summary>რამდენ ხანს გრძელდება პროექტი?</summary><p>მასშტაბის მიხედვით, დაახლოებით 3–6 კვირა.</p></details>\n<details><summary>მცირე პროექტებსაც იღებთ?</summary><p>დიახ, ვიწყებთ საჭიროების მოკლე განხილვით.</p></details>\n</section>\n<section id=\"contact\"><h2>მოგვიყევი შენს იდეაზე.</h2>\n<p>სასწავლო დემო — შეტყობინება არ გაიგზავნება.</p>\n<form id=\"contact-form\">\n<label for=\"name\">შენი სახელი</label><input id=\"name\" name=\"name\" required minlength=\"2\">\n<label for=\"email\">ელფოსტა</label><input id=\"email\" name=\"email\" type=\"email\" required>\n<button type=\"submit\">დემოს შემოწმება ↗</button>\n<p id=\"status\" role=\"status\"></p>\n</form></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · forma®</footer>",
      "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #cbb9ef; --paper: #f5f1ec; --ink: #2c2440; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { border-bottom: 1px solid #b7a9c7; margin-bottom: 35px; } .hero h1 { font-weight: 500; } .logo { font-style: italic; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#faq { margin-block: 60px; } details { padding: 18px 0; border-bottom: 1px solid #b9b0c3; } summary { cursor: pointer; font-weight: 700; }\nform { max-width: 540px; display: grid; gap: 10px; } input { width: 100%; padding: 14px; border: 1px solid #a79bb9; border-radius: 10px; background: #fff; color: #2c2440; } form button { margin-top: 12px; }",
      "js": "document.querySelector('#contact-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const form = event.currentTarget;\n  if (!form.checkValidity()) {\n    document.querySelector('#status').textContent = 'შეავსე ორივე ველი სწორად.';\n    return;\n  }\n  document.querySelector('#status').textContent = 'დემო შემოწმებულია. არაფერი გაგზავნილა.';\n});"
    }
  },
  {
    "id": "atlas",
    "title": "Atlas — მოგზაურობის კოლექცია",
    "subtitle": "ადგილი შენი შემდეგი ამბისთვის.",
    "kind": "კატალოგი",
    "level": 2,
    "minutes": 130,
    "skills": [
      "მასივები",
      "render ფუნქცია",
      "ძებნა",
      "ცარიელი მდგომარეობა"
    ],
    "lessons": [
      34,
      35,
      37,
      39,
      41
    ],
    "accent": "#d8def9",
    "paper": "#f2f4f8",
    "ink": "#202c45",
    "brief": "შექმენი მოგზაურობის გზამკვლევი, რომლის ბარათებიც მასივიდან იქმნება, ძებნით იფილტრება და საყვარელ ადგილებს ინიშნავს.",
    "audience": "მოგზაური, რომელსაც მოკლე, სასარგებლო შთაგონება სჭირდება.",
    "reuse": "იმავე მონაცემთა ნაკადს გამოიყენებ რეცეპტების, ღონისძიებების ან სტატიების კოლექციაში.",
    "stages": [
      {
        "id": 1,
        "title": "მონაცემებზე აგებული გვერდის ჩონჩხი",
        "concept": "ინტერფეისის სტრუქტურა",
        "explanation": "დინამიკურ გვერდსაც ჯერ მკაფიო სტრუქტურა სჭირდება. HTML ქმნის ადგილებს, სადაც პროგრამა მონაცემებს აჩვენებს. ამჯერად ბარათებს HTML-ში ხელით არ ვაკოპირებთ: ცარიელ #places კონტეინერს JavaScript შეავსებს. გამოყავი შინაარსი, მდგომარეობა და ჩვენება.",
        "task": "ააწყე .hero ერთი h1-ით და .intro-თი; დაამატე ცარიელი #places.grid. გამოიყენე ბრენდის სტილი და ადაპტირებადი ბადე.",
        "snippet": "<section id=\"places\" class=\"grid\" aria-label=\"მიმართულებები\"></section>",
        "hints": [
          "კონტეინერი main-ის შიგნით, შესავლის ქვემოთ მოათავსე.",
          "ბარათებს შემდეგ ეტაპზე JavaScript შექმნის; ახლა ისინი საჭირო არ არის."
        ],
        "checks": [
          {
            "label": "გვერდს ერთი მთავარი h1 აქვს",
            "selector": "main h1",
            "count": 1
          },
          {
            "label": "გაცნობის სექციას განმარტება აქვს",
            "selector": ".hero .intro"
          },
          {
            "label": "მოქმედების ბმულს შიდა მისამართი აქვს",
            "selector": ".hero a",
            "attribute": "href",
            "contains": "#"
          },
          {
            "label": "მონაცემებისთვის კონტეინერია",
            "selector": "#places.grid"
          },
          {
            "label": "ბარათების მშობელი Grid-ია",
            "selector": ".grid",
            "property": "display",
            "values": [
              "grid"
            ]
          },
          {
            "label": "ფართო ეკრანზე სამი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 3",
            "width": 1000
          },
          {
            "label": "ვიწრო ეკრანზე ერთი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 1",
            "width": 360
          },
          {
            "label": "360px-ზე ჰორიზონტალური გადაცდენა არ არის",
            "expression": "document.documentElement.scrollWidth <= innerWidth",
            "width": 360
          }
        ],
        "review": [
          "360px და ფართო ეკრანი შეადარე: ტექსტი სრულად იკითხება.",
          "Tab-ით გადადი მოქმედებებზე და დარწმუნდი, რომ ფოკუსი ჩანს."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">atlas↗</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#places\">მიმართულებები</a><span>რჩეული <b id=\"saved\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <!-- შენი პირველი სექცია აქ დაამატე. -->\n</main>\n<footer>შექმნილია სწავლის პროცესში · atlas↗</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">atlas↗</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#places\">მიმართულებები</a><span>რჩეული <b id=\"saved\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">პატარა მოგზაურობა · დიდი შთაბეჭდილება</p>\n    <h1>შენი შემდეგი ამბავი<br>აქ იწყება.</h1>\n    <p class=\"intro\">აღმოაჩინე მთები, ზღვები და ქალაქები. შეარჩიე ადგილი შენი ტემპით.</p>\n    <a class=\"button\" href=\"#places\">იპოვე მიმართულება ↗</a>\n  </section>\n<section id=\"places\" class=\"grid\" aria-label=\"მიმართულებები\"></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · atlas↗</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d8def9; --paper: #f2f4f8; --ink: #202c45; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: linear-gradient(135deg, transparent 55%, #d8def970); border-radius: 18px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 2,
        "title": "მასივიდან ბარათებამდე",
        "concept": "ობიექტები და render",
        "explanation": "თითო მიმართულებას title, type და symbol აქვს. render ფუნქცია ამ მონაცემებიდან ელემენტებს ქმნის. replaceChildren ძველ ჩვენებას ასუფთავებს, textContent კი ტექსტს HTML-ად არ განმარტავს. ამ გზით ერთი ცვლილება მონაცემებში საკმარისია ახალი ბარათის მისაღებად.",
        "task": "შექმენი places მასივი სამი ობიექტით: ყაზბეგი, ბათუმი, თბილისი. დაწერე render(items), რომელიც #places-ში article.card, h2 და კატეგორიას ქმნის.",
        "snippet": "const title = document.createElement(\"h2\");\ntitle.textContent = place.title;\ncard.append(title);",
        "hints": [
          "render-ის დასაწყისში კონტეინერი გაასუფთავე, რომ ყოველი გაშვება ბარათებს არ აორმაგებდეს.",
          "ჯერ მასივს გადაუარე forEach-ით; შემდეგ შექმნილი card კონტეინერს მიამატე."
        ],
        "checks": [
          {
            "label": "მასივიდან სამი ბარათი იქმნება",
            "selector": "#places .card",
            "count": 3
          },
          {
            "label": "ყაზბეგის ბარათი ჩანს",
            "selector": "#places",
            "contains": "ყაზბეგი"
          },
          {
            "label": "ბათუმის ბარათი ჩანს",
            "selector": "#places",
            "contains": "ბათუმი"
          },
          {
            "label": "თბილისის ბარათი ჩანს",
            "selector": "#places",
            "contains": "თბილისი"
          }
        ],
        "review": [
          "ერთ ობიექტს თუ შეცვლი, შესაბამისი ბარათი იცვლება."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">atlas↗</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#places\">მიმართულებები</a><span>რჩეული <b id=\"saved\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">პატარა მოგზაურობა · დიდი შთაბეჭდილება</p>\n    <h1>შენი შემდეგი ამბავი<br>აქ იწყება.</h1>\n    <p class=\"intro\">აღმოაჩინე მთები, ზღვები და ქალაქები. შეარჩიე ადგილი შენი ტემპით.</p>\n    <a class=\"button\" href=\"#places\">იპოვე მიმართულება ↗</a>\n  </section>\n<section id=\"places\" class=\"grid\" aria-label=\"მიმართულებები\"></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · atlas↗</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d8def9; --paper: #f2f4f8; --ink: #202c45; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: linear-gradient(135deg, transparent 55%, #d8def970); border-radius: 18px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">atlas↗</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#places\">მიმართულებები</a><span>რჩეული <b id=\"saved\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">პატარა მოგზაურობა · დიდი შთაბეჭდილება</p>\n    <h1>შენი შემდეგი ამბავი<br>აქ იწყება.</h1>\n    <p class=\"intro\">აღმოაჩინე მთები, ზღვები და ქალაქები. შეარჩიე ადგილი შენი ტემპით.</p>\n    <a class=\"button\" href=\"#places\">იპოვე მიმართულება ↗</a>\n  </section>\n<section id=\"places\" class=\"grid\" aria-label=\"მიმართულებები\"></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · atlas↗</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d8def9; --paper: #f2f4f8; --ink: #202c45; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: linear-gradient(135deg, transparent 55%, #d8def970); border-radius: 18px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n",
          "js": "const places = [\n  { title: 'ყაზბეგი', type: 'მთა', symbol: '△' },\n  { title: 'ბათუმი', type: 'ზღვა', symbol: '≈' },\n  { title: 'თბილისი', type: 'ქალაქი', symbol: '⌂' }\n];\nconst container = document.querySelector('#places');\nfunction render(items) {\n  container.replaceChildren();\n  items.forEach(place => {\n    const card = document.createElement('article');\n    card.className = 'card';\n    const art = document.createElement('div');\n    art.className = 'art'; art.textContent = place.symbol;\n    const title = document.createElement('h2'); title.textContent = place.title;\n    const category = document.createElement('p'); category.textContent = place.type;\n    card.append(art, title, category);\n    container.append(card);\n  });\n}\nrender(places);"
        },
        "transfer": false
      },
      {
        "id": 3,
        "title": "ძებნა, რომელიც წერისას მუშაობს",
        "concept": "filter და input მოვლენა",
        "explanation": "ძებნა მონაცემთა გარდაქმნაა: მომხმარებლის სტრიქონს იღებ, მასივს ფილტრავ და შედეგს ხატავ. საწყისი places მასივი უცვლელი რჩება. trim შემთხვევით სივრცეებს აშორებს, toLowerCase კი შედარებას სიმბოლოების რეგისტრისგან დამოუკიდებელს ხდის.",
        "task": "დაამატე #search type=\"search\" თავისი label-ით. input მოვლენაზე title-ის ნაწილით გაფილტრე places და გამოიძახე render. ველის გასუფთავებამ ყველა ბარათი დააბრუნოს.",
        "snippet": "const query = event.target.value.trim().toLowerCase();\nrender(places.filter(place => place.title.toLowerCase().includes(query)));",
        "hints": [
          "click-ის ნაცვლად input მოვლენა გამოიყენე, რათა წერისას იმუშაოს.",
          "არ შეცვალო places მასივი. მხოლოდ filter-ის დაბრუნებული ახალი მასივი დახატე."
        ],
        "checks": [
          {
            "label": "ძებნის ველს წარწერა აქვს",
            "selector": "label[for=\"search\"]"
          },
          {
            "label": "ძებნა ერთ შესაბამის შედეგს აჩვენებს",
            "expression": "document.querySelectorAll('#places .card').length===1 && document.querySelector('#places').textContent.includes('ბათუმი')",
            "action": {
              "selector": "#search",
              "event": "input",
              "value": "ბათ"
            }
          },
          {
            "label": "გასუფთავება ყველა შედეგს აბრუნებს",
            "expression": "document.querySelectorAll('#places .card').length===3",
            "action": {
              "selector": "#search",
              "event": "input",
              "value": ""
            }
          }
        ],
        "review": [
          "ვიცი განსხვავება საწყის მონაცემებსა და გაფილტრულ ჩვენებას შორის."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">atlas↗</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#places\">მიმართულებები</a><span>რჩეული <b id=\"saved\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">პატარა მოგზაურობა · დიდი შთაბეჭდილება</p>\n    <h1>შენი შემდეგი ამბავი<br>აქ იწყება.</h1>\n    <p class=\"intro\">აღმოაჩინე მთები, ზღვები და ქალაქები. შეარჩიე ადგილი შენი ტემპით.</p>\n    <a class=\"button\" href=\"#places\">იპოვე მიმართულება ↗</a>\n  </section>\n<section id=\"places\" class=\"grid\" aria-label=\"მიმართულებები\"></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · atlas↗</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d8def9; --paper: #f2f4f8; --ink: #202c45; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: linear-gradient(135deg, transparent 55%, #d8def970); border-radius: 18px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n",
          "js": "const places = [\n  { title: 'ყაზბეგი', type: 'მთა', symbol: '△' },\n  { title: 'ბათუმი', type: 'ზღვა', symbol: '≈' },\n  { title: 'თბილისი', type: 'ქალაქი', symbol: '⌂' }\n];\nconst container = document.querySelector('#places');\nfunction render(items) {\n  container.replaceChildren();\n  items.forEach(place => {\n    const card = document.createElement('article');\n    card.className = 'card';\n    const art = document.createElement('div');\n    art.className = 'art'; art.textContent = place.symbol;\n    const title = document.createElement('h2'); title.textContent = place.title;\n    const category = document.createElement('p'); category.textContent = place.type;\n    card.append(art, title, category);\n    container.append(card);\n  });\n}\nrender(places);"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">atlas↗</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#places\">მიმართულებები</a><span>რჩეული <b id=\"saved\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">პატარა მოგზაურობა · დიდი შთაბეჭდილება</p>\n    <h1>შენი შემდეგი ამბავი<br>აქ იწყება.</h1>\n    <p class=\"intro\">აღმოაჩინე მთები, ზღვები და ქალაქები. შეარჩიე ადგილი შენი ტემპით.</p>\n    <a class=\"button\" href=\"#places\">იპოვე მიმართულება ↗</a>\n  </section>\n<label for=\"search\">მოძებნე მიმართულება</label>\n<input id=\"search\" type=\"search\" placeholder=\"მაგალითად, ყაზბეგი\">\n<section id=\"places\" class=\"grid\" aria-label=\"მიმართულებები\"></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · atlas↗</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d8def9; --paper: #f2f4f8; --ink: #202c45; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: linear-gradient(135deg, transparent 55%, #d8def970); border-radius: 18px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#search { display: block; width: 100%; padding: 16px; margin: 10px 0 28px; border: 1px solid #aab6cf; border-radius: 12px; background: white; color: #202c45; }",
          "js": "const places = [\n  { title: 'ყაზბეგი', type: 'მთა', symbol: '△' },\n  { title: 'ბათუმი', type: 'ზღვა', symbol: '≈' },\n  { title: 'თბილისი', type: 'ქალაქი', symbol: '⌂' }\n];\nconst container = document.querySelector('#places');\nfunction render(items) {\n  container.replaceChildren();\n  items.forEach(place => {\n    const card = document.createElement('article');\n    card.className = 'card';\n    const art = document.createElement('div');\n    art.className = 'art'; art.textContent = place.symbol;\n    const title = document.createElement('h2'); title.textContent = place.title;\n    const category = document.createElement('p'); category.textContent = place.type;\n    card.append(art, title, category);\n    container.append(card);\n  });\n}\nrender(places);\ndocument.querySelector('#search').addEventListener('input', event => {\n  const query = event.target.value.trim().toLowerCase();\n  render(places.filter(place => place.title.toLowerCase().includes(query)));\n});"
        },
        "transfer": false
      },
      {
        "id": 4,
        "title": "როცა შედეგი არ მოიძებნა",
        "concept": "ცარიელი მდგომარეობა",
        "explanation": "ინტერფეისი მხოლოდ საუკეთესო შემთხვევისთვის არ იგეგმება. ცარიელი შედეგი შეცდომა არ არის: აუხსენი, რა მოხდა და როგორ გააგრძელოს ადამიანმა. მდგომარეობას render-ის შიგნით მართე, რომ ნებისმიერი ფილტრი თანმიმდევრულად იმუშაოს. aria role=\"status\" შედეგის ცვლილებასაც აცნობებს.",
        "task": "დაამატე #empty role=\"status\". render-ში აჩვენე ის მხოლოდ მაშინ, როცა items.length ნულია. ტექსტში გამოიყენე „ვერაფერი“ და შემდეგი ნაბიჯი შესთავაზე.",
        "snippet": "empty.hidden = items.length !== 0;",
        "hints": [
          "ელემენტი #places-ის გარეთ მოათავსე, რათა replaceChildren-მა არ წაშალოს.",
          "ცარიელი მასივი ჩვეულებრივ render([])-ითაც სწორად უნდა გამოჩნდეს."
        ],
        "checks": [
          {
            "label": "უცნობი ძებნა ცარიელ მდგომარეობას აჩვენებს",
            "expression": "document.querySelectorAll('#places .card').length===0 && !document.querySelector('#empty').hidden && document.querySelector('#empty').textContent.includes('ვერაფერი')",
            "action": {
              "selector": "#search",
              "event": "input",
              "value": "არარსებული"
            }
          },
          {
            "label": "ძებნის გასუფთავება სტატუსს მალავს",
            "expression": "document.querySelector('#empty').hidden && document.querySelectorAll('#places .card').length===3",
            "action": {
              "selector": "#search",
              "event": "input",
              "value": ""
            }
          },
          {
            "label": "ცარიელი შედეგი ცოცხალი სტატუსია",
            "selector": "#empty",
            "attribute": "role",
            "contains": "status"
          }
        ],
        "review": [
          "ცარიელი გვერდის ნაცვლად გასაგები ახსნა და შემდეგი ნაბიჯია."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">atlas↗</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#places\">მიმართულებები</a><span>რჩეული <b id=\"saved\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">პატარა მოგზაურობა · დიდი შთაბეჭდილება</p>\n    <h1>შენი შემდეგი ამბავი<br>აქ იწყება.</h1>\n    <p class=\"intro\">აღმოაჩინე მთები, ზღვები და ქალაქები. შეარჩიე ადგილი შენი ტემპით.</p>\n    <a class=\"button\" href=\"#places\">იპოვე მიმართულება ↗</a>\n  </section>\n<label for=\"search\">მოძებნე მიმართულება</label>\n<input id=\"search\" type=\"search\" placeholder=\"მაგალითად, ყაზბეგი\">\n<section id=\"places\" class=\"grid\" aria-label=\"მიმართულებები\"></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · atlas↗</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d8def9; --paper: #f2f4f8; --ink: #202c45; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: linear-gradient(135deg, transparent 55%, #d8def970); border-radius: 18px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#search { display: block; width: 100%; padding: 16px; margin: 10px 0 28px; border: 1px solid #aab6cf; border-radius: 12px; background: white; color: #202c45; }",
          "js": "const places = [\n  { title: 'ყაზბეგი', type: 'მთა', symbol: '△' },\n  { title: 'ბათუმი', type: 'ზღვა', symbol: '≈' },\n  { title: 'თბილისი', type: 'ქალაქი', symbol: '⌂' }\n];\nconst container = document.querySelector('#places');\nfunction render(items) {\n  container.replaceChildren();\n  items.forEach(place => {\n    const card = document.createElement('article');\n    card.className = 'card';\n    const art = document.createElement('div');\n    art.className = 'art'; art.textContent = place.symbol;\n    const title = document.createElement('h2'); title.textContent = place.title;\n    const category = document.createElement('p'); category.textContent = place.type;\n    card.append(art, title, category);\n    container.append(card);\n  });\n}\nrender(places);\ndocument.querySelector('#search').addEventListener('input', event => {\n  const query = event.target.value.trim().toLowerCase();\n  render(places.filter(place => place.title.toLowerCase().includes(query)));\n});"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">atlas↗</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#places\">მიმართულებები</a><span>რჩეული <b id=\"saved\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">პატარა მოგზაურობა · დიდი შთაბეჭდილება</p>\n    <h1>შენი შემდეგი ამბავი<br>აქ იწყება.</h1>\n    <p class=\"intro\">აღმოაჩინე მთები, ზღვები და ქალაქები. შეარჩიე ადგილი შენი ტემპით.</p>\n    <a class=\"button\" href=\"#places\">იპოვე მიმართულება ↗</a>\n  </section>\n<label for=\"search\">მოძებნე მიმართულება</label>\n<input id=\"search\" type=\"search\" placeholder=\"მაგალითად, ყაზბეგი\">\n<section id=\"places\" class=\"grid\" aria-label=\"მიმართულებები\"></section>\n<p id=\"empty\" role=\"status\" hidden>ვერაფერი მოიძებნა. სცადე სხვა სიტყვა.</p>\n</main>\n<footer>შექმნილია სწავლის პროცესში · atlas↗</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d8def9; --paper: #f2f4f8; --ink: #202c45; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: linear-gradient(135deg, transparent 55%, #d8def970); border-radius: 18px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#search { display: block; width: 100%; padding: 16px; margin: 10px 0 28px; border: 1px solid #aab6cf; border-radius: 12px; background: white; color: #202c45; }",
          "js": "const places = [\n  { title: 'ყაზბეგი', type: 'მთა', symbol: '△' },\n  { title: 'ბათუმი', type: 'ზღვა', symbol: '≈' },\n  { title: 'თბილისი', type: 'ქალაქი', symbol: '⌂' }\n];\nconst container = document.querySelector('#places');\nfunction render(items) {\n  container.replaceChildren();\n  document.querySelector(\"#empty\").hidden = items.length !== 0;\n  items.forEach(place => {\n    const card = document.createElement('article');\n    card.className = 'card';\n    const art = document.createElement('div');\n    art.className = 'art'; art.textContent = place.symbol;\n    const title = document.createElement('h2'); title.textContent = place.title;\n    const category = document.createElement('p'); category.textContent = place.type;\n    card.append(art, title, category);\n    container.append(card);\n  });\n}\nrender(places);\ndocument.querySelector('#search').addEventListener('input', event => {\n  const query = event.target.value.trim().toLowerCase();\n  render(places.filter(place => place.title.toLowerCase().includes(query)));\n});"
        },
        "transfer": false
      },
      {
        "id": 5,
        "title": "რჩეული მიმართულებები",
        "concept": "Set და მდგომარეობის შენარჩუნება",
        "explanation": "Set უნიკალურ მნიშვნელობებს ინახავს: ერთ ადგილს ორჯერ ვერ დაამატებ. ღილაკის ქცევა მდგომარეობაზეა დამოკიდებული — დამატება ან წაშლა. მდგომარეობა render-ის გარეთ უნდა დარჩეს, რომ ძებნისას არ დაიკარგოს. ახალი ბარათი შექმნისას თავის სწორ მდგომარეობას კითხულობს.",
        "task": "თითო ბარათს button.save დაუმატე. დაჭერამ რჩეულში დაამატოს/ამოშალოს და #saved განაახლოს. aria-pressed-ით ასახე მდგომარეობა; ძებნამ არჩევანი არ უნდა დაკარგოს.",
        "snippet": "const favorites = new Set();\nif (favorites.has(title)) favorites.delete(title);\nelse favorites.add(title);",
        "hints": [
          "Set შექმენი render ფუნქციის გარეთ.",
          "ყოველ ახალ ღილაკს მიმდინარე Set-ის მიხედვით მიეცი aria-pressed."
        ],
        "checks": [
          {
            "label": "პირველი ადგილი რჩეულში ემატება",
            "expression": "document.querySelector('#saved').textContent==='1' && document.querySelector('.save').getAttribute('aria-pressed')==='true'",
            "action": {
              "selector": ".save",
              "event": "click"
            }
          },
          {
            "label": "ძებნა ნულს არ აყენებს",
            "expression": "document.querySelector('#saved').textContent==='1'",
            "action": {
              "selector": "#search",
              "event": "input",
              "value": "ბათ"
            }
          },
          {
            "label": "ყველაზე დაბრუნებისას არჩევანი ჩანს",
            "expression": "document.querySelector('.save').getAttribute('aria-pressed')==='true'",
            "action": {
              "selector": "#search",
              "event": "input",
              "value": ""
            }
          },
          {
            "label": "ხელახალი დაჭერა რჩეულიდან შლის",
            "expression": "document.querySelector('#saved').textContent==='0'",
            "action": {
              "selector": ".save",
              "event": "click"
            }
          }
        ],
        "review": [
          "იგივე ელემენტი ორჯერ არ ითვლება.",
          "გასაგებია, რომ რჩეული ამ გაშვების მეხსიერებაშია და გვერდის განახლებისას არ რჩება."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">atlas↗</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#places\">მიმართულებები</a><span>რჩეული <b id=\"saved\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">პატარა მოგზაურობა · დიდი შთაბეჭდილება</p>\n    <h1>შენი შემდეგი ამბავი<br>აქ იწყება.</h1>\n    <p class=\"intro\">აღმოაჩინე მთები, ზღვები და ქალაქები. შეარჩიე ადგილი შენი ტემპით.</p>\n    <a class=\"button\" href=\"#places\">იპოვე მიმართულება ↗</a>\n  </section>\n<label for=\"search\">მოძებნე მიმართულება</label>\n<input id=\"search\" type=\"search\" placeholder=\"მაგალითად, ყაზბეგი\">\n<section id=\"places\" class=\"grid\" aria-label=\"მიმართულებები\"></section>\n<p id=\"empty\" role=\"status\" hidden>ვერაფერი მოიძებნა. სცადე სხვა სიტყვა.</p>\n</main>\n<footer>შექმნილია სწავლის პროცესში · atlas↗</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d8def9; --paper: #f2f4f8; --ink: #202c45; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: linear-gradient(135deg, transparent 55%, #d8def970); border-radius: 18px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#search { display: block; width: 100%; padding: 16px; margin: 10px 0 28px; border: 1px solid #aab6cf; border-radius: 12px; background: white; color: #202c45; }",
          "js": "const places = [\n  { title: 'ყაზბეგი', type: 'მთა', symbol: '△' },\n  { title: 'ბათუმი', type: 'ზღვა', symbol: '≈' },\n  { title: 'თბილისი', type: 'ქალაქი', symbol: '⌂' }\n];\nconst container = document.querySelector('#places');\nfunction render(items) {\n  container.replaceChildren();\n  document.querySelector(\"#empty\").hidden = items.length !== 0;\n  items.forEach(place => {\n    const card = document.createElement('article');\n    card.className = 'card';\n    const art = document.createElement('div');\n    art.className = 'art'; art.textContent = place.symbol;\n    const title = document.createElement('h2'); title.textContent = place.title;\n    const category = document.createElement('p'); category.textContent = place.type;\n    card.append(art, title, category);\n    container.append(card);\n  });\n}\nrender(places);\ndocument.querySelector('#search').addEventListener('input', event => {\n  const query = event.target.value.trim().toLowerCase();\n  render(places.filter(place => place.title.toLowerCase().includes(query)));\n});"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">atlas↗</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#places\">მიმართულებები</a><span>რჩეული <b id=\"saved\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">პატარა მოგზაურობა · დიდი შთაბეჭდილება</p>\n    <h1>შენი შემდეგი ამბავი<br>აქ იწყება.</h1>\n    <p class=\"intro\">აღმოაჩინე მთები, ზღვები და ქალაქები. შეარჩიე ადგილი შენი ტემპით.</p>\n    <a class=\"button\" href=\"#places\">იპოვე მიმართულება ↗</a>\n  </section>\n<label for=\"search\">მოძებნე მიმართულება</label>\n<input id=\"search\" type=\"search\" placeholder=\"მაგალითად, ყაზბეგი\">\n<section id=\"places\" class=\"grid\" aria-label=\"მიმართულებები\"></section>\n<p id=\"empty\" role=\"status\" hidden>ვერაფერი მოიძებნა. სცადე სხვა სიტყვა.</p>\n</main>\n<footer>შექმნილია სწავლის პროცესში · atlas↗</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d8def9; --paper: #f2f4f8; --ink: #202c45; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: linear-gradient(135deg, transparent 55%, #d8def970); border-radius: 18px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#search { display: block; width: 100%; padding: 16px; margin: 10px 0 28px; border: 1px solid #aab6cf; border-radius: 12px; background: white; color: #202c45; }",
          "js": "const places = [\n  { title: 'ყაზბეგი', type: 'მთა', symbol: '△' },\n  { title: 'ბათუმი', type: 'ზღვა', symbol: '≈' },\n  { title: 'თბილისი', type: 'ქალაქი', symbol: '⌂' }\n];\nconst favorites = new Set();\nconst container = document.querySelector('#places');\nfunction render(items) {\n  container.replaceChildren();\n  document.querySelector(\"#empty\").hidden = items.length !== 0;\n  items.forEach(place => {\n    const card = document.createElement('article');\n    card.className = 'card';\n    const art = document.createElement('div');\n    art.className = 'art'; art.textContent = place.symbol;\n    const title = document.createElement('h2'); title.textContent = place.title;\n    const category = document.createElement('p'); category.textContent = place.type;\n    const button = document.createElement('button');\n    button.className = 'save';\n    button.textContent = favorites.has(place.title) ? 'შენახულია ✓' : 'რჩეულში დამატება';\n    button.setAttribute('aria-pressed', String(favorites.has(place.title)));\n    button.addEventListener('click', () => {\n      if (favorites.has(place.title)) favorites.delete(place.title);\n      else favorites.add(place.title);\n      button.setAttribute('aria-pressed', String(favorites.has(place.title)));\n      button.textContent = favorites.has(place.title) ? 'შენახულია ✓' : 'რჩეულში დამატება';\n      document.querySelector('#saved').textContent = favorites.size;\n    });\n    card.append(art, title, category, button);\n    container.append(card);\n  });\n}\nrender(places);\ndocument.querySelector('#search').addEventListener('input', event => {\n  const query = event.target.value.trim().toLowerCase();\n  render(places.filter(place => place.title.toLowerCase().includes(query)));\n});"
        },
        "transfer": false
      },
      {
        "id": 6,
        "title": "შექმენი რეცეპტების კოლექცია",
        "concept": "მონაცემთა მოდელის გადატანა",
        "explanation": "უკვე გაქვს კოლექციის ძრავა: მონაცემები, ძებნა, მდგომარეობა და ჩვენება. ახლა შეცვალე სფერო რეცეპტებზე. არ გადააკოპირო ხილული ბარათები HTML-ში — შეცვალე მასივი. ამით სწავლობ დინამიკური სისტემის მართვას და არა ერთი კონკრეტული გვერდის აწყობას.",
        "task": "გადააკეთე გვერდი რეცეპტების კოლექციად. h1-ში გამოიყენე „რეცეპტ“, მასივში დაამატე „პასტა“ და კიდევ ორი კერძი. შეცვალე აღწერები და ფერის აქცენტი. ძებნა და რჩეული შეინარჩუნე.",
        "snippet": "const places = [\n  { title: \"პასტა\", type: \"20 წუთი\", symbol: \"◉\" },\n  // კიდევ ორი კერძი\n];",
        "hints": [
          "სახელებს ძიებისთვის textContent-ით ხატავ — ახალი სფეროსთვის ძრავა უცვლელი დარჩება.",
          "ტექნიკური places სახელი შეგიძლია შეინარჩუნო; მომხმარებლისთვის ხილული ტექსტი სრულად შეცვალე."
        ],
        "checks": [
          {
            "label": "შესავალი რეცეპტებზეა",
            "selector": "h1",
            "contains": "რეცეპტ"
          },
          {
            "label": "ახალი მონაცემები ძებნადია",
            "expression": "document.querySelectorAll('.card').length===1 && document.querySelector('#places').textContent.includes('პასტა')",
            "action": {
              "selector": "#search",
              "event": "input",
              "value": "პასტა"
            }
          },
          {
            "label": "რჩეული ახალ სფეროშიც მუშაობს",
            "expression": "document.querySelector('#saved').textContent==='1'",
            "action": {
              "selector": ".save",
              "event": "click"
            }
          },
          {
            "label": "შერჩეულია ახალი აქცენტი",
            "expression": "getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()!=='#d8def9'"
          }
        ],
        "review": [
          "ძიების წარწერა, placeholder და აღწერები რეცეპტებს ეხება.",
          "შემიძლია ამ მონაცემთა მოდელით სხვა კოლექციაც შევქმნა."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">atlas↗</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#places\">მიმართულებები</a><span>რჩეული <b id=\"saved\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">პატარა მოგზაურობა · დიდი შთაბეჭდილება</p>\n    <h1>შენი შემდეგი ამბავი<br>აქ იწყება.</h1>\n    <p class=\"intro\">აღმოაჩინე მთები, ზღვები და ქალაქები. შეარჩიე ადგილი შენი ტემპით.</p>\n    <a class=\"button\" href=\"#places\">იპოვე მიმართულება ↗</a>\n  </section>\n<label for=\"search\">მოძებნე მიმართულება</label>\n<input id=\"search\" type=\"search\" placeholder=\"მაგალითად, ყაზბეგი\">\n<section id=\"places\" class=\"grid\" aria-label=\"მიმართულებები\"></section>\n<p id=\"empty\" role=\"status\" hidden>ვერაფერი მოიძებნა. სცადე სხვა სიტყვა.</p>\n</main>\n<footer>შექმნილია სწავლის პროცესში · atlas↗</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d8def9; --paper: #f2f4f8; --ink: #202c45; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: linear-gradient(135deg, transparent 55%, #d8def970); border-radius: 18px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#search { display: block; width: 100%; padding: 16px; margin: 10px 0 28px; border: 1px solid #aab6cf; border-radius: 12px; background: white; color: #202c45; }",
          "js": "const places = [\n  { title: 'ყაზბეგი', type: 'მთა', symbol: '△' },\n  { title: 'ბათუმი', type: 'ზღვა', symbol: '≈' },\n  { title: 'თბილისი', type: 'ქალაქი', symbol: '⌂' }\n];\nconst favorites = new Set();\nconst container = document.querySelector('#places');\nfunction render(items) {\n  container.replaceChildren();\n  document.querySelector(\"#empty\").hidden = items.length !== 0;\n  items.forEach(place => {\n    const card = document.createElement('article');\n    card.className = 'card';\n    const art = document.createElement('div');\n    art.className = 'art'; art.textContent = place.symbol;\n    const title = document.createElement('h2'); title.textContent = place.title;\n    const category = document.createElement('p'); category.textContent = place.type;\n    const button = document.createElement('button');\n    button.className = 'save';\n    button.textContent = favorites.has(place.title) ? 'შენახულია ✓' : 'რჩეულში დამატება';\n    button.setAttribute('aria-pressed', String(favorites.has(place.title)));\n    button.addEventListener('click', () => {\n      if (favorites.has(place.title)) favorites.delete(place.title);\n      else favorites.add(place.title);\n      button.setAttribute('aria-pressed', String(favorites.has(place.title)));\n      button.textContent = favorites.has(place.title) ? 'შენახულია ✓' : 'რჩეულში დამატება';\n      document.querySelector('#saved').textContent = favorites.size;\n    });\n    card.append(art, title, category, button);\n    container.append(card);\n  });\n}\nrender(places);\ndocument.querySelector('#search').addEventListener('input', event => {\n  const query = event.target.value.trim().toLowerCase();\n  render(places.filter(place => place.title.toLowerCase().includes(query)));\n});"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">atlas↗</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#places\">მიმართულებები</a><span>რჩეული <b id=\"saved\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">პატარა მოგზაურობა · დიდი შთაბეჭდილება</p>\n    <h1>რეცეპტები კარგი<br>დღის დასაწყებად.</h1>\n    <p class=\"intro\">აღმოაჩინე მთები, ზღვები და ქალაქები. შეარჩიე ადგილი შენი ტემპით.</p>\n    <a class=\"button\" href=\"#places\">იპოვე მიმართულება ↗</a>\n  </section>\n<label for=\"search\">მოძებნე მიმართულება</label>\n<input id=\"search\" type=\"search\" placeholder=\"მაგალითად, ყაზბეგი\">\n<section id=\"places\" class=\"grid\" aria-label=\"მიმართულებები\"></section>\n<p id=\"empty\" role=\"status\" hidden>ვერაფერი მოიძებნა. სცადე სხვა სიტყვა.</p>\n</main>\n<footer>შექმნილია სწავლის პროცესში · atlas↗</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d8def9; --paper: #f2f4f8; --ink: #202c45; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: linear-gradient(135deg, transparent 55%, #d8def970); border-radius: 18px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#search { display: block; width: 100%; padding: 16px; margin: 10px 0 28px; border: 1px solid #aab6cf; border-radius: 12px; background: white; color: #202c45; }\n:root { --accent: #f4d292; }",
          "js": "const places = [\n  { title: 'პასტა', type: 'მთა', symbol: '△' },\n  { title: 'სალათი', type: 'ზღვა', symbol: '≈' },\n  { title: 'სუპი', type: 'ქალაქი', symbol: '⌂' }\n];\nconst favorites = new Set();\nconst container = document.querySelector('#places');\nfunction render(items) {\n  container.replaceChildren();\n  document.querySelector(\"#empty\").hidden = items.length !== 0;\n  items.forEach(place => {\n    const card = document.createElement('article');\n    card.className = 'card';\n    const art = document.createElement('div');\n    art.className = 'art'; art.textContent = place.symbol;\n    const title = document.createElement('h2'); title.textContent = place.title;\n    const category = document.createElement('p'); category.textContent = place.type;\n    const button = document.createElement('button');\n    button.className = 'save';\n    button.textContent = favorites.has(place.title) ? 'შენახულია ✓' : 'რჩეულში დამატება';\n    button.setAttribute('aria-pressed', String(favorites.has(place.title)));\n    button.addEventListener('click', () => {\n      if (favorites.has(place.title)) favorites.delete(place.title);\n      else favorites.add(place.title);\n      button.setAttribute('aria-pressed', String(favorites.has(place.title)));\n      button.textContent = favorites.has(place.title) ? 'შენახულია ✓' : 'რჩეულში დამატება';\n      document.querySelector('#saved').textContent = favorites.size;\n    });\n    card.append(art, title, category, button);\n    container.append(card);\n  });\n}\nrender(places);\ndocument.querySelector('#search').addEventListener('input', event => {\n  const query = event.target.value.trim().toLowerCase();\n  render(places.filter(place => place.title.toLowerCase().includes(query)));\n});"
        },
        "transfer": true
      }
    ],
    "preview": {
      "html": "<header>\n  <a class=\"logo\" href=\"#\">atlas↗</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#places\">მიმართულებები</a><span>რჩეული <b id=\"saved\" aria-live=\"polite\">0</b></span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">პატარა მოგზაურობა · დიდი შთაბეჭდილება</p>\n    <h1>შენი შემდეგი ამბავი<br>აქ იწყება.</h1>\n    <p class=\"intro\">აღმოაჩინე მთები, ზღვები და ქალაქები. შეარჩიე ადგილი შენი ტემპით.</p>\n    <a class=\"button\" href=\"#places\">იპოვე მიმართულება ↗</a>\n  </section>\n<label for=\"search\">მოძებნე მიმართულება</label>\n<input id=\"search\" type=\"search\" placeholder=\"მაგალითად, ყაზბეგი\">\n<section id=\"places\" class=\"grid\" aria-label=\"მიმართულებები\"><article class=\"card\"><div class=\"art\">△</div><h2>ყაზბეგი</h2><p>მთა</p><button>რჩეულში დამატება</button></article><article class=\"card\"><div class=\"art\">≈</div><h2>ბათუმი</h2><p>ზღვა</p><button>რჩეულში დამატება</button></article><article class=\"card\"><div class=\"art\">⌂</div><h2>თბილისი</h2><p>ქალაქი</p><button>რჩეულში დამატება</button></article></section>\n<p id=\"empty\" role=\"status\" hidden>ვერაფერი მოიძებნა. სცადე სხვა სიტყვა.</p>\n</main>\n<footer>შექმნილია სწავლის პროცესში · atlas↗</footer>",
      "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #d8def9; --paper: #f2f4f8; --ink: #202c45; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { background: linear-gradient(135deg, transparent 55%, #d8def970); border-radius: 18px; } .logo { letter-spacing: -2px; }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n#search { display: block; width: 100%; padding: 16px; margin: 10px 0 28px; border: 1px solid #aab6cf; border-radius: 12px; background: white; color: #202c45; }",
      "js": "const places = [\n  { title: 'ყაზბეგი', type: 'მთა', symbol: '△' },\n  { title: 'ბათუმი', type: 'ზღვა', symbol: '≈' },\n  { title: 'თბილისი', type: 'ქალაქი', symbol: '⌂' }\n];\nconst favorites = new Set();\nconst container = document.querySelector('#places');\nfunction render(items) {\n  container.replaceChildren();\n  document.querySelector(\"#empty\").hidden = items.length !== 0;\n  items.forEach(place => {\n    const card = document.createElement('article');\n    card.className = 'card';\n    const art = document.createElement('div');\n    art.className = 'art'; art.textContent = place.symbol;\n    const title = document.createElement('h2'); title.textContent = place.title;\n    const category = document.createElement('p'); category.textContent = place.type;\n    const button = document.createElement('button');\n    button.className = 'save';\n    button.textContent = favorites.has(place.title) ? 'შენახულია ✓' : 'რჩეულში დამატება';\n    button.setAttribute('aria-pressed', String(favorites.has(place.title)));\n    button.addEventListener('click', () => {\n      if (favorites.has(place.title)) favorites.delete(place.title);\n      else favorites.add(place.title);\n      button.setAttribute('aria-pressed', String(favorites.has(place.title)));\n      button.textContent = favorites.has(place.title) ? 'შენახულია ✓' : 'რჩეულში დამატება';\n      document.querySelector('#saved').textContent = favorites.size;\n    });\n    card.append(art, title, category, button);\n    container.append(card);\n  });\n}\nrender(places);\ndocument.querySelector('#search').addEventListener('input', event => {\n  const query = event.target.value.trim().toLowerCase();\n  render(places.filter(place => place.title.toLowerCase().includes(query)));\n});"
    }
  },
  {
    "id": "tempo",
    "title": "Tempo — დავალებების აპი",
    "subtitle": "მეტი სიმშვიდე. ერთი ამოცანა ყოველ ჯერზე.",
    "kind": "ვებაპი",
    "level": 3,
    "minutes": 150,
    "skills": [
      "ფორმის მოვლენები",
      "მასივის მდგომარეობა",
      "ფილტრები",
      "localStorage"
    ],
    "lessons": [
      34,
      35,
      39,
      42,
      44
    ],
    "accent": "#f0d886",
    "paper": "#f7f4eb",
    "ink": "#332d22",
    "brief": "შექმენი ამოცანების პატარა აპი: დამატება, დასრულება, ფილტრაცია და უსაფრთხო შენახვა.",
    "audience": "ადამიანი, რომელსაც დღისთვის რამდენიმე ნათელი პრიორიტეტი სჭირდება.",
    "reuse": "ასე ააწყობ ჩანაწერების, ჩვევების, ხარჯების ან წასაკითხი წიგნების სიას.",
    "stages": [
      {
        "id": 1,
        "title": "პროდუქტის ინტერფეისი",
        "concept": "ფორმა და ვიზუალური პრიორიტეტები",
        "explanation": "აქ კითხვის ნაცვლად ადამიანი მოქმედებს. შეყვანის ველი მთავარი სამუშაოა და დეკორაციამ არ უნდა დაჩრდილოს. label, required და maxlength გასაგებ შეზღუდვებს ქმნის. ცარიელ სიას სტატუსი ახლავს, რომ პირველი ნაბიჯი ბუნებრივი იყოს.",
        "task": "ააწყე .hero, #app და #task-form. ფორმაში დაამატე label-იანი #task-input, required და maxlength=\"100\", submit ღილაკი. შედეგისთვის შექმენი ul#tasks და #message role=\"status\".",
        "snippet": "<form id=\"task-form\">\n  <label for=\"task-input\">ახალი დავალება</label>\n  <input id=\"task-input\" required maxlength=\"100\">\n  <button>დამატება +</button>\n</form>",
        "hints": [
          "სიაში დასაწყისში ელემენტები არ ჩაწერო — მონაცემებიდან შეიქმნება.",
          "ფორმასა და ცარიელ სიას საკუთარი იერარქია მიანიჭე; მოქმედება ადვილად საპოვნელი იყოს."
        ],
        "checks": [
          {
            "label": "ფორმა და შეყვანის ველია",
            "selector": "#task-form #task-input",
            "attribute": "required"
          },
          {
            "label": "სიაში შედეგის ადგილი მზადაა",
            "selector": "ul#tasks"
          },
          {
            "label": "სტატუსის ელემენტი არსებობს",
            "selector": "#message",
            "attribute": "role",
            "contains": "status"
          },
          {
            "label": "ველი აღწერილია",
            "selector": "label[for=\"task-input\"]"
          }
        ],
        "review": [
          "360px და ფართო ეკრანი შეადარე: ტექსტი სრულად იკითხება.",
          "Tab-ით გადადი მოქმედებებზე და დარწმუნდი, რომ ფოკუსი ჩანს."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">tempo.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#app\">ჩემი დღე</a><span id=\"remaining\" role=\"status\">0 დარჩენილი</span></nav>\n</header>\n<main>\n  <!-- შენი პირველი სექცია აქ დაამატე. -->\n</main>\n<footer>შექმნილია სწავლის პროცესში · tempo.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">tempo.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#app\">ჩემი დღე</a><span id=\"remaining\" role=\"status\">0 დარჩენილი</span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ნაკლები ხმაური · მეტი ფოკუსი</p>\n    <h1>გაათავისუფლე ადგილი<br>მნიშვნელოვანისთვის.</h1>\n    <p class=\"intro\">ერთი პატარა ნაბიჯი ახლა. დიდი პროგრესი დროთა განმავლობაში.</p>\n    <a class=\"button\" href=\"#app\">დაგეგმე შენი დღე ↗</a>\n  </section>\n<section id=\"app\"><h2>რის გაკეთებას აპირებ?</h2>\n<form id=\"task-form\"><label for=\"task-input\">ახალი დავალება</label><input id=\"task-input\" required maxlength=\"100\" placeholder=\"მაგალითად, პორტფოლიოს დასრულება\"><button type=\"submit\">დამატება +</button></form>\n<p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · tempo.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #f0d886; --paper: #f7f4eb; --ink: #332d22; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { max-width: 850px; } #app { background: #fffcf5; border: 1px solid #ded4bc; border-radius: 20px; padding: 28px; box-shadow: 0 12px 35px #5e491008; }\n\n#app { max-width: 720px; } form { display: grid; gap: 12px; } input { padding: 16px; border: 1px solid #b7ad91; border-radius: 10px; background: white; color: #332d22; width: 100%; } ul { padding: 0; list-style: none; } li { display: flex; align-items: center; gap: 12px; padding: 18px; border-bottom: 1px solid #d8cfb8; } li span { flex: 1; } li.done span { text-decoration: line-through; opacity: .6; }",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 2,
        "title": "შეიყვანე, შეინახე, დახატე",
        "concept": "მდგომარეობის ერთი წყარო",
        "explanation": "დავალებები tasks მასივშია. DOM მხოლოდ ჩვენებაა და არა მთავარი მონაცემი. submit იღებს ტექსტს, trim ცარიელ სივრცეს აშორებს, ახალი ობიექტი მასივში ემატება და render ჩვენებას განაახლებს. ასე ნებისმიერი მომდევნო ქცევა იმავე მდგომარეობას ეყრდნობა.",
        "task": "შექმენი tasks მასივი და render(). submit-ზე დაამატე {id,title,done:false}, გაასუფთავე ველი და განაახლე #remaining. მხოლოდ სივრცეებისგან შემდგარი ტექსტი არ დაამატო.",
        "snippet": "const title = input.value.trim();\nif (!title) return;\ntasks.push({ id: Date.now(), title, done: false });\nrender();",
        "hints": [
          "preventDefault ფორმის თავიდან ჩატვირთვას აჩერებს.",
          "render-ის დასაწყისში სია გაასუფთავე; ტექსტისთვის textContent გამოიყენე."
        ],
        "checks": [
          {
            "label": "ტესტის შეყვანა მზადაა",
            "expression": "document.querySelector('#task-input').value==='პირველი პროექტი'",
            "action": {
              "selector": "#task-input",
              "event": "input",
              "value": "პირველი პროექტი"
            }
          },
          {
            "label": "ფორმა ამატებს დავალებას",
            "expression": "document.querySelectorAll('#tasks li').length===1 && document.querySelector('#tasks').textContent.includes('პირველი პროექტი')",
            "action": {
              "selector": "#task-form",
              "event": "submit"
            }
          },
          {
            "label": "ველი გასუფთავდა და მრიცხველი განახლდა",
            "expression": "document.querySelector('#task-input').value==='' && document.querySelector('#remaining').textContent.includes('1')"
          },
          {
            "label": "ცარიელი ტექსტი არ ემატება",
            "expression": "document.querySelectorAll('#tasks li').length===1",
            "action": {
              "selector": "#task-form",
              "event": "submit"
            }
          }
        ],
        "review": [
          "დავაკვირდი, რომ DOM-ის ყოველი ნახატი ერთსა და იმავე მასივს მიჰყვება."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">tempo.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#app\">ჩემი დღე</a><span id=\"remaining\" role=\"status\">0 დარჩენილი</span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ნაკლები ხმაური · მეტი ფოკუსი</p>\n    <h1>გაათავისუფლე ადგილი<br>მნიშვნელოვანისთვის.</h1>\n    <p class=\"intro\">ერთი პატარა ნაბიჯი ახლა. დიდი პროგრესი დროთა განმავლობაში.</p>\n    <a class=\"button\" href=\"#app\">დაგეგმე შენი დღე ↗</a>\n  </section>\n<section id=\"app\"><h2>რის გაკეთებას აპირებ?</h2>\n<form id=\"task-form\"><label for=\"task-input\">ახალი დავალება</label><input id=\"task-input\" required maxlength=\"100\" placeholder=\"მაგალითად, პორტფოლიოს დასრულება\"><button type=\"submit\">დამატება +</button></form>\n<p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · tempo.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #f0d886; --paper: #f7f4eb; --ink: #332d22; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { max-width: 850px; } #app { background: #fffcf5; border: 1px solid #ded4bc; border-radius: 20px; padding: 28px; box-shadow: 0 12px 35px #5e491008; }\n\n#app { max-width: 720px; } form { display: grid; gap: 12px; } input { padding: 16px; border: 1px solid #b7ad91; border-radius: 10px; background: white; color: #332d22; width: 100%; } ul { padding: 0; list-style: none; } li { display: flex; align-items: center; gap: 12px; padding: 18px; border-bottom: 1px solid #d8cfb8; } li span { flex: 1; } li.done span { text-decoration: line-through; opacity: .6; }",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">tempo.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#app\">ჩემი დღე</a><span id=\"remaining\" role=\"status\">0 დარჩენილი</span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ნაკლები ხმაური · მეტი ფოკუსი</p>\n    <h1>გაათავისუფლე ადგილი<br>მნიშვნელოვანისთვის.</h1>\n    <p class=\"intro\">ერთი პატარა ნაბიჯი ახლა. დიდი პროგრესი დროთა განმავლობაში.</p>\n    <a class=\"button\" href=\"#app\">დაგეგმე შენი დღე ↗</a>\n  </section>\n<section id=\"app\"><h2>რის გაკეთებას აპირებ?</h2>\n<form id=\"task-form\"><label for=\"task-input\">ახალი დავალება</label><input id=\"task-input\" required maxlength=\"100\" placeholder=\"მაგალითად, პორტფოლიოს დასრულება\"><button type=\"submit\">დამატება +</button></form>\n<p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · tempo.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #f0d886; --paper: #f7f4eb; --ink: #332d22; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { max-width: 850px; } #app { background: #fffcf5; border: 1px solid #ded4bc; border-radius: 20px; padding: 28px; box-shadow: 0 12px 35px #5e491008; }\n\n#app { max-width: 720px; } form { display: grid; gap: 12px; } input { padding: 16px; border: 1px solid #b7ad91; border-radius: 10px; background: white; color: #332d22; width: 100%; } ul { padding: 0; list-style: none; } li { display: flex; align-items: center; gap: 12px; padding: 18px; border-bottom: 1px solid #d8cfb8; } li span { flex: 1; } li.done span { text-decoration: line-through; opacity: .6; }",
          "js": "let tasks = [];\nfunction render() {\n  const list = document.querySelector('#tasks'); list.replaceChildren();\n  tasks.forEach(task => {\n    const item = document.createElement('li');\n    const text = document.createElement('span'); text.textContent = task.title;\n    item.append(text); list.append(item);\n  });\n  document.querySelector('#remaining').textContent = tasks.filter(task => !task.done).length + ' დარჩენილი';\n}\ndocument.querySelector('#task-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const input = document.querySelector('#task-input');\n  const title = input.value.trim();\n  if (!title) { document.querySelector('#message').textContent = 'ჩაწერე დავალება.'; return; }\n  tasks.push({ id: Date.now() + Math.random(), title, done: false });\n  input.value = ''; document.querySelector('#message').textContent = 'დავალება დამატებულია.';\n  render();\n});\nrender();"
        },
        "transfer": false
      },
      {
        "id": 3,
        "title": "დასრულება და აღდგენა",
        "concept": "ლოგიკური მდგომარეობა",
        "explanation": "დასრულება ელემენტის გაქრობა არ არის: done მნიშვნელობა იცვლება. render ამ მონაცემის მიხედვით სტილსა და ღილაკის ტექსტს აახლებს. იგივე ღილაკით აღდგენა ინტერაქციას შექცევადს ხდის. მრიცხველი ყოველთვის მასივიდან ითვლება, რათა ერთმანეთთან აცდენილი მნიშვნელობები არ გაჩნდეს.",
        "task": "თითო დავალებას button.toggle-task დაუმატე. დაჭერამ done შეცვალოს, li-ს .done მისცეს და #remaining განაახლოს. ხელახლა დაჭერამ აღადგინოს.",
        "snippet": "task.done = !task.done;\nitem.classList.toggle(\"done\", task.done);",
        "hints": [
          "ღილაკის დამმუშავებელი task ობიექტზე წვდომით შექმენი render-ის შიგნით.",
          "დარჩენილი რაოდენობა tasks.filter(task => !task.done).length-ით გამოთვალე."
        ],
        "checks": [
          {
            "label": "დასამატებელი ტექსტი შეგვყავს",
            "expression": "true",
            "action": {
              "selector": "#task-input",
              "event": "input",
              "value": "დასასრულებელი საქმე"
            }
          },
          {
            "label": "ვქმნით ერთ დავალებას",
            "expression": "document.querySelectorAll('#tasks li').length===1",
            "action": {
              "selector": "#task-form",
              "event": "submit"
            }
          },
          {
            "label": "დასრულება მონაცემს და სტილს ცვლის",
            "expression": "document.querySelector('#tasks li').classList.contains('done') && document.querySelector('#remaining').textContent.includes('0')",
            "action": {
              "selector": ".toggle-task",
              "event": "click"
            }
          },
          {
            "label": "აღდგენა დავალებას აბრუნებს",
            "expression": "!document.querySelector('#tasks li').classList.contains('done') && document.querySelector('#remaining').textContent.includes('1')",
            "action": {
              "selector": ".toggle-task",
              "event": "click"
            }
          }
        ],
        "review": [
          "სტატუსი მხოლოდ ფერით არ გადმოიცემა."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">tempo.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#app\">ჩემი დღე</a><span id=\"remaining\" role=\"status\">0 დარჩენილი</span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ნაკლები ხმაური · მეტი ფოკუსი</p>\n    <h1>გაათავისუფლე ადგილი<br>მნიშვნელოვანისთვის.</h1>\n    <p class=\"intro\">ერთი პატარა ნაბიჯი ახლა. დიდი პროგრესი დროთა განმავლობაში.</p>\n    <a class=\"button\" href=\"#app\">დაგეგმე შენი დღე ↗</a>\n  </section>\n<section id=\"app\"><h2>რის გაკეთებას აპირებ?</h2>\n<form id=\"task-form\"><label for=\"task-input\">ახალი დავალება</label><input id=\"task-input\" required maxlength=\"100\" placeholder=\"მაგალითად, პორტფოლიოს დასრულება\"><button type=\"submit\">დამატება +</button></form>\n<p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · tempo.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #f0d886; --paper: #f7f4eb; --ink: #332d22; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { max-width: 850px; } #app { background: #fffcf5; border: 1px solid #ded4bc; border-radius: 20px; padding: 28px; box-shadow: 0 12px 35px #5e491008; }\n\n#app { max-width: 720px; } form { display: grid; gap: 12px; } input { padding: 16px; border: 1px solid #b7ad91; border-radius: 10px; background: white; color: #332d22; width: 100%; } ul { padding: 0; list-style: none; } li { display: flex; align-items: center; gap: 12px; padding: 18px; border-bottom: 1px solid #d8cfb8; } li span { flex: 1; } li.done span { text-decoration: line-through; opacity: .6; }",
          "js": "let tasks = [];\nfunction render() {\n  const list = document.querySelector('#tasks'); list.replaceChildren();\n  tasks.forEach(task => {\n    const item = document.createElement('li');\n    const text = document.createElement('span'); text.textContent = task.title;\n    item.append(text); list.append(item);\n  });\n  document.querySelector('#remaining').textContent = tasks.filter(task => !task.done).length + ' დარჩენილი';\n}\ndocument.querySelector('#task-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const input = document.querySelector('#task-input');\n  const title = input.value.trim();\n  if (!title) { document.querySelector('#message').textContent = 'ჩაწერე დავალება.'; return; }\n  tasks.push({ id: Date.now() + Math.random(), title, done: false });\n  input.value = ''; document.querySelector('#message').textContent = 'დავალება დამატებულია.';\n  render();\n});\nrender();"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">tempo.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#app\">ჩემი დღე</a><span id=\"remaining\" role=\"status\">0 დარჩენილი</span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ნაკლები ხმაური · მეტი ფოკუსი</p>\n    <h1>გაათავისუფლე ადგილი<br>მნიშვნელოვანისთვის.</h1>\n    <p class=\"intro\">ერთი პატარა ნაბიჯი ახლა. დიდი პროგრესი დროთა განმავლობაში.</p>\n    <a class=\"button\" href=\"#app\">დაგეგმე შენი დღე ↗</a>\n  </section>\n<section id=\"app\"><h2>რის გაკეთებას აპირებ?</h2>\n<form id=\"task-form\"><label for=\"task-input\">ახალი დავალება</label><input id=\"task-input\" required maxlength=\"100\" placeholder=\"მაგალითად, პორტფოლიოს დასრულება\"><button type=\"submit\">დამატება +</button></form>\n<p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · tempo.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #f0d886; --paper: #f7f4eb; --ink: #332d22; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { max-width: 850px; } #app { background: #fffcf5; border: 1px solid #ded4bc; border-radius: 20px; padding: 28px; box-shadow: 0 12px 35px #5e491008; }\n\n#app { max-width: 720px; } form { display: grid; gap: 12px; } input { padding: 16px; border: 1px solid #b7ad91; border-radius: 10px; background: white; color: #332d22; width: 100%; } ul { padding: 0; list-style: none; } li { display: flex; align-items: center; gap: 12px; padding: 18px; border-bottom: 1px solid #d8cfb8; } li span { flex: 1; } li.done span { text-decoration: line-through; opacity: .6; }",
          "js": "let tasks = [];\nfunction render() {\n  const list = document.querySelector('#tasks'); list.replaceChildren();\n  tasks.forEach(task => {\n    const item = document.createElement('li');\n    const text = document.createElement('span'); text.textContent = task.title;\n    item.classList.toggle('done', task.done);\n    const toggle = document.createElement('button'); toggle.className = 'toggle-task';\n    toggle.textContent = task.done ? 'აღდგენა' : 'დასრულება';\n    toggle.setAttribute('aria-pressed', String(task.done));\n    toggle.addEventListener('click', () => { task.done = !task.done; render(); });\n    item.append(text, toggle); list.append(item);\n  });\n  document.querySelector('#remaining').textContent = tasks.filter(task => !task.done).length + ' დარჩენილი';\n}\ndocument.querySelector('#task-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const input = document.querySelector('#task-input');\n  const title = input.value.trim();\n  if (!title) { document.querySelector('#message').textContent = 'ჩაწერე დავალება.'; return; }\n  tasks.push({ id: Date.now() + Math.random(), title, done: false });\n  input.value = ''; document.querySelector('#message').textContent = 'დავალება დამატებულია.';\n  render();\n});\nrender();"
        },
        "transfer": false
      },
      {
        "id": 4,
        "title": "ერთი მდგომარეობა, სამი ხედი",
        "concept": "გამოთვლილი მონაცემები",
        "explanation": "ფილტრი ცალკე view ცვლადია. tasks მასივი უცვლელია; render მხოლოდ შესაბამის ჩანაწერებს ხატავს. ეს საშუალებას გაძლევს დასრულებული ელემენტი სხვა ხედიდანაც დაიბრუნო. აპებში ძირითადი და გამოთვლილი მონაცემების განცალკევება არათანმიმდევრულ ქცევას ამცირებს.",
        "task": "დაამატე data-view ღილაკები all, active, done. არჩეული ხედით გაფილტრე მხოლოდ ჩვენება. აქტიურ ღილაკს aria-pressed მიეცი.",
        "snippet": "const visible = tasks.filter(task => view === \"all\" || (view === \"done\" ? task.done : !task.done));",
        "hints": [
          "მასივიდან ელემენტები არ წაშალო: ფილტრი უნდა იყოს შექცევადი.",
          "გაარჩიე view — ფილტრი და task.done — კონკრეტული დავალების მდგომარეობა."
        ],
        "checks": [
          {
            "label": "დასამატებელი ტექსტი შეგვყავს",
            "expression": "true",
            "action": {
              "selector": "#task-input",
              "event": "input",
              "value": "დასასრულებელი საქმე"
            }
          },
          {
            "label": "ვქმნით ერთ დავალებას",
            "expression": "document.querySelectorAll('#tasks li').length===1",
            "action": {
              "selector": "#task-form",
              "event": "submit"
            }
          },
          {
            "label": "დასრულებულ ხედში აქტიური დავალება არ ჩანს",
            "expression": "document.querySelectorAll('#tasks li').length===0",
            "action": {
              "selector": "[data-view=done]",
              "event": "click"
            }
          },
          {
            "label": "ყველაზე დაბრუნება ჩანაწერს აღადგენს",
            "expression": "document.querySelectorAll('#tasks li').length===1",
            "action": {
              "selector": "[data-view=all]",
              "event": "click"
            }
          },
          {
            "label": "დასრულებისას სტატუსი იცვლება",
            "expression": "document.querySelector('#remaining').textContent.includes('0')",
            "action": {
              "selector": ".toggle-task",
              "event": "click"
            }
          },
          {
            "label": "აქტიურ ხედში დასრულებული არ ჩანს",
            "expression": "document.querySelectorAll('#tasks li').length===0",
            "action": {
              "selector": "[data-view=active]",
              "event": "click"
            }
          }
        ],
        "review": [
          "ნებისმიერი ფილტრიდან სხვა ხედზე გადასვლით მონაცემი არ იკარგება."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">tempo.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#app\">ჩემი დღე</a><span id=\"remaining\" role=\"status\">0 დარჩენილი</span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ნაკლები ხმაური · მეტი ფოკუსი</p>\n    <h1>გაათავისუფლე ადგილი<br>მნიშვნელოვანისთვის.</h1>\n    <p class=\"intro\">ერთი პატარა ნაბიჯი ახლა. დიდი პროგრესი დროთა განმავლობაში.</p>\n    <a class=\"button\" href=\"#app\">დაგეგმე შენი დღე ↗</a>\n  </section>\n<section id=\"app\"><h2>რის გაკეთებას აპირებ?</h2>\n<form id=\"task-form\"><label for=\"task-input\">ახალი დავალება</label><input id=\"task-input\" required maxlength=\"100\" placeholder=\"მაგალითად, პორტფოლიოს დასრულება\"><button type=\"submit\">დამატება +</button></form>\n<p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · tempo.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #f0d886; --paper: #f7f4eb; --ink: #332d22; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { max-width: 850px; } #app { background: #fffcf5; border: 1px solid #ded4bc; border-radius: 20px; padding: 28px; box-shadow: 0 12px 35px #5e491008; }\n\n#app { max-width: 720px; } form { display: grid; gap: 12px; } input { padding: 16px; border: 1px solid #b7ad91; border-radius: 10px; background: white; color: #332d22; width: 100%; } ul { padding: 0; list-style: none; } li { display: flex; align-items: center; gap: 12px; padding: 18px; border-bottom: 1px solid #d8cfb8; } li span { flex: 1; } li.done span { text-decoration: line-through; opacity: .6; }",
          "js": "let tasks = [];\nfunction render() {\n  const list = document.querySelector('#tasks'); list.replaceChildren();\n  tasks.forEach(task => {\n    const item = document.createElement('li');\n    const text = document.createElement('span'); text.textContent = task.title;\n    item.classList.toggle('done', task.done);\n    const toggle = document.createElement('button'); toggle.className = 'toggle-task';\n    toggle.textContent = task.done ? 'აღდგენა' : 'დასრულება';\n    toggle.setAttribute('aria-pressed', String(task.done));\n    toggle.addEventListener('click', () => { task.done = !task.done; render(); });\n    item.append(text, toggle); list.append(item);\n  });\n  document.querySelector('#remaining').textContent = tasks.filter(task => !task.done).length + ' დარჩენილი';\n}\ndocument.querySelector('#task-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const input = document.querySelector('#task-input');\n  const title = input.value.trim();\n  if (!title) { document.querySelector('#message').textContent = 'ჩაწერე დავალება.'; return; }\n  tasks.push({ id: Date.now() + Math.random(), title, done: false });\n  input.value = ''; document.querySelector('#message').textContent = 'დავალება დამატებულია.';\n  render();\n});\nrender();"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">tempo.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#app\">ჩემი დღე</a><span id=\"remaining\" role=\"status\">0 დარჩენილი</span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ნაკლები ხმაური · მეტი ფოკუსი</p>\n    <h1>გაათავისუფლე ადგილი<br>მნიშვნელოვანისთვის.</h1>\n    <p class=\"intro\">ერთი პატარა ნაბიჯი ახლა. დიდი პროგრესი დროთა განმავლობაში.</p>\n    <a class=\"button\" href=\"#app\">დაგეგმე შენი დღე ↗</a>\n  </section>\n<section id=\"app\"><h2>რის გაკეთებას აპირებ?</h2>\n<form id=\"task-form\"><label for=\"task-input\">ახალი დავალება</label><input id=\"task-input\" required maxlength=\"100\" placeholder=\"მაგალითად, პორტფოლიოს დასრულება\"><button type=\"submit\">დამატება +</button></form>\n<p id=\"message\" role=\"status\"></p><div class=\"filters\"><button data-view=\"all\">ყველა</button><button data-view=\"active\">აქტიური</button><button data-view=\"done\">დასრულებული</button></div><ul id=\"tasks\"></ul></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · tempo.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #f0d886; --paper: #f7f4eb; --ink: #332d22; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { max-width: 850px; } #app { background: #fffcf5; border: 1px solid #ded4bc; border-radius: 20px; padding: 28px; box-shadow: 0 12px 35px #5e491008; }\n\n#app { max-width: 720px; } form { display: grid; gap: 12px; } input { padding: 16px; border: 1px solid #b7ad91; border-radius: 10px; background: white; color: #332d22; width: 100%; } ul { padding: 0; list-style: none; } li { display: flex; align-items: center; gap: 12px; padding: 18px; border-bottom: 1px solid #d8cfb8; } li span { flex: 1; } li.done span { text-decoration: line-through; opacity: .6; }\n.filters { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 24px; } [aria-pressed=\"true\"] { outline: 2px solid currentColor; outline-offset: 2px; }",
          "js": "let tasks = [];\nlet view = \"all\";\nfunction render() {\n  const list = document.querySelector('#tasks'); list.replaceChildren();\n  tasks.filter(task => view === \"all\" || (view === \"done\" ? task.done : !task.done)).forEach(task => {\n    const item = document.createElement('li');\n    const text = document.createElement('span'); text.textContent = task.title;\n    item.classList.toggle('done', task.done);\n    const toggle = document.createElement('button'); toggle.className = 'toggle-task';\n    toggle.textContent = task.done ? 'აღდგენა' : 'დასრულება';\n    toggle.setAttribute('aria-pressed', String(task.done));\n    toggle.addEventListener('click', () => { task.done = !task.done; render(); });\n    item.append(text, toggle); list.append(item);\n  });\n  document.querySelector('#remaining').textContent = tasks.filter(task => !task.done).length + ' დარჩენილი';\n}\ndocument.querySelector('#task-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const input = document.querySelector('#task-input');\n  const title = input.value.trim();\n  if (!title) { document.querySelector('#message').textContent = 'ჩაწერე დავალება.'; return; }\n  tasks.push({ id: Date.now() + Math.random(), title, done: false });\n  input.value = ''; document.querySelector('#message').textContent = 'დავალება დამატებულია.';\n  render();\n});\nrender();\ndocument.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {\n  view = button.dataset.view;\n  document.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));\n  render();\n}));"
        },
        "transfer": false
      },
      {
        "id": 5,
        "title": "შენახვა და არასწორი მონაცემები",
        "concept": "localStorage და დაცული წაკითხვა",
        "explanation": "საცავი შეიძლება მიუწვდომელი ან დაზიანებული იყოს. JSON.parse try/catch-ში მოათავსე და მიღებული ფორმა გადაამოწმე. მხოლოდ მასივის მიღება საკმარისი არ არის: ყოველი ელემენტი უნდა შეიცავდეს სწორ ტიპებს. გადახედვის იზოლირებული საცავი დროებითია; მუდმივი შენახვა ჩამოტვირთულ საიტში გამოსცადე.",
        "task": "წაიკითხე tempo-tasks, გადაამოწმე მასივი და title/done/id ტიპები. render-ისას JSON.stringify(tasks) შეინახე try/catch-ში. არასწორი JSON აპს არ უნდა აჩერებდეს.",
        "snippet": "try {\n  const saved = JSON.parse(localStorage.getItem(\"tempo-tasks\") || \"[]\");\n  if (Array.isArray(saved)) { /* შეამოწმე თითოეული ელემენტი */ }\n} catch { tasks = []; }",
        "hints": [
          "წაკითხვა render-ის გამოძახებამდე უნდა მოხდეს.",
          "გადახედვის საცავი ყოველი გაშვებისას თავიდან იწყება. განახლების შემდეგ შენარჩუნება ZIP-იდან გახსნილ საიტზე გამოსცადე."
        ],
        "checks": [
          {
            "label": "დასამატებელი ტექსტი შეგვყავს",
            "expression": "true",
            "action": {
              "selector": "#task-input",
              "event": "input",
              "value": "დასასრულებელი საქმე"
            }
          },
          {
            "label": "ვქმნით ერთ დავალებას",
            "expression": "document.querySelectorAll('#tasks li').length===1",
            "action": {
              "selector": "#task-form",
              "event": "submit"
            }
          },
          {
            "label": "მონაცემი JSON-ად ინახება",
            "expression": "(() => { const v=JSON.parse(localStorage.getItem('tempo-tasks')); return Array.isArray(v) && v.some(t=>t.title==='დასასრულებელი საქმე' && t.done===false); })()"
          },
          {
            "label": "დასრულებაც ინახება",
            "expression": "JSON.parse(localStorage.getItem('tempo-tasks')).some(t=>t.title==='დასასრულებელი საქმე' && t.done===true)",
            "action": {
              "selector": ".toggle-task",
              "event": "click"
            }
          }
        ],
        "review": [
          "ჩამოტვირთულ გვერდზე დავამატებ საქმეს და განახლებით შევამოწმებ შენარჩუნებას.",
          "ვიცი, რატომ სჭირდება წაკითხვას try/catch და ტიპების შემოწმება."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">tempo.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#app\">ჩემი დღე</a><span id=\"remaining\" role=\"status\">0 დარჩენილი</span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ნაკლები ხმაური · მეტი ფოკუსი</p>\n    <h1>გაათავისუფლე ადგილი<br>მნიშვნელოვანისთვის.</h1>\n    <p class=\"intro\">ერთი პატარა ნაბიჯი ახლა. დიდი პროგრესი დროთა განმავლობაში.</p>\n    <a class=\"button\" href=\"#app\">დაგეგმე შენი დღე ↗</a>\n  </section>\n<section id=\"app\"><h2>რის გაკეთებას აპირებ?</h2>\n<form id=\"task-form\"><label for=\"task-input\">ახალი დავალება</label><input id=\"task-input\" required maxlength=\"100\" placeholder=\"მაგალითად, პორტფოლიოს დასრულება\"><button type=\"submit\">დამატება +</button></form>\n<p id=\"message\" role=\"status\"></p><div class=\"filters\"><button data-view=\"all\">ყველა</button><button data-view=\"active\">აქტიური</button><button data-view=\"done\">დასრულებული</button></div><ul id=\"tasks\"></ul></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · tempo.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #f0d886; --paper: #f7f4eb; --ink: #332d22; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { max-width: 850px; } #app { background: #fffcf5; border: 1px solid #ded4bc; border-radius: 20px; padding: 28px; box-shadow: 0 12px 35px #5e491008; }\n\n#app { max-width: 720px; } form { display: grid; gap: 12px; } input { padding: 16px; border: 1px solid #b7ad91; border-radius: 10px; background: white; color: #332d22; width: 100%; } ul { padding: 0; list-style: none; } li { display: flex; align-items: center; gap: 12px; padding: 18px; border-bottom: 1px solid #d8cfb8; } li span { flex: 1; } li.done span { text-decoration: line-through; opacity: .6; }\n.filters { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 24px; } [aria-pressed=\"true\"] { outline: 2px solid currentColor; outline-offset: 2px; }",
          "js": "let tasks = [];\nlet view = \"all\";\nfunction render() {\n  const list = document.querySelector('#tasks'); list.replaceChildren();\n  tasks.filter(task => view === \"all\" || (view === \"done\" ? task.done : !task.done)).forEach(task => {\n    const item = document.createElement('li');\n    const text = document.createElement('span'); text.textContent = task.title;\n    item.classList.toggle('done', task.done);\n    const toggle = document.createElement('button'); toggle.className = 'toggle-task';\n    toggle.textContent = task.done ? 'აღდგენა' : 'დასრულება';\n    toggle.setAttribute('aria-pressed', String(task.done));\n    toggle.addEventListener('click', () => { task.done = !task.done; render(); });\n    item.append(text, toggle); list.append(item);\n  });\n  document.querySelector('#remaining').textContent = tasks.filter(task => !task.done).length + ' დარჩენილი';\n}\ndocument.querySelector('#task-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const input = document.querySelector('#task-input');\n  const title = input.value.trim();\n  if (!title) { document.querySelector('#message').textContent = 'ჩაწერე დავალება.'; return; }\n  tasks.push({ id: Date.now() + Math.random(), title, done: false });\n  input.value = ''; document.querySelector('#message').textContent = 'დავალება დამატებულია.';\n  render();\n});\nrender();\ndocument.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {\n  view = button.dataset.view;\n  document.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));\n  render();\n}));"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">tempo.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#app\">ჩემი დღე</a><span id=\"remaining\" role=\"status\">0 დარჩენილი</span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ნაკლები ხმაური · მეტი ფოკუსი</p>\n    <h1>გაათავისუფლე ადგილი<br>მნიშვნელოვანისთვის.</h1>\n    <p class=\"intro\">ერთი პატარა ნაბიჯი ახლა. დიდი პროგრესი დროთა განმავლობაში.</p>\n    <a class=\"button\" href=\"#app\">დაგეგმე შენი დღე ↗</a>\n  </section>\n<section id=\"app\"><h2>რის გაკეთებას აპირებ?</h2>\n<form id=\"task-form\"><label for=\"task-input\">ახალი დავალება</label><input id=\"task-input\" required maxlength=\"100\" placeholder=\"მაგალითად, პორტფოლიოს დასრულება\"><button type=\"submit\">დამატება +</button></form>\n<p id=\"message\" role=\"status\"></p><div class=\"filters\"><button data-view=\"all\">ყველა</button><button data-view=\"active\">აქტიური</button><button data-view=\"done\">დასრულებული</button></div><ul id=\"tasks\"></ul></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · tempo.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #f0d886; --paper: #f7f4eb; --ink: #332d22; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { max-width: 850px; } #app { background: #fffcf5; border: 1px solid #ded4bc; border-radius: 20px; padding: 28px; box-shadow: 0 12px 35px #5e491008; }\n\n#app { max-width: 720px; } form { display: grid; gap: 12px; } input { padding: 16px; border: 1px solid #b7ad91; border-radius: 10px; background: white; color: #332d22; width: 100%; } ul { padding: 0; list-style: none; } li { display: flex; align-items: center; gap: 12px; padding: 18px; border-bottom: 1px solid #d8cfb8; } li span { flex: 1; } li.done span { text-decoration: line-through; opacity: .6; }\n.filters { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 24px; } [aria-pressed=\"true\"] { outline: 2px solid currentColor; outline-offset: 2px; }",
          "js": "let tasks = [];\ntry {\n  const saved = JSON.parse(localStorage.getItem('tempo-tasks') || '[]');\n  if (Array.isArray(saved)) tasks = saved.filter(task => task && typeof task.title === 'string' && typeof task.done === 'boolean' && typeof task.id === 'number');\n} catch { tasks = []; }\nlet view = \"all\";\nfunction render() {\n  try { localStorage.setItem('tempo-tasks', JSON.stringify(tasks)); }\n  catch { document.querySelector('#message').textContent = 'შენახვა მიუწვდომელია; ჩამოტვირთე კოდი და შეამოწმე ჩვეულებრივ ბრაუზერში.'; }\n  const list = document.querySelector('#tasks'); list.replaceChildren();\n  tasks.filter(task => view === \"all\" || (view === \"done\" ? task.done : !task.done)).forEach(task => {\n    const item = document.createElement('li');\n    const text = document.createElement('span'); text.textContent = task.title;\n    item.classList.toggle('done', task.done);\n    const toggle = document.createElement('button'); toggle.className = 'toggle-task';\n    toggle.textContent = task.done ? 'აღდგენა' : 'დასრულება';\n    toggle.setAttribute('aria-pressed', String(task.done));\n    toggle.addEventListener('click', () => { task.done = !task.done; render(); });\n    item.append(text, toggle); list.append(item);\n  });\n  document.querySelector('#remaining').textContent = tasks.filter(task => !task.done).length + ' დარჩენილი';\n}\ndocument.querySelector('#task-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const input = document.querySelector('#task-input');\n  const title = input.value.trim();\n  if (!title) { document.querySelector('#message').textContent = 'ჩაწერე დავალება.'; return; }\n  tasks.push({ id: Date.now() + Math.random(), title, done: false });\n  input.value = ''; document.querySelector('#message').textContent = 'დავალება დამატებულია.';\n  render();\n});\nrender();\ndocument.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {\n  view = button.dataset.view;\n  document.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));\n  render();\n}));"
        },
        "transfer": false
      },
      {
        "id": 6,
        "title": "ჩვევების პატარა ტრეკერი",
        "concept": "ქცევის ახალ პროდუქტში გამოყენება",
        "explanation": "დავალებებისა და ჩვევების საფუძველი ერთნაირია: ჩანაწერი, მდგომარეობა და ჩვენება. ბრიფი შეცვალე და დაამატე წაშლის დამოუკიდებელი ქცევა. ეს ნაბიჯი სპეციალურად არ გაძლევს დასრულებულ ფუნქციას: უკვე იცი მონაცემების შეცვლა და render-ის გამოძახება.",
        "task": "გადააკეთე გვერდი ჩვევების ტრეკერად: h1-ში ახსენე „ჩვევ“. თითო ჩანაწერს button.delete-task დაუმატე, რომელიც id-ის მიხედვით წაშლის და render-ს გამოიძახებს. შეინარჩუნე შენახვა და ფილტრები.",
        "snippet": "tasks = tasks.filter(item => item.id !== task.id);\nrender();",
        "hints": [
          "წაშლის ღილაკი თითოეული task-ისთვის render-ის შიგნით შექმენი.",
          "გახსოვდეს, id ერთ ჩანაწერს ასახელებს. ტექსტით წაშლა ერთნაირ სახელებსაც გააქრობდა."
        ],
        "checks": [
          {
            "label": "გვერდი ახალ პროდუქტს აღწერს",
            "selector": "h1",
            "contains": "ჩვევ"
          },
          {
            "label": "დასამატებელი ტექსტი შეგვყავს",
            "expression": "true",
            "action": {
              "selector": "#task-input",
              "event": "input",
              "value": "დასასრულებელი საქმე"
            }
          },
          {
            "label": "ვქმნით ერთ დავალებას",
            "expression": "document.querySelectorAll('#tasks li').length===1",
            "action": {
              "selector": "#task-form",
              "event": "submit"
            }
          },
          {
            "label": "ჩანაწერს წაშლის ღილაკი აქვს",
            "selector": ".delete-task"
          },
          {
            "label": "წაშლა ჩანაწერს და საცავს აახლებს",
            "expression": "document.querySelectorAll('#tasks li').length===0 && JSON.parse(localStorage.getItem('tempo-tasks')).length===0",
            "action": {
              "selector": ".delete-task",
              "event": "click"
            }
          }
        ],
        "review": [
          "წაშლისა და დასრულების მოქმედებები ვიზუალურად განსხვავდება.",
          "შევძლებ იმავე სტრუქტურით წასაკითხი წიგნების სიის შექმნას."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">tempo.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#app\">ჩემი დღე</a><span id=\"remaining\" role=\"status\">0 დარჩენილი</span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ნაკლები ხმაური · მეტი ფოკუსი</p>\n    <h1>გაათავისუფლე ადგილი<br>მნიშვნელოვანისთვის.</h1>\n    <p class=\"intro\">ერთი პატარა ნაბიჯი ახლა. დიდი პროგრესი დროთა განმავლობაში.</p>\n    <a class=\"button\" href=\"#app\">დაგეგმე შენი დღე ↗</a>\n  </section>\n<section id=\"app\"><h2>რის გაკეთებას აპირებ?</h2>\n<form id=\"task-form\"><label for=\"task-input\">ახალი დავალება</label><input id=\"task-input\" required maxlength=\"100\" placeholder=\"მაგალითად, პორტფოლიოს დასრულება\"><button type=\"submit\">დამატება +</button></form>\n<p id=\"message\" role=\"status\"></p><div class=\"filters\"><button data-view=\"all\">ყველა</button><button data-view=\"active\">აქტიური</button><button data-view=\"done\">დასრულებული</button></div><ul id=\"tasks\"></ul></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · tempo.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #f0d886; --paper: #f7f4eb; --ink: #332d22; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { max-width: 850px; } #app { background: #fffcf5; border: 1px solid #ded4bc; border-radius: 20px; padding: 28px; box-shadow: 0 12px 35px #5e491008; }\n\n#app { max-width: 720px; } form { display: grid; gap: 12px; } input { padding: 16px; border: 1px solid #b7ad91; border-radius: 10px; background: white; color: #332d22; width: 100%; } ul { padding: 0; list-style: none; } li { display: flex; align-items: center; gap: 12px; padding: 18px; border-bottom: 1px solid #d8cfb8; } li span { flex: 1; } li.done span { text-decoration: line-through; opacity: .6; }\n.filters { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 24px; } [aria-pressed=\"true\"] { outline: 2px solid currentColor; outline-offset: 2px; }",
          "js": "let tasks = [];\ntry {\n  const saved = JSON.parse(localStorage.getItem('tempo-tasks') || '[]');\n  if (Array.isArray(saved)) tasks = saved.filter(task => task && typeof task.title === 'string' && typeof task.done === 'boolean' && typeof task.id === 'number');\n} catch { tasks = []; }\nlet view = \"all\";\nfunction render() {\n  try { localStorage.setItem('tempo-tasks', JSON.stringify(tasks)); }\n  catch { document.querySelector('#message').textContent = 'შენახვა მიუწვდომელია; ჩამოტვირთე კოდი და შეამოწმე ჩვეულებრივ ბრაუზერში.'; }\n  const list = document.querySelector('#tasks'); list.replaceChildren();\n  tasks.filter(task => view === \"all\" || (view === \"done\" ? task.done : !task.done)).forEach(task => {\n    const item = document.createElement('li');\n    const text = document.createElement('span'); text.textContent = task.title;\n    item.classList.toggle('done', task.done);\n    const toggle = document.createElement('button'); toggle.className = 'toggle-task';\n    toggle.textContent = task.done ? 'აღდგენა' : 'დასრულება';\n    toggle.setAttribute('aria-pressed', String(task.done));\n    toggle.addEventListener('click', () => { task.done = !task.done; render(); });\n    item.append(text, toggle); list.append(item);\n  });\n  document.querySelector('#remaining').textContent = tasks.filter(task => !task.done).length + ' დარჩენილი';\n}\ndocument.querySelector('#task-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const input = document.querySelector('#task-input');\n  const title = input.value.trim();\n  if (!title) { document.querySelector('#message').textContent = 'ჩაწერე დავალება.'; return; }\n  tasks.push({ id: Date.now() + Math.random(), title, done: false });\n  input.value = ''; document.querySelector('#message').textContent = 'დავალება დამატებულია.';\n  render();\n});\nrender();\ndocument.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {\n  view = button.dataset.view;\n  document.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));\n  render();\n}));"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">tempo.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#app\">ჩემი დღე</a><span id=\"remaining\" role=\"status\">0 დარჩენილი</span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ნაკლები ხმაური · მეტი ფოკუსი</p>\n    <h1>შენი ჩვევები.<br>შენი უკეთესი დღე.</h1>\n    <p class=\"intro\">ერთი პატარა ნაბიჯი ახლა. დიდი პროგრესი დროთა განმავლობაში.</p>\n    <a class=\"button\" href=\"#app\">დაგეგმე შენი დღე ↗</a>\n  </section>\n<section id=\"app\"><h2>რის გაკეთებას აპირებ?</h2>\n<form id=\"task-form\"><label for=\"task-input\">ახალი დავალება</label><input id=\"task-input\" required maxlength=\"100\" placeholder=\"მაგალითად, პორტფოლიოს დასრულება\"><button type=\"submit\">დამატება +</button></form>\n<p id=\"message\" role=\"status\"></p><div class=\"filters\"><button data-view=\"all\">ყველა</button><button data-view=\"active\">აქტიური</button><button data-view=\"done\">დასრულებული</button></div><ul id=\"tasks\"></ul></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · tempo.</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #f0d886; --paper: #f7f4eb; --ink: #332d22; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { max-width: 850px; } #app { background: #fffcf5; border: 1px solid #ded4bc; border-radius: 20px; padding: 28px; box-shadow: 0 12px 35px #5e491008; }\n\n#app { max-width: 720px; } form { display: grid; gap: 12px; } input { padding: 16px; border: 1px solid #b7ad91; border-radius: 10px; background: white; color: #332d22; width: 100%; } ul { padding: 0; list-style: none; } li { display: flex; align-items: center; gap: 12px; padding: 18px; border-bottom: 1px solid #d8cfb8; } li span { flex: 1; } li.done span { text-decoration: line-through; opacity: .6; }\n.filters { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 24px; } [aria-pressed=\"true\"] { outline: 2px solid currentColor; outline-offset: 2px; }",
          "js": "let tasks = [];\ntry {\n  const saved = JSON.parse(localStorage.getItem('tempo-tasks') || '[]');\n  if (Array.isArray(saved)) tasks = saved.filter(task => task && typeof task.title === 'string' && typeof task.done === 'boolean' && typeof task.id === 'number');\n} catch { tasks = []; }\nlet view = \"all\";\nfunction render() {\n  try { localStorage.setItem('tempo-tasks', JSON.stringify(tasks)); }\n  catch { document.querySelector('#message').textContent = 'შენახვა მიუწვდომელია; ჩამოტვირთე კოდი და შეამოწმე ჩვეულებრივ ბრაუზერში.'; }\n  const list = document.querySelector('#tasks'); list.replaceChildren();\n  tasks.filter(task => view === \"all\" || (view === \"done\" ? task.done : !task.done)).forEach(task => {\n    const item = document.createElement('li');\n    const text = document.createElement('span'); text.textContent = task.title;\n    item.classList.toggle('done', task.done);\n    const toggle = document.createElement('button'); toggle.className = 'toggle-task';\n    toggle.textContent = task.done ? 'აღდგენა' : 'დასრულება';\n    toggle.setAttribute('aria-pressed', String(task.done));\n    toggle.addEventListener('click', () => { task.done = !task.done; render(); });\n    const remove = document.createElement('button'); remove.className = 'delete-task'; remove.textContent = 'წაშლა';\n    remove.addEventListener('click', () => { tasks = tasks.filter(item => item.id !== task.id); render(); });\n    item.append(text, toggle, remove); list.append(item);\n  });\n  document.querySelector('#remaining').textContent = tasks.filter(task => !task.done).length + ' დარჩენილი';\n}\ndocument.querySelector('#task-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const input = document.querySelector('#task-input');\n  const title = input.value.trim();\n  if (!title) { document.querySelector('#message').textContent = 'ჩაწერე დავალება.'; return; }\n  tasks.push({ id: Date.now() + Math.random(), title, done: false });\n  input.value = ''; document.querySelector('#message').textContent = 'დავალება დამატებულია.';\n  render();\n});\nrender();\ndocument.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {\n  view = button.dataset.view;\n  document.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));\n  render();\n}));"
        },
        "transfer": true
      }
    ],
    "preview": {
      "html": "<header>\n  <a class=\"logo\" href=\"#\">tempo.</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#app\">ჩემი დღე</a><span id=\"remaining\" role=\"status\">2 დარჩენილი</span></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">ნაკლები ხმაური · მეტი ფოკუსი</p>\n    <h1>გაათავისუფლე ადგილი<br>მნიშვნელოვანისთვის.</h1>\n    <p class=\"intro\">ერთი პატარა ნაბიჯი ახლა. დიდი პროგრესი დროთა განმავლობაში.</p>\n    <a class=\"button\" href=\"#app\">დაგეგმე შენი დღე ↗</a>\n  </section>\n<section id=\"app\"><h2>რის გაკეთებას აპირებ?</h2>\n<form id=\"task-form\"><label for=\"task-input\">ახალი დავალება</label><input id=\"task-input\" required maxlength=\"100\" placeholder=\"მაგალითად, პორტფოლიოს დასრულება\"><button type=\"submit\">დამატება +</button></form>\n<p id=\"message\" role=\"status\"></p><div class=\"filters\"><button data-view=\"all\">ყველა</button><button data-view=\"active\">აქტიური</button><button data-view=\"done\">დასრულებული</button></div><ul id=\"tasks\"><li class=\"done\"><span>მოიფიქრე პირველი იდეა</span><button>აღდგენა</button></li><li><span>ააწყე პორტფოლიოს მთავარი გვერდი</span><button>დასრულება</button></li><li><span>გამოსცადე მობილურ ეკრანზე</span><button>დასრულება</button></li></ul></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · tempo.</footer>",
      "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #f0d886; --paper: #f7f4eb; --ink: #332d22; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { max-width: 850px; } #app { background: #fffcf5; border: 1px solid #ded4bc; border-radius: 20px; padding: 28px; box-shadow: 0 12px 35px #5e491008; }\n\n#app { max-width: 720px; } form { display: grid; gap: 12px; } input { padding: 16px; border: 1px solid #b7ad91; border-radius: 10px; background: white; color: #332d22; width: 100%; } ul { padding: 0; list-style: none; } li { display: flex; align-items: center; gap: 12px; padding: 18px; border-bottom: 1px solid #d8cfb8; } li span { flex: 1; } li.done span { text-decoration: line-through; opacity: .6; }\n.filters { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 24px; } [aria-pressed=\"true\"] { outline: 2px solid currentColor; outline-offset: 2px; }",
      "js": "let tasks = [];\ntry {\n  const saved = JSON.parse(localStorage.getItem('tempo-tasks') || '[]');\n  if (Array.isArray(saved)) tasks = saved.filter(task => task && typeof task.title === 'string' && typeof task.done === 'boolean' && typeof task.id === 'number');\n} catch { tasks = []; }\nlet view = \"all\";\nfunction render() {\n  try { localStorage.setItem('tempo-tasks', JSON.stringify(tasks)); }\n  catch { document.querySelector('#message').textContent = 'შენახვა მიუწვდომელია; ჩამოტვირთე კოდი და შეამოწმე ჩვეულებრივ ბრაუზერში.'; }\n  const list = document.querySelector('#tasks'); list.replaceChildren();\n  tasks.filter(task => view === \"all\" || (view === \"done\" ? task.done : !task.done)).forEach(task => {\n    const item = document.createElement('li');\n    const text = document.createElement('span'); text.textContent = task.title;\n    item.classList.toggle('done', task.done);\n    const toggle = document.createElement('button'); toggle.className = 'toggle-task';\n    toggle.textContent = task.done ? 'აღდგენა' : 'დასრულება';\n    toggle.setAttribute('aria-pressed', String(task.done));\n    toggle.addEventListener('click', () => { task.done = !task.done; render(); });\n    item.append(text, toggle); list.append(item);\n  });\n  document.querySelector('#remaining').textContent = tasks.filter(task => !task.done).length + ' დარჩენილი';\n}\ndocument.querySelector('#task-form').addEventListener('submit', event => {\n  event.preventDefault();\n  const input = document.querySelector('#task-input');\n  const title = input.value.trim();\n  if (!title) { document.querySelector('#message').textContent = 'ჩაწერე დავალება.'; return; }\n  tasks.push({ id: Date.now() + Math.random(), title, done: false });\n  input.value = ''; document.querySelector('#message').textContent = 'დავალება დამატებულია.';\n  render();\n});\nrender();\ndocument.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {\n  view = button.dataset.view;\n  document.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));\n  render();\n}));"
    }
  },
  {
    "id": "orbit",
    "title": "Orbit — პროექტების დაფა",
    "subtitle": "მონაცემები, რომლებიც შემდეგ ნაბიჯს გიჩვენებს.",
    "kind": "დეშბორდი",
    "level": 3,
    "minutes": 150,
    "skills": [
      "მონაცემთა შეჯამება",
      "გამოთვლები",
      "თემები",
      "დალაგება"
    ],
    "lessons": [
      18,
      22,
      34,
      35,
      39,
      44
    ],
    "accent": "#bfc8fb",
    "paper": "#eef0f8",
    "ink": "#252a47",
    "brief": "ააწყე სტუდიის სამუშაო დაფა გამოთვლილი მაჩვენებლებით, პროექტების სიით, დალაგებითა და ღია/მუქი თემით.",
    "audience": "გუნდის წევრი, რომელსაც აქტიური პროექტებისა და ბიუჯეტის სწრაფი სურათი სჭირდება.",
    "reuse": "ეს მიდგომა ხარჯების, გაყიდვების ან ფიტნესის დაფაში გამოგადგება.",
    "stages": [
      {
        "id": 1,
        "title": "ინფორმაციის არქიტექტურა",
        "concept": "მეტრიკები და ბადე",
        "explanation": "დაფის დიზაინი კითხვების დალაგებაა: რამდენი პროექტია, რა ბიუჯეტია და რამდენია აქტიური? თითოეულ მაჩვენებელს მკაფიო წარწერა და მნიშვნელობა სჭირდება. მონაცემი შემდეგ ეტაპზე მოვა; ახლა ადგილი და ვიზუალური იერარქია შექმენი. სიდიდით ყველა ელემენტს ერთდროულად ნუ გამოყოფ.",
        "task": "ააწყე .hero და #dashboard. დაამატე სამი მეტრიკა #total, #budget, #active და ცარიელი #projects.grid. ყველა .grid ვიწრო ეკრანზე ერთ სვეტად მოარგე.",
        "snippet": "<article class=\"card\">\n  <p>პროექტების რაოდენობა</p><h2 id=\"total\">0</h2>\n</article>",
        "hints": [
          "მნიშვნელობები გამორჩეული იყოს, აღწერები — უფრო მშვიდი.",
          "მეტრიკებისა და პროექტების ბადე ერთსა და იმავე responsive წესს შეიძლება იყენებდეს."
        ],
        "checks": [
          {
            "label": "სამი მაჩვენებელია",
            "selector": "#total, #budget, #active",
            "count": 3
          },
          {
            "label": "პროექტების კონტეინერია",
            "selector": "#projects.grid"
          },
          {
            "label": "ბარათების მშობელი Grid-ია",
            "selector": ".grid",
            "property": "display",
            "values": [
              "grid"
            ]
          },
          {
            "label": "ფართო ეკრანზე სამი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 3",
            "width": 1000
          },
          {
            "label": "ვიწრო ეკრანზე ერთი სვეტია",
            "expression": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length === 1",
            "width": 360
          },
          {
            "label": "360px-ზე ჰორიზონტალური გადაცდენა არ არის",
            "expression": "document.documentElement.scrollWidth <= innerWidth",
            "width": 360
          }
        ],
        "review": [
          "360px და ფართო ეკრანი შეადარე: ტექსტი სრულად იკითხება.",
          "Tab-ით გადადი მოქმედებებზე და დარწმუნდი, რომ ფოკუსი ჩანს."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">orbit®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#dashboard\">მიმოხილვა</a><button id=\"theme\" type=\"button\" aria-pressed=\"false\">მუქი რეჟიმი ◐</button></nav>\n</header>\n<main>\n  <!-- შენი პირველი სექცია აქ დაამატე. -->\n</main>\n<footer>შექმნილია სწავლის პროცესში · orbit®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">orbit®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#dashboard\">მიმოხილვა</a><button id=\"theme\" type=\"button\" aria-pressed=\"false\">მუქი რეჟიმი ◐</button></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">სამუშაო სივრცე · მიმოხილვა</p>\n    <h1>შენი სტუდია.<br>ერთი მკაფიო სურათი.</h1>\n    <p class=\"intro\">შეინარჩუნე ფოკუსი აქტიურ პროექტებსა და მომდევნო ნაბიჯზე.</p>\n    <a class=\"button\" href=\"#dashboard\">ნახე მიმოხილვა ↗</a>\n  </section>\n<section id=\"dashboard\"><div class=\"grid metrics\">\n<article class=\"card\"><p>პროექტების რაოდენობა</p><h2 id=\"total\">0</h2></article>\n<article class=\"card\"><p>ბიუჯეტი სულ</p><h2 id=\"budget\">0 ₾</h2></article>\n<article class=\"card\"><p>აქტიური პროექტი</p><h2 id=\"active\">0</h2></article>\n</div><h2>მიმდინარე პროექტები</h2><div id=\"projects\" class=\"grid\"></div></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · orbit®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #bfc8fb; --paper: #eef0f8; --ink: #252a47; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { padding-top: 42px; } .hero h1 { font-size: clamp(32px, 4vw, 56px); } .metrics .card { border-top: 4px solid var(--accent); }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.metrics { margin-bottom: 48px; } .metrics h2 { font-size: 36px; margin: 8px 0; }",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "transfer": false
      },
      {
        "id": 2,
        "title": "პროექტები როგორც მონაცემები",
        "concept": "ობიექტები და გადახატვა",
        "explanation": "მაჩვენებლებისა და ბარათების საწყისი წყარო ერთი მასივია. თითო პროექტი name, budget და active ველებით აღწერე. render(items) კონკრეტული წყობის ჩვენებას იღებს; მონაცემები უცვლელად რჩება. ეს შემდგომ დალაგებასა და შეჯამებას ერთნაირ წყაროზე დააყრდნობს.",
        "task": "შექმენი projects სამი ობიექტით: ბიუჯეტები 1200, 2400, 800; პირველი ორი active:true. render(items)-მა #projects-ში სამი .card შექმნას სახელით, .price ფასითა და სტატუსით.",
        "snippet": "{ name: \"ვებდიზაინი\", budget: 2400, active: true }",
        "hints": [
          "ბიუჯეტი რიცხვი უნდა იყოს, რათა შეკრება სტრიქონების შეერთებად არ იქცეს.",
          "ბარათები createElement/textContent-ით შექმენი."
        ],
        "checks": [
          {
            "label": "სამი პროექტის ბარათია",
            "selector": "#projects .card",
            "count": 3
          },
          {
            "label": "ყველას ფასის ელემენტი აქვს",
            "selector": "#projects .price",
            "count": 3
          },
          {
            "label": "აქტიური სტატუსი ჩანს",
            "selector": "#projects",
            "contains": "მიმდინარე"
          }
        ],
        "review": [
          "მონაცემთა ტიპები სწორადაა შერჩეული და სტრიქონებად მხოლოდ ჩვენებისას იქცევა."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">orbit®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#dashboard\">მიმოხილვა</a><button id=\"theme\" type=\"button\" aria-pressed=\"false\">მუქი რეჟიმი ◐</button></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">სამუშაო სივრცე · მიმოხილვა</p>\n    <h1>შენი სტუდია.<br>ერთი მკაფიო სურათი.</h1>\n    <p class=\"intro\">შეინარჩუნე ფოკუსი აქტიურ პროექტებსა და მომდევნო ნაბიჯზე.</p>\n    <a class=\"button\" href=\"#dashboard\">ნახე მიმოხილვა ↗</a>\n  </section>\n<section id=\"dashboard\"><div class=\"grid metrics\">\n<article class=\"card\"><p>პროექტების რაოდენობა</p><h2 id=\"total\">0</h2></article>\n<article class=\"card\"><p>ბიუჯეტი სულ</p><h2 id=\"budget\">0 ₾</h2></article>\n<article class=\"card\"><p>აქტიური პროექტი</p><h2 id=\"active\">0</h2></article>\n</div><h2>მიმდინარე პროექტები</h2><div id=\"projects\" class=\"grid\"></div></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · orbit®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #bfc8fb; --paper: #eef0f8; --ink: #252a47; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { padding-top: 42px; } .hero h1 { font-size: clamp(32px, 4vw, 56px); } .metrics .card { border-top: 4px solid var(--accent); }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.metrics { margin-bottom: 48px; } .metrics h2 { font-size: 36px; margin: 8px 0; }",
          "js": "// ინტერაქციას მომდევნო ეტაპზე დავამატებთ."
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">orbit®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#dashboard\">მიმოხილვა</a><button id=\"theme\" type=\"button\" aria-pressed=\"false\">მუქი რეჟიმი ◐</button></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">სამუშაო სივრცე · მიმოხილვა</p>\n    <h1>შენი სტუდია.<br>ერთი მკაფიო სურათი.</h1>\n    <p class=\"intro\">შეინარჩუნე ფოკუსი აქტიურ პროექტებსა და მომდევნო ნაბიჯზე.</p>\n    <a class=\"button\" href=\"#dashboard\">ნახე მიმოხილვა ↗</a>\n  </section>\n<section id=\"dashboard\"><div class=\"grid metrics\">\n<article class=\"card\"><p>პროექტების რაოდენობა</p><h2 id=\"total\">0</h2></article>\n<article class=\"card\"><p>ბიუჯეტი სულ</p><h2 id=\"budget\">0 ₾</h2></article>\n<article class=\"card\"><p>აქტიური პროექტი</p><h2 id=\"active\">0</h2></article>\n</div><h2>მიმდინარე პროექტები</h2><div id=\"projects\" class=\"grid\"></div></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · orbit®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #bfc8fb; --paper: #eef0f8; --ink: #252a47; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { padding-top: 42px; } .hero h1 { font-size: clamp(32px, 4vw, 56px); } .metrics .card { border-top: 4px solid var(--accent); }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.metrics { margin-bottom: 48px; } .metrics h2 { font-size: 36px; margin: 8px 0; }",
          "js": "const projects = [\n  { name: 'ბრენდის იდენტობა', budget: 1200, active: true },\n  { name: 'ვებდიზაინი', budget: 2400, active: true },\n  { name: 'კატალოგი', budget: 800, active: false }\n];\nfunction render(items = projects) {\n  const container = document.querySelector('#projects'); container.replaceChildren();\n  items.forEach(project => {\n    const card = document.createElement('article'); card.className = 'card';\n    const title = document.createElement('h2'); title.textContent = project.name;\n    const price = document.createElement('p'); price.className = 'price'; price.textContent = project.budget + ' ₾';\n    const status = document.createElement('p'); status.textContent = project.active ? 'მიმდინარე' : 'დასრულებული';\n    card.append(title, price, status); container.append(card);\n  });\n}\nrender();"
        },
        "transfer": false
      },
      {
        "id": 3,
        "title": "რიცხვები, რომლებიც მონაცემებიდან მოდის",
        "concept": "reduce და წმინდა ფუნქცია",
        "explanation": "ჯამი ხელით ჩაწერილი რიცხვი არ უნდა იყოს. summarize(items) მონაცემებს იღებს და count, budget, active შედეგს აბრუნებს DOM-ის შეხების გარეშე. ასეთ ფუნქციას ახალი მონაცემებითაც ამოწმებ. ასე სწავლობ ლოგიკის დამოუკიდებლად გამოყოფას და ტესტირებად დიზაინს.",
        "task": "დაწერე summarize(items), რომელიც აბრუნებს {count,budget,active}. budget გამოითვალე, active დაითვალე. შედეგით განაახლე სამი მაჩვენებელი. ცარიელ მასივზე ყველა რიცხვი 0 იყოს.",
        "snippet": "const budget = items.reduce((sum, item) => sum + item.budget, 0);",
        "hints": [
          "reduce-ის საწყის მნიშვნელობად 0 გამოიყენე, რომ ცარიელ მასივზეც იმუშაოს.",
          "ტესტი შენს ფუნქციას სხვა მონაცემებსაც გადასცემს. პასუხი ხელით არ ჩაწერო."
        ],
        "checks": [
          {
            "label": "შეჯამება სხვა მონაცემებზეც სწორია",
            "expression": "(() => { const s=summarize([{budget:7,active:true},{budget:13,active:false}]); return s.count===2 && s.budget===20 && s.active===1; })()"
          },
          {
            "label": "ცარიელი სია გამართულია",
            "expression": "(() => { const s=summarize([]); return s.count===0 && s.budget===0 && s.active===0; })()"
          },
          {
            "label": "ბიუჯეტის მაჩვენებელი გამოითვალა",
            "selector": "#budget",
            "contains": "4400"
          },
          {
            "label": "აქტიურის მაჩვენებელი გამოითვალა",
            "selector": "#active",
            "contains": "2"
          }
        ],
        "review": [
          "შემიძლია ავხსნა, რატომ არის გამოთვლა DOM-ისგან დამოუკიდებელი."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">orbit®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#dashboard\">მიმოხილვა</a><button id=\"theme\" type=\"button\" aria-pressed=\"false\">მუქი რეჟიმი ◐</button></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">სამუშაო სივრცე · მიმოხილვა</p>\n    <h1>შენი სტუდია.<br>ერთი მკაფიო სურათი.</h1>\n    <p class=\"intro\">შეინარჩუნე ფოკუსი აქტიურ პროექტებსა და მომდევნო ნაბიჯზე.</p>\n    <a class=\"button\" href=\"#dashboard\">ნახე მიმოხილვა ↗</a>\n  </section>\n<section id=\"dashboard\"><div class=\"grid metrics\">\n<article class=\"card\"><p>პროექტების რაოდენობა</p><h2 id=\"total\">0</h2></article>\n<article class=\"card\"><p>ბიუჯეტი სულ</p><h2 id=\"budget\">0 ₾</h2></article>\n<article class=\"card\"><p>აქტიური პროექტი</p><h2 id=\"active\">0</h2></article>\n</div><h2>მიმდინარე პროექტები</h2><div id=\"projects\" class=\"grid\"></div></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · orbit®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #bfc8fb; --paper: #eef0f8; --ink: #252a47; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { padding-top: 42px; } .hero h1 { font-size: clamp(32px, 4vw, 56px); } .metrics .card { border-top: 4px solid var(--accent); }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.metrics { margin-bottom: 48px; } .metrics h2 { font-size: 36px; margin: 8px 0; }",
          "js": "const projects = [\n  { name: 'ბრენდის იდენტობა', budget: 1200, active: true },\n  { name: 'ვებდიზაინი', budget: 2400, active: true },\n  { name: 'კატალოგი', budget: 800, active: false }\n];\nfunction render(items = projects) {\n  const container = document.querySelector('#projects'); container.replaceChildren();\n  items.forEach(project => {\n    const card = document.createElement('article'); card.className = 'card';\n    const title = document.createElement('h2'); title.textContent = project.name;\n    const price = document.createElement('p'); price.className = 'price'; price.textContent = project.budget + ' ₾';\n    const status = document.createElement('p'); status.textContent = project.active ? 'მიმდინარე' : 'დასრულებული';\n    card.append(title, price, status); container.append(card);\n  });\n}\nrender();"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">orbit®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#dashboard\">მიმოხილვა</a><button id=\"theme\" type=\"button\" aria-pressed=\"false\">მუქი რეჟიმი ◐</button></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">სამუშაო სივრცე · მიმოხილვა</p>\n    <h1>შენი სტუდია.<br>ერთი მკაფიო სურათი.</h1>\n    <p class=\"intro\">შეინარჩუნე ფოკუსი აქტიურ პროექტებსა და მომდევნო ნაბიჯზე.</p>\n    <a class=\"button\" href=\"#dashboard\">ნახე მიმოხილვა ↗</a>\n  </section>\n<section id=\"dashboard\"><div class=\"grid metrics\">\n<article class=\"card\"><p>პროექტების რაოდენობა</p><h2 id=\"total\">0</h2></article>\n<article class=\"card\"><p>ბიუჯეტი სულ</p><h2 id=\"budget\">0 ₾</h2></article>\n<article class=\"card\"><p>აქტიური პროექტი</p><h2 id=\"active\">0</h2></article>\n</div><h2>მიმდინარე პროექტები</h2><div id=\"projects\" class=\"grid\"></div></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · orbit®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #bfc8fb; --paper: #eef0f8; --ink: #252a47; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { padding-top: 42px; } .hero h1 { font-size: clamp(32px, 4vw, 56px); } .metrics .card { border-top: 4px solid var(--accent); }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.metrics { margin-bottom: 48px; } .metrics h2 { font-size: 36px; margin: 8px 0; }",
          "js": "const projects = [\n  { name: 'ბრენდის იდენტობა', budget: 1200, active: true },\n  { name: 'ვებდიზაინი', budget: 2400, active: true },\n  { name: 'კატალოგი', budget: 800, active: false }\n];\nfunction render(items = projects) {\n  const container = document.querySelector('#projects'); container.replaceChildren();\n  items.forEach(project => {\n    const card = document.createElement('article'); card.className = 'card';\n    const title = document.createElement('h2'); title.textContent = project.name;\n    const price = document.createElement('p'); price.className = 'price'; price.textContent = project.budget + ' ₾';\n    const status = document.createElement('p'); status.textContent = project.active ? 'მიმდინარე' : 'დასრულებული';\n    card.append(title, price, status); container.append(card);\n  });\n}\nrender();\nfunction summarize(items) {\n  return { count: items.length, budget: items.reduce((sum, item) => sum + item.budget, 0), active: items.filter(item => item.active).length };\n}\nconst summary = summarize(projects);\ndocument.querySelector('#total').textContent = summary.count;\ndocument.querySelector('#budget').textContent = summary.budget + ' ₾';\ndocument.querySelector('#active').textContent = summary.active;"
        },
        "transfer": false
      },
      {
        "id": 4,
        "title": "დალაგება მონაცემის დაზიანების გარეშე",
        "concept": "ასლი და sort",
        "explanation": "sort მასივს ადგილზე ცვლის. თუ საწყის წყობას ინარჩუნებ, ჯერ [...projects] ასლი შექმენი. დალაგება მხოლოდ ჩვენებას ცვლის, ჯამი უცვლელი რჩება. სხვადასხვა გზით მონაცემების გადამუშავება იმავე render ფუნქციით ხდება — ლოგიკა არ დუბლირდება.",
        "task": "დაამატე #sort select ვარიანტებით original და budget. input მოვლენაზე budget აირჩიე კლებადობით დალაგებისთვის. საწყისზე დაბრუნებამ ორიგინალი წყობა აღადგინოს.",
        "snippet": "const ordered = [...projects].sort((a, b) => b.budget - a.budget);\nrender(ordered);",
        "hints": [
          "რიცხვების დალაგებისას შედარების ფუნქცია აუცილებელია.",
          "საწყისი projects არ შეცვალო, რათა original ვარიანტმა აღადგინოს წყობა."
        ],
        "checks": [
          {
            "label": "კლებადობით ყველაზე ძვირი პირველია",
            "expression": "document.querySelector('#projects .price').textContent.includes('2400')",
            "action": {
              "selector": "#sort",
              "event": "input",
              "value": "budget"
            }
          },
          {
            "label": "საწყის წყობაზე დაბრუნება მუშაობს",
            "expression": "document.querySelector('#projects .price').textContent.includes('1200')",
            "action": {
              "selector": "#sort",
              "event": "input",
              "value": "original"
            }
          },
          {
            "label": "დალაგება ჯამს არ ცვლის",
            "selector": "#budget",
            "contains": "4400"
          }
        ],
        "review": [
          "დალაგების არჩევა კლავიატურითაც შესაძლებელია."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">orbit®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#dashboard\">მიმოხილვა</a><button id=\"theme\" type=\"button\" aria-pressed=\"false\">მუქი რეჟიმი ◐</button></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">სამუშაო სივრცე · მიმოხილვა</p>\n    <h1>შენი სტუდია.<br>ერთი მკაფიო სურათი.</h1>\n    <p class=\"intro\">შეინარჩუნე ფოკუსი აქტიურ პროექტებსა და მომდევნო ნაბიჯზე.</p>\n    <a class=\"button\" href=\"#dashboard\">ნახე მიმოხილვა ↗</a>\n  </section>\n<section id=\"dashboard\"><div class=\"grid metrics\">\n<article class=\"card\"><p>პროექტების რაოდენობა</p><h2 id=\"total\">0</h2></article>\n<article class=\"card\"><p>ბიუჯეტი სულ</p><h2 id=\"budget\">0 ₾</h2></article>\n<article class=\"card\"><p>აქტიური პროექტი</p><h2 id=\"active\">0</h2></article>\n</div><h2>მიმდინარე პროექტები</h2><div id=\"projects\" class=\"grid\"></div></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · orbit®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #bfc8fb; --paper: #eef0f8; --ink: #252a47; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { padding-top: 42px; } .hero h1 { font-size: clamp(32px, 4vw, 56px); } .metrics .card { border-top: 4px solid var(--accent); }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.metrics { margin-bottom: 48px; } .metrics h2 { font-size: 36px; margin: 8px 0; }",
          "js": "const projects = [\n  { name: 'ბრენდის იდენტობა', budget: 1200, active: true },\n  { name: 'ვებდიზაინი', budget: 2400, active: true },\n  { name: 'კატალოგი', budget: 800, active: false }\n];\nfunction render(items = projects) {\n  const container = document.querySelector('#projects'); container.replaceChildren();\n  items.forEach(project => {\n    const card = document.createElement('article'); card.className = 'card';\n    const title = document.createElement('h2'); title.textContent = project.name;\n    const price = document.createElement('p'); price.className = 'price'; price.textContent = project.budget + ' ₾';\n    const status = document.createElement('p'); status.textContent = project.active ? 'მიმდინარე' : 'დასრულებული';\n    card.append(title, price, status); container.append(card);\n  });\n}\nrender();\nfunction summarize(items) {\n  return { count: items.length, budget: items.reduce((sum, item) => sum + item.budget, 0), active: items.filter(item => item.active).length };\n}\nconst summary = summarize(projects);\ndocument.querySelector('#total').textContent = summary.count;\ndocument.querySelector('#budget').textContent = summary.budget + ' ₾';\ndocument.querySelector('#active').textContent = summary.active;"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">orbit®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#dashboard\">მიმოხილვა</a><button id=\"theme\" type=\"button\" aria-pressed=\"false\">მუქი რეჟიმი ◐</button></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">სამუშაო სივრცე · მიმოხილვა</p>\n    <h1>შენი სტუდია.<br>ერთი მკაფიო სურათი.</h1>\n    <p class=\"intro\">შეინარჩუნე ფოკუსი აქტიურ პროექტებსა და მომდევნო ნაბიჯზე.</p>\n    <a class=\"button\" href=\"#dashboard\">ნახე მიმოხილვა ↗</a>\n  </section>\n<section id=\"dashboard\"><div class=\"grid metrics\">\n<article class=\"card\"><p>პროექტების რაოდენობა</p><h2 id=\"total\">0</h2></article>\n<article class=\"card\"><p>ბიუჯეტი სულ</p><h2 id=\"budget\">0 ₾</h2></article>\n<article class=\"card\"><p>აქტიური პროექტი</p><h2 id=\"active\">0</h2></article>\n</div><h2>მიმდინარე პროექტები</h2><label for=\"sort\">დალაგება</label><select id=\"sort\"><option value=\"original\">საწყისი</option><option value=\"budget\">ბიუჯეტი: მაღლიდან</option></select><div id=\"projects\" class=\"grid\"></div></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · orbit®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #bfc8fb; --paper: #eef0f8; --ink: #252a47; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { padding-top: 42px; } .hero h1 { font-size: clamp(32px, 4vw, 56px); } .metrics .card { border-top: 4px solid var(--accent); }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.metrics { margin-bottom: 48px; } .metrics h2 { font-size: 36px; margin: 8px 0; }\n#sort { padding: 12px; margin: 0 0 24px 12px; border-radius: 10px; border: 1px solid #a7b0cc; }",
          "js": "const projects = [\n  { name: 'ბრენდის იდენტობა', budget: 1200, active: true },\n  { name: 'ვებდიზაინი', budget: 2400, active: true },\n  { name: 'კატალოგი', budget: 800, active: false }\n];\nfunction render(items = projects) {\n  const container = document.querySelector('#projects'); container.replaceChildren();\n  items.forEach(project => {\n    const card = document.createElement('article'); card.className = 'card';\n    const title = document.createElement('h2'); title.textContent = project.name;\n    const price = document.createElement('p'); price.className = 'price'; price.textContent = project.budget + ' ₾';\n    const status = document.createElement('p'); status.textContent = project.active ? 'მიმდინარე' : 'დასრულებული';\n    card.append(title, price, status); container.append(card);\n  });\n}\nrender();\nfunction summarize(items) {\n  return { count: items.length, budget: items.reduce((sum, item) => sum + item.budget, 0), active: items.filter(item => item.active).length };\n}\nconst summary = summarize(projects);\ndocument.querySelector('#total').textContent = summary.count;\ndocument.querySelector('#budget').textContent = summary.budget + ' ₾';\ndocument.querySelector('#active').textContent = summary.active;\ndocument.querySelector('#sort').addEventListener('input', event => {\n  const ordered = event.target.value === 'budget' ? [...projects].sort((a, b) => b.budget - a.budget) : projects;\n  render(ordered);\n});"
        },
        "transfer": false
      },
      {
        "id": 5,
        "title": "თემა და ხელმისაწვდომი პასუხი",
        "concept": "CSS ცვლადების გადართვა",
        "explanation": "ფერების სისტემა ახლა თავის ძალას აჩვენებს. body.dark მხოლოდ ცვლადებს ცვლის, კომპონენტების წესები კი იგივე რჩება. ღილაკის aria-pressed მიმდინარე არჩევანს აღწერს, ტექსტი კი მომდევნო მოქმედებას. მუქი თემა უბრალოდ ფონის გაშავება არ არის — კონტრასტს და ზედაპირებს ცალ-ცალკე მოხედე.",
        "task": "#theme click-ზე გადართე body.dark, aria-pressed და ღილაკის ტექსტი. .dark-ში შეცვალე --paper, --ink, --accent. თემის შეცვლამ მონაცემები არ უნდა წაშალოს.",
        "snippet": "body.dark { --paper: #202338; --ink: #f1f2ff; --accent: #bfc8fb; }",
        "hints": [
          "classList.toggle აბრუნებს, დამატებულია თუ არა კლასი. ეს მნიშვნელობა aria-pressed-ს მიეცი.",
          "ცვლადები body-ზე განსაზღვრე, რათა შიგნით ყველა კომპონენტზე გავრცელდეს."
        ],
        "checks": [
          {
            "label": "მუქი თემა ირთვება",
            "expression": "document.body.classList.contains('dark') && document.querySelector('#theme').getAttribute('aria-pressed')==='true'",
            "action": {
              "selector": "#theme",
              "event": "click"
            }
          },
          {
            "label": "მუქ ფონს საკუთარი ფერი აქვს",
            "selector": "body",
            "property": "backgroundColor",
            "values": [
              "rgb(32, 35, 56)"
            ]
          },
          {
            "label": "ღია თემა ბრუნდება",
            "expression": "!document.body.classList.contains('dark') && document.querySelector('#theme').getAttribute('aria-pressed')==='false'",
            "action": {
              "selector": "#theme",
              "event": "click"
            }
          },
          {
            "label": "პროექტები შენარჩუნებულია",
            "selector": "#projects .card",
            "count": 3
          }
        ],
        "review": [
          "თემის ორივე ვერსიაში ტექსტი იკითხება და ფოკუსი ჩანს."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">orbit®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#dashboard\">მიმოხილვა</a><button id=\"theme\" type=\"button\" aria-pressed=\"false\">მუქი რეჟიმი ◐</button></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">სამუშაო სივრცე · მიმოხილვა</p>\n    <h1>შენი სტუდია.<br>ერთი მკაფიო სურათი.</h1>\n    <p class=\"intro\">შეინარჩუნე ფოკუსი აქტიურ პროექტებსა და მომდევნო ნაბიჯზე.</p>\n    <a class=\"button\" href=\"#dashboard\">ნახე მიმოხილვა ↗</a>\n  </section>\n<section id=\"dashboard\"><div class=\"grid metrics\">\n<article class=\"card\"><p>პროექტების რაოდენობა</p><h2 id=\"total\">0</h2></article>\n<article class=\"card\"><p>ბიუჯეტი სულ</p><h2 id=\"budget\">0 ₾</h2></article>\n<article class=\"card\"><p>აქტიური პროექტი</p><h2 id=\"active\">0</h2></article>\n</div><h2>მიმდინარე პროექტები</h2><label for=\"sort\">დალაგება</label><select id=\"sort\"><option value=\"original\">საწყისი</option><option value=\"budget\">ბიუჯეტი: მაღლიდან</option></select><div id=\"projects\" class=\"grid\"></div></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · orbit®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #bfc8fb; --paper: #eef0f8; --ink: #252a47; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { padding-top: 42px; } .hero h1 { font-size: clamp(32px, 4vw, 56px); } .metrics .card { border-top: 4px solid var(--accent); }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.metrics { margin-bottom: 48px; } .metrics h2 { font-size: 36px; margin: 8px 0; }\n#sort { padding: 12px; margin: 0 0 24px 12px; border-radius: 10px; border: 1px solid #a7b0cc; }",
          "js": "const projects = [\n  { name: 'ბრენდის იდენტობა', budget: 1200, active: true },\n  { name: 'ვებდიზაინი', budget: 2400, active: true },\n  { name: 'კატალოგი', budget: 800, active: false }\n];\nfunction render(items = projects) {\n  const container = document.querySelector('#projects'); container.replaceChildren();\n  items.forEach(project => {\n    const card = document.createElement('article'); card.className = 'card';\n    const title = document.createElement('h2'); title.textContent = project.name;\n    const price = document.createElement('p'); price.className = 'price'; price.textContent = project.budget + ' ₾';\n    const status = document.createElement('p'); status.textContent = project.active ? 'მიმდინარე' : 'დასრულებული';\n    card.append(title, price, status); container.append(card);\n  });\n}\nrender();\nfunction summarize(items) {\n  return { count: items.length, budget: items.reduce((sum, item) => sum + item.budget, 0), active: items.filter(item => item.active).length };\n}\nconst summary = summarize(projects);\ndocument.querySelector('#total').textContent = summary.count;\ndocument.querySelector('#budget').textContent = summary.budget + ' ₾';\ndocument.querySelector('#active').textContent = summary.active;\ndocument.querySelector('#sort').addEventListener('input', event => {\n  const ordered = event.target.value === 'budget' ? [...projects].sort((a, b) => b.budget - a.budget) : projects;\n  render(ordered);\n});"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">orbit®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#dashboard\">მიმოხილვა</a><button id=\"theme\" type=\"button\" aria-pressed=\"false\">მუქი რეჟიმი ◐</button></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">სამუშაო სივრცე · მიმოხილვა</p>\n    <h1>შენი სტუდია.<br>ერთი მკაფიო სურათი.</h1>\n    <p class=\"intro\">შეინარჩუნე ფოკუსი აქტიურ პროექტებსა და მომდევნო ნაბიჯზე.</p>\n    <a class=\"button\" href=\"#dashboard\">ნახე მიმოხილვა ↗</a>\n  </section>\n<section id=\"dashboard\"><div class=\"grid metrics\">\n<article class=\"card\"><p>პროექტების რაოდენობა</p><h2 id=\"total\">0</h2></article>\n<article class=\"card\"><p>ბიუჯეტი სულ</p><h2 id=\"budget\">0 ₾</h2></article>\n<article class=\"card\"><p>აქტიური პროექტი</p><h2 id=\"active\">0</h2></article>\n</div><h2>მიმდინარე პროექტები</h2><label for=\"sort\">დალაგება</label><select id=\"sort\"><option value=\"original\">საწყისი</option><option value=\"budget\">ბიუჯეტი: მაღლიდან</option></select><div id=\"projects\" class=\"grid\"></div></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · orbit®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #bfc8fb; --paper: #eef0f8; --ink: #252a47; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { padding-top: 42px; } .hero h1 { font-size: clamp(32px, 4vw, 56px); } .metrics .card { border-top: 4px solid var(--accent); }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.metrics { margin-bottom: 48px; } .metrics h2 { font-size: 36px; margin: 8px 0; }\n#sort { padding: 12px; margin: 0 0 24px 12px; border-radius: 10px; border: 1px solid #a7b0cc; }\nbody.dark { --paper: #202338; --ink: #f1f2ff; --accent: #bfc8fb; } body.dark .card { background: #ffffff0d; border-color: #626b8d; } body.dark button { color: #202338; }",
          "js": "const projects = [\n  { name: 'ბრენდის იდენტობა', budget: 1200, active: true },\n  { name: 'ვებდიზაინი', budget: 2400, active: true },\n  { name: 'კატალოგი', budget: 800, active: false }\n];\nfunction render(items = projects) {\n  const container = document.querySelector('#projects'); container.replaceChildren();\n  items.forEach(project => {\n    const card = document.createElement('article'); card.className = 'card';\n    const title = document.createElement('h2'); title.textContent = project.name;\n    const price = document.createElement('p'); price.className = 'price'; price.textContent = project.budget + ' ₾';\n    const status = document.createElement('p'); status.textContent = project.active ? 'მიმდინარე' : 'დასრულებული';\n    card.append(title, price, status); container.append(card);\n  });\n}\nrender();\nfunction summarize(items) {\n  return { count: items.length, budget: items.reduce((sum, item) => sum + item.budget, 0), active: items.filter(item => item.active).length };\n}\nconst summary = summarize(projects);\ndocument.querySelector('#total').textContent = summary.count;\ndocument.querySelector('#budget').textContent = summary.budget + ' ₾';\ndocument.querySelector('#active').textContent = summary.active;\ndocument.querySelector('#sort').addEventListener('input', event => {\n  const ordered = event.target.value === 'budget' ? [...projects].sort((a, b) => b.budget - a.budget) : projects;\n  render(ordered);\n});\ndocument.querySelector('#theme').addEventListener('click', event => {\n  const dark = document.body.classList.toggle('dark');\n  event.currentTarget.setAttribute('aria-pressed', String(dark));\n  event.currentTarget.textContent = dark ? 'ღია რეჟიმი ◑' : 'მუქი რეჟიმი ◐';\n});"
        },
        "transfer": false
      },
      {
        "id": 6,
        "title": "ააწყე პირადი ხარჯების დაფა",
        "concept": "მოდელის განზოგადება",
        "explanation": "პროექტების ბიუჯეტი და ხარჯების კატეგორია სხვადასხვა კონტექსტია, მაგრამ იგივე ტექნიკას იყენებს: სია, ჯამი, დალაგება და თემა. ამჯერად თავად გადაწყვიტე დასახელებები და კონტენტის სიმჭიდროვე. გამოთვლის ფუნქცია თავიდან არ უნდა დაგჭირდეს.",
        "task": "გადააკეთე დაფა ხარჯებისთვის. h1-ში გამოიყენე „ხარჯ“, სამი ჩანაწერის თანხები გახადე 320, 780, 150. განაახლე სახელები და მეტრიკების წარწერები. შეინარჩუნე დალაგება და თემა.",
        "snippet": "// გამოთვლის ფუნქცია იგივეა; იცვლება მონაცემები და მათი კონტექსტი.",
        "hints": [
          "საერთო ჯამი უნდა გახდეს 1250 და არა ხელით ჩაწერილი მუდმივა.",
          "მაღლიდან დალაგებისას 780 უნდა აღმოჩნდეს პირველი."
        ],
        "checks": [
          {
            "label": "დაფა ახალ კონტექსტს აღწერს",
            "selector": "h1",
            "contains": "ხარჯ"
          },
          {
            "label": "ახალი მონაცემების ჯამი გამოითვალა",
            "selector": "#budget",
            "contains": "1250"
          },
          {
            "label": "ახალი მონაცემები ლაგდება",
            "expression": "document.querySelector('#projects .price').textContent.includes('780')",
            "action": {
              "selector": "#sort",
              "event": "input",
              "value": "budget"
            }
          },
          {
            "label": "ზოგადი გამოთვლა შენარჩუნებულია",
            "expression": "summarize([{budget:5,active:true}]).budget===5"
          }
        ],
        "review": [
          "გვერდზე პროექტების ძველი წარწერები ხარჯების ენით შევცვალე.",
          "შემიძლია ავხსნა, როგორ დავამატებდი მეოთხე ჩანაწერს და რატომ განახლდება ჯამი."
        ],
        "starter": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">orbit®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#dashboard\">მიმოხილვა</a><button id=\"theme\" type=\"button\" aria-pressed=\"false\">მუქი რეჟიმი ◐</button></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">სამუშაო სივრცე · მიმოხილვა</p>\n    <h1>შენი სტუდია.<br>ერთი მკაფიო სურათი.</h1>\n    <p class=\"intro\">შეინარჩუნე ფოკუსი აქტიურ პროექტებსა და მომდევნო ნაბიჯზე.</p>\n    <a class=\"button\" href=\"#dashboard\">ნახე მიმოხილვა ↗</a>\n  </section>\n<section id=\"dashboard\"><div class=\"grid metrics\">\n<article class=\"card\"><p>პროექტების რაოდენობა</p><h2 id=\"total\">0</h2></article>\n<article class=\"card\"><p>ბიუჯეტი სულ</p><h2 id=\"budget\">0 ₾</h2></article>\n<article class=\"card\"><p>აქტიური პროექტი</p><h2 id=\"active\">0</h2></article>\n</div><h2>მიმდინარე პროექტები</h2><label for=\"sort\">დალაგება</label><select id=\"sort\"><option value=\"original\">საწყისი</option><option value=\"budget\">ბიუჯეტი: მაღლიდან</option></select><div id=\"projects\" class=\"grid\"></div></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · orbit®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #bfc8fb; --paper: #eef0f8; --ink: #252a47; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { padding-top: 42px; } .hero h1 { font-size: clamp(32px, 4vw, 56px); } .metrics .card { border-top: 4px solid var(--accent); }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.metrics { margin-bottom: 48px; } .metrics h2 { font-size: 36px; margin: 8px 0; }\n#sort { padding: 12px; margin: 0 0 24px 12px; border-radius: 10px; border: 1px solid #a7b0cc; }\nbody.dark { --paper: #202338; --ink: #f1f2ff; --accent: #bfc8fb; } body.dark .card { background: #ffffff0d; border-color: #626b8d; } body.dark button { color: #202338; }",
          "js": "const projects = [\n  { name: 'ბრენდის იდენტობა', budget: 1200, active: true },\n  { name: 'ვებდიზაინი', budget: 2400, active: true },\n  { name: 'კატალოგი', budget: 800, active: false }\n];\nfunction render(items = projects) {\n  const container = document.querySelector('#projects'); container.replaceChildren();\n  items.forEach(project => {\n    const card = document.createElement('article'); card.className = 'card';\n    const title = document.createElement('h2'); title.textContent = project.name;\n    const price = document.createElement('p'); price.className = 'price'; price.textContent = project.budget + ' ₾';\n    const status = document.createElement('p'); status.textContent = project.active ? 'მიმდინარე' : 'დასრულებული';\n    card.append(title, price, status); container.append(card);\n  });\n}\nrender();\nfunction summarize(items) {\n  return { count: items.length, budget: items.reduce((sum, item) => sum + item.budget, 0), active: items.filter(item => item.active).length };\n}\nconst summary = summarize(projects);\ndocument.querySelector('#total').textContent = summary.count;\ndocument.querySelector('#budget').textContent = summary.budget + ' ₾';\ndocument.querySelector('#active').textContent = summary.active;\ndocument.querySelector('#sort').addEventListener('input', event => {\n  const ordered = event.target.value === 'budget' ? [...projects].sort((a, b) => b.budget - a.budget) : projects;\n  render(ordered);\n});\ndocument.querySelector('#theme').addEventListener('click', event => {\n  const dark = document.body.classList.toggle('dark');\n  event.currentTarget.setAttribute('aria-pressed', String(dark));\n  event.currentTarget.textContent = dark ? 'ღია რეჟიმი ◑' : 'მუქი რეჟიმი ◐';\n});"
        },
        "solution": {
          "html": "<header>\n  <a class=\"logo\" href=\"#\">orbit®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#dashboard\">მიმოხილვა</a><button id=\"theme\" type=\"button\" aria-pressed=\"false\">მუქი რეჟიმი ◐</button></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">სამუშაო სივრცე · მიმოხილვა</p>\n    <h1>შენი ხარჯები.<br>უფრო მკაფიო არჩევანი.</h1>\n    <p class=\"intro\">შეინარჩუნე ფოკუსი აქტიურ პროექტებსა და მომდევნო ნაბიჯზე.</p>\n    <a class=\"button\" href=\"#dashboard\">ნახე მიმოხილვა ↗</a>\n  </section>\n<section id=\"dashboard\"><div class=\"grid metrics\">\n<article class=\"card\"><p>კატეგორიების რაოდენობა</p><h2 id=\"total\">0</h2></article>\n<article class=\"card\"><p>ხარჯი სულ</p><h2 id=\"budget\">0 ₾</h2></article>\n<article class=\"card\"><p>აქტიური კატეგორია</p><h2 id=\"active\">0</h2></article>\n</div><h2>ხარჯების კატეგორიები</h2><label for=\"sort\">დალაგება</label><select id=\"sort\"><option value=\"original\">საწყისი</option><option value=\"budget\">ბიუჯეტი: მაღლიდან</option></select><div id=\"projects\" class=\"grid\"></div></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · orbit®</footer>",
          "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #bfc8fb; --paper: #eef0f8; --ink: #252a47; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { padding-top: 42px; } .hero h1 { font-size: clamp(32px, 4vw, 56px); } .metrics .card { border-top: 4px solid var(--accent); }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.metrics { margin-bottom: 48px; } .metrics h2 { font-size: 36px; margin: 8px 0; }\n#sort { padding: 12px; margin: 0 0 24px 12px; border-radius: 10px; border: 1px solid #a7b0cc; }\nbody.dark { --paper: #202338; --ink: #f1f2ff; --accent: #bfc8fb; } body.dark .card { background: #ffffff0d; border-color: #626b8d; } body.dark button { color: #202338; }",
          "js": "const projects = [\n  { name: 'სასურსათო', budget: 320, active: true },\n  { name: 'ქირა', budget: 780, active: true },\n  { name: 'ტრანსპორტი', budget: 150, active: false }\n];\nfunction render(items = projects) {\n  const container = document.querySelector('#projects'); container.replaceChildren();\n  items.forEach(project => {\n    const card = document.createElement('article'); card.className = 'card';\n    const title = document.createElement('h2'); title.textContent = project.name;\n    const price = document.createElement('p'); price.className = 'price'; price.textContent = project.budget + ' ₾';\n    const status = document.createElement('p'); status.textContent = project.active ? 'მიმდინარე' : 'დასრულებული';\n    card.append(title, price, status); container.append(card);\n  });\n}\nrender();\nfunction summarize(items) {\n  return { count: items.length, budget: items.reduce((sum, item) => sum + item.budget, 0), active: items.filter(item => item.active).length };\n}\nconst summary = summarize(projects);\ndocument.querySelector('#total').textContent = summary.count;\ndocument.querySelector('#budget').textContent = summary.budget + ' ₾';\ndocument.querySelector('#active').textContent = summary.active;\ndocument.querySelector('#sort').addEventListener('input', event => {\n  const ordered = event.target.value === 'budget' ? [...projects].sort((a, b) => b.budget - a.budget) : projects;\n  render(ordered);\n});\ndocument.querySelector('#theme').addEventListener('click', event => {\n  const dark = document.body.classList.toggle('dark');\n  event.currentTarget.setAttribute('aria-pressed', String(dark));\n  event.currentTarget.textContent = dark ? 'ღია რეჟიმი ◑' : 'მუქი რეჟიმი ◐';\n});"
        },
        "transfer": true
      }
    ],
    "preview": {
      "html": "<header>\n  <a class=\"logo\" href=\"#\">orbit®</a>\n  <nav aria-label=\"მთავარი ნავიგაცია\"><a href=\"#dashboard\">მიმოხილვა</a><button id=\"theme\" type=\"button\" aria-pressed=\"false\">მუქი რეჟიმი ◐</button></nav>\n</header>\n<main>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">სამუშაო სივრცე · მიმოხილვა</p>\n    <h1>შენი სტუდია.<br>ერთი მკაფიო სურათი.</h1>\n    <p class=\"intro\">შეინარჩუნე ფოკუსი აქტიურ პროექტებსა და მომდევნო ნაბიჯზე.</p>\n    <a class=\"button\" href=\"#dashboard\">ნახე მიმოხილვა ↗</a>\n  </section>\n<section id=\"dashboard\"><div class=\"grid metrics\">\n<article class=\"card\"><p>პროექტების რაოდენობა</p><h2 id=\"total\">3</h2></article>\n<article class=\"card\"><p>ბიუჯეტი სულ</p><h2 id=\"budget\">4400 ₾</h2></article>\n<article class=\"card\"><p>აქტიური პროექტი</p><h2 id=\"active\">2</h2></article>\n</div><h2>მიმდინარე პროექტები</h2><label for=\"sort\">დალაგება</label><select id=\"sort\"><option value=\"original\">საწყისი</option><option value=\"budget\">ბიუჯეტი: მაღლიდან</option></select><div id=\"projects\" class=\"grid\"><article class=\"card\"><h2>ბრენდის იდენტობა</h2><p class=\"price\">1200 ₾</p><p>მიმდინარე</p></article><article class=\"card\"><h2>ვებდიზაინი</h2><p class=\"price\">2400 ₾</p><p>მიმდინარე</p></article><article class=\"card\"><h2>კატალოგი</h2><p class=\"price\">800 ₾</p><p>დასრულებული</p></article></div></section>\n</main>\n<footer>შექმნილია სწავლის პროცესში · orbit®</footer>",
      "css": "/* საერთო საწყისი: აქ დაამატე შენი დიზაინი. */\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172a25; background: #fafaf6; }\na { color: inherit; }\nbutton, input, select { font: inherit; }\nbutton { cursor: pointer; }\n[hidden] { display: none !important; }\n\n:root { --accent: #bfc8fb; --paper: #eef0f8; --ink: #252a47; }\nbody { background: var(--paper); color: var(--ink); line-height: 1.7; }\nheader, main, footer { max-width: 1100px; margin: auto; padding: 24px; }\nheader { display: flex; justify-content: space-between; align-items: center; gap: 16px; border-bottom: 1px solid currentColor; }\n.logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; text-decoration: none; }\nnav { display: flex; gap: 20px; flex-wrap: wrap; }\nnav a { text-decoration: none; font-size: 14px; }\n.hero { padding: 60px 0 44px; }\n.eyebrow { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; font-weight: 700; }\nh1 { font-size: clamp(32px, 5vw, 68px); max-width: 850px; line-height: 1.18; letter-spacing: -2px; margin: 18px 0; }\nh2 { font-size: 26px; line-height: 1.35; }\np { max-width: 60ch; }\n.button, button { border: 0; display: inline-block; text-decoration: none; background: var(--accent); color: var(--ink); padding: 12px 20px; border-radius: 30px; font-weight: 700; }\n:focus-visible { outline: 3px solid #6d48d8; outline-offset: 4px; }\nfooter { margin-top: 48px; border-top: 1px solid currentColor; font-size: 13px; }\n\n.hero { padding-top: 42px; } .hero h1 { font-size: clamp(32px, 4vw, 56px); } .metrics .card { border-top: 4px solid var(--accent); }\n\n.grid { display: grid; grid-template-columns: 1fr; gap: 20px; }\n@media (min-width: 700px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\n.card { min-width: 0; padding: 22px; border: 1px solid #b9c4bc; border-radius: 18px; background: #ffffff88; }\n.art { min-height: 160px; display: grid; place-items: center; font-size: 62px; border-radius: 12px; background: var(--accent); }\n.card:nth-child(2) .art { background: #e7dcf7; }\n.card:nth-child(3) .art { background: #f6dec4; }\n.card h2 { font-size: 21px; }\n.card p { font-size: 14px; }\n@media (max-width: 500px) { header { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } h1 { letter-spacing: -1px; } }\n\n.metrics { margin-bottom: 48px; } .metrics h2 { font-size: 36px; margin: 8px 0; }\n#sort { padding: 12px; margin: 0 0 24px 12px; border-radius: 10px; border: 1px solid #a7b0cc; }\nbody.dark { --paper: #202338; --ink: #f1f2ff; --accent: #bfc8fb; } body.dark .card { background: #ffffff0d; border-color: #626b8d; } body.dark button { color: #202338; }",
      "js": "const projects = [\n  { name: 'ბრენდის იდენტობა', budget: 1200, active: true },\n  { name: 'ვებდიზაინი', budget: 2400, active: true },\n  { name: 'კატალოგი', budget: 800, active: false }\n];\nfunction render(items = projects) {\n  const container = document.querySelector('#projects'); container.replaceChildren();\n  items.forEach(project => {\n    const card = document.createElement('article'); card.className = 'card';\n    const title = document.createElement('h2'); title.textContent = project.name;\n    const price = document.createElement('p'); price.className = 'price'; price.textContent = project.budget + ' ₾';\n    const status = document.createElement('p'); status.textContent = project.active ? 'მიმდინარე' : 'დასრულებული';\n    card.append(title, price, status); container.append(card);\n  });\n}\nrender();\nfunction summarize(items) {\n  return { count: items.length, budget: items.reduce((sum, item) => sum + item.budget, 0), active: items.filter(item => item.active).length };\n}\nconst summary = summarize(projects);\ndocument.querySelector('#total').textContent = summary.count;\ndocument.querySelector('#budget').textContent = summary.budget + ' ₾';\ndocument.querySelector('#active').textContent = summary.active;\ndocument.querySelector('#sort').addEventListener('input', event => {\n  const ordered = event.target.value === 'budget' ? [...projects].sort((a, b) => b.budget - a.budget) : projects;\n  render(ordered);\n});\ndocument.querySelector('#theme').addEventListener('click', event => {\n  const dark = document.body.classList.toggle('dark');\n  event.currentTarget.setAttribute('aria-pressed', String(dark));\n  event.currentTarget.textContent = dark ? 'ღია რეჟიმი ◑' : 'მუქი რეჟიმი ◐';\n});"
    }
  }
];
export const stageKey = (project:string, stage:number) => `${project}:${stage}`;
export function studioCanOpen(project:string, stage:number, p:Progress) {
 const found=studioProjects.find(x=>x.id===project);
 return !!found && stage>=1 && stage<=found.stages.length && (stage===1 || !!p.studio?.completed.includes(stageKey(project,stage-1)));
}
export function studioCount(p:Progress) { return p.studio?.completed.length ?? 0; }
export function studioNext(p:Progress) {
 const recent=p.studio?.completed.at(-1)?.split(':')[0];
 const ordered=[...studioProjects].sort((a,b)=>Number(b.id===recent)-Number(a.id===recent));
 for (const project of ordered) for (const stage of project.stages) if (!p.studio?.completed.includes(stageKey(project.id,stage.id))) return {project,stage};
 return null;
}
export function studioDocument(files:CodeFiles) {
 return `<!doctype html><html lang="ka"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data: https:; script-src 'none'"><style>${files.css.replace(/<\/style/gi,'<\\/style')}</style></head><body>${files.html}</body></html>`;
}
