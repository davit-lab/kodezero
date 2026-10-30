from pathlib import Path
import json
R=Path(__file__).resolve().parents[2]
terms='''HTML|HTML|დოკუმენტის სტრუქტურის აღწერის ენა. ელემენტებით აღნიშნავს სათაურებს, ბმულებსა და სხვა შინაარსს.|<h1>გამარჯობა</h1>
Element|HTML|დოკუმენტის ერთი სტრუქტურული ერთეული. ხშირად შეიცავს გამხსნელ ტეგს, შინაარსსა და დამხურავ ტეგს.|<p>ტექსტი</p>
Tag|HTML|ნიშნული, რომლითაც HTML ელემენტის დასაწყისი ან დასასრული იწერება.|<p> და </p>
Attribute|HTML|ელემენტის დამატებითი პარამეტრი, რომელიც გამხსნელ ტეგში იწერება.|<a href="about.html">ჩვენ შესახებ</a>
Semantic HTML|HTML|ელემენტების არჩევა შინაარსის მნიშვნელობის მიხედვით. nav ნავიგაციას აღნიშნავს, main — ძირითად შინაარსს.|<main><article>ამბავი</article></main>
Heading|HTML|სათაური, რომელიც შინაარსის იერარქიას გამოხატავს. დონე მნიშვნელობით აირჩიე და ზომა CSS-ით მართე.|<h1>გვერდი</h1><h2>განყოფილება</h2>
Link|HTML|ბმული, რომელიც სხვა დოკუმენტზე ან იმავე გვერდის მონაკვეთზე გადადის.|<a href="#contact">კონტაქტი</a>
Relative path|HTML|მისამართი, რომელიც მიმდინარე დოკუმენტის მდებარეობიდან განისაზღვრება.|<img src="images/photo.jpg" alt="ბაღი">
Alt text|HTML|ინფორმაციული გამოსახულების ტექსტური ალტერნატივა. დეკორატიულ გამოსახულებაზე გამოიყენე ცარიელი alt.|<img src="garden.jpg" alt="ბაღი გაზაფხულზე">
Form|HTML|მომხმარებლის შეყვანის ველების ჯგუფი. გაგზავნისას ბრაუზერის მოქმედების მართვა JavaScript-ითაც შეიძლება.|<form><input name="email" type="email"></form>
Label|HTML|ფორმის ველის ხილული სახელწოდება, რომელიც ველს პროგრამულად უკავშირდება.|<label for="name">სახელი</label><input id="name">
Fieldset|HTML|ერთმანეთთან დაკავშირებული ფორმის ველების ჯგუფი. ჯგუფის სახელს legend განსაზღვრავს.|<fieldset><legend>კონტაქტი</legend></fieldset>
Button|HTML|ელემენტი მოქმედების შესასრულებლად. ფორმაში type="button" ჩვეულებრივ გაგზავნას არ იწვევს.|<button type="button">გახსნა</button>
Details|HTML|ბრაუზერის მშობლიური გასაშლელი განყოფილება. მის სათაურს summary განსაზღვრავს.|<details><summary>მეტი</summary><p>პასუხი</p></details>
Dialog|HTML|დიალოგის ელემენტი. showModal() მას მოდალურად ხსნის, close() კი ხურავს.|document.querySelector('dialog').showModal();
Data attribute|HTML|მომხმარებლის მიერ განსაზღვრული ატრიბუტი ელემენტზე მონაცემის შესანახად. JavaScript-ში dataset-ით იკითხება.|<button data-id="42">ნახვა</button>
ARIA|HTML|ხელმისაწვდომობის დამატებითი სემანტიკა და მდგომარეობები. ჯერ შესაბამისი მშობლიური ელემენტი აირჩიე.|<button aria-expanded="false">მეტი</button>
Viewport|HTML|ბრაუზერში გვერდის ხილული არე. viewport მეტატეგი მობილურ განლაგებას მოწყობილობის სიგანეს უკავშირებს.|<meta name="viewport" content="width=device-width,initial-scale=1">
CSS|CSS|ენა, რომელიც შინაარსის წარმოდგენას მართავს: ფერს, ზომას, დაშორებასა და განლაგებას.|p { color: #333; }
Selector|CSS|წესი, რომელიც სტილის მისაღებ ელემენტებს ირჩევს.|.card h2 { margin: 0; }
Class|CSS|ელემენტის განმეორებადი სახელწოდება. ერთ კლასს მრავალი ელემენტი შეიძლება იყენებდეს.|<article class="card">...</article>
ID|CSS|დოკუმენტში ელემენტის უნიკალური იდენტიფიკატორი. ერთ გვერდზე იგივე id არ გაიმეორო.|#contact { padding: 24px; }
Cascade|CSS|წესების შერჩევის პროცესი, როცა რამდენიმე დეკლარაცია ერთ ელემენტსა და თვისებას ეხება.|p { color: black; } p { color: green; }
Specificity|CSS|სელექტორის წონა, რომელიც კასკადის ერთ-ერთ ეტაპზე წესების პრიორიტეტს განსაზღვრავს.|.card p { color: green; }
Inheritance|CSS|ზოგი თვისების მშობლისგან შვილზე გადაცემა. მაგალითად, ტექსტის ფერი ხშირად მემკვიდრეობით მიიღება.|body { color: #333; }
Box model|CSS|ელემენტის ზომის მოდელი: შინაარსი, შიდა დაშორება, საზღვარი და გარე დაშორება.|.card { padding: 16px; border: 1px solid; margin: 20px; }
Padding|CSS|ელემენტის შინაარსსა და მის საზღვარს შორის შიდა დაშორება.|button { padding: 12px 20px; }
Margin|CSS|ელემენტის საზღვრის გარეთ არსებული დაშორება.|section { margin-block: 32px; }
Flexbox|CSS|განლაგების მოდელი, რომელიც ძირითადად ერთი მიმართულებით აწყობს ელემენტებს.|nav { display: flex; gap: 16px; }
Grid|CSS|ორგანზომილებიანი განლაგება, რომელიც რიგებსა და სვეტებს მართავს.|.cards { display: grid; grid-template-columns: 1fr 1fr; }
Gap|CSS|მანძილი Flexbox-ის ან Grid-ის ელემენტებს შორის.|.cards { gap: 24px; }
Media query|CSS|პირობა, რომლითაც სტილი გარემოს მახასიათებლების მიხედვით გამოიყენება.|@media (max-width: 600px) { .cards { display: block; } }
Custom property|CSS|CSS ცვლადი, რომელიც მნიშვნელობის განმეორებით გამოყენებას ამარტივებს.|:root { --ink: #333; } body { color: var(--ink); }
Pseudo-class|CSS|სელექტორის ნაწილი, რომელიც ელემენტის მდგომარეობას ან სტრუქტურულ პირობას აღნიშნავს.|button:focus-visible { outline: 3px solid green; }
Position sticky|CSS|პოზიციონირება, რომელიც მითითებულ ზღვარზე ელემენტს გადახვევის კონტეინერში აჩერებს.|header { position: sticky; top: 0; }
Responsive design|CSS|დიზაინი, რომელიც სხვადასხვა ზომის ეკრანზე შინაარსსა და მოქმედებებს გამოსადეგად ინარჩუნებს.|.container { width: min(100% - 32px, 1100px); margin: auto; }
JavaScript|JavaScript|პროგრამირების ენა, რომლითაც ბრაუზერში გვერდის ქცევასა და მონაცემებს მართავ.|button.addEventListener('click', () => alert('გამარჯობა'));
Variable|JavaScript|სახელდებული კავშირი მნიშვნელობასთან. let-ის მნიშვნელობა შეიძლება შეიცვალოს.|let count = 0;
Const|JavaScript|ცვლადის გამოცხადება, რომლის თავიდან მინიჭებაც დაუშვებელია. ობიექტის შიგთავსი მაინც შეიძლება შეიცვალოს.|const items = []; items.push('ახალი');
String|JavaScript|ტექსტური მნიშვნელობა. ბრჭყალები პროგრამას ტექსტის საზღვრებს აჩვენებს.|const name = 'ანა';
Number|JavaScript|რიცხვითი ტიპი. input.value სტრიქონია და საჭიროებისას რიცხვად უნდა გარდაქმნა.|const price = Number(input.value);
Boolean|JavaScript|ლოგიკური ტიპი ორი მნიშვნელობით: true და false.|const isOpen = false;
Array|JavaScript|მნიშვნელობების დალაგებული კოლექცია. პირველი ელემენტის ინდექსია 0.|const colors = ['მწვანე', 'თეთრი'];
Object|JavaScript|გასაღებებისა და მნიშვნელობების ნაკრები, რომელიც ერთი არსების მონაცემებს აერთიანებს.|const item = { title: 'წიგნი', price: 20 };
Function|JavaScript|პროგრამის განმეორებით გამოსაყენებელი ნაწილი, რომელსაც პარამეტრები და შედეგი შეიძლება ჰქონდეს.|function double(n) { return n * 2; }
Return|JavaScript|ფუნქციის შესრულების დასრულება და გამომძახებლისთვის შედეგის დაბრუნება.|function sum(a, b) { return a + b; }
Condition|JavaScript|პირობის მიხედვით სხვადასხვა კოდის შესრულება.|if (count > 0) { button.disabled = false; }
Loop|JavaScript|კოდის განმეორებით შესრულება. დასრულების პირობა ყოველთვის გადაამოწმე.|for (const item of items) { console.log(item); }
DOM|JavaScript|ბრაუზერის მიერ დოკუმენტის ობიექტებად წარმოდგენა, რომელთა წაკითხვა და შეცვლა შეიძლება.|document.querySelector('h1').textContent = 'ახალი სათაური';
Event|JavaScript|მოვლენა, მაგალითად დაწკაპუნება ან შეყვანა, რომელზეც დამმუშავებელი ფუნქციით რეაგირებ.|input.addEventListener('input', event => console.log(event.target.value));
Event delegation|JavaScript|მოვლენის საერთო მშობელზე დამუშავება. გამოსადეგია დინამიკურად დამატებული შვილებისთვისაც.|list.addEventListener('click', e => { const b = e.target.closest('button'); });
Filter|JavaScript|მასივის მეთოდი, რომელიც პირობის შესაბამის ელემენტებს ახალ მასივში აბრუნებს.|const active = items.filter(item => item.active);
Map|JavaScript|მასივის მეთოდი, რომელიც თითოეული ელემენტის გარდაქმნით ახალ მასივს ქმნის.|const names = users.map(user => user.name);
Reduce|JavaScript|მასივის თანმიმდევრულად დამუშავება ერთ დაგროვილ შედეგამდე.|const total = prices.reduce((sum, price) => sum + price, 0);
URL|ვებ-საფუძვლები|რესურსის მისამართი, რომელიც სქემას, ჰოსტს, გზასა და სხვა ნაწილებს შეიძლება შეიცავდეს.|https://example.com/projects?id=2
HTTP|ვებ-საფუძვლები|კლიენტსა და სერვერს შორის მოთხოვნებისა და პასუხების გაცვლის პროტოკოლი.|GET /about.html
HTTPS|ვებ-საფუძვლები|HTTP დაშიფრულ კავშირზე. საიტის შინაარსის სისწორეს თავისთავად არ ადასტურებს.|https://example.com
Request|ვებ-საფუძვლები|კლიენტის მიერ სერვერისთვის გაგზავნილი მოთხოვნა კონკრეტული რესურსის ან მოქმედებისთვის.|fetch('/api/items')
Response|ვებ-საფუძვლები|სერვერის პასუხი მოთხოვნაზე: სტატუსი, სათაურები და საჭიროებისას შინაარსი.|const data = await response.json();
Status code|ვებ-საფუძვლები|პასუხის რიცხვითი სტატუსი. 404 ნიშნავს, რომ მოთხოვნილი რესურსი ვერ მოიძებნა.|200 OK / 404 Not Found
JSON|ვებ-საფუძვლები|მონაცემების ტექსტური ფორმატი. ობიექტის გასაღებები ორმაგ ბრჭყალებში იწერება.|{"name":"ანა","active":true}
Local storage|ვებ-საფუძვლები|საიტის წარმოშობასთან დაკავშირებული ბრაუზერული საცავი. სტრიქონებს ინახავს; საიდუმლოებების საცავად არ გამოიყენო.|localStorage.setItem('theme', 'light');
Session storage|ვებ-საფუძვლები|ბრაუზერის ჩანართისა და საიტის წარმოშობის შესაბამისი დროებითი საცავი.|sessionStorage.setItem('step', '2');
API|ვებ-საფუძვლები|წესები და ინტერფეისი, რომლითაც პროგრამის ნაწილები ან სხვადასხვა პროგრამა ურთიერთობს.|const result = await fetch('/api/projects');
Async / await|ვებ-საფუძვლები|Promise-ზე დაფუძნებული ასინქრონული კოდის წაკითხვადი ფორმა. await შედეგს ასინქრონულ ფუნქციაში ელოდება.|const response = await fetch('/api/items');
Promise|ვებ-საფუძვლები|მომავალი დასრულების ან წარუმატებლობის აღმნიშვნელი ობიექტი.|fetch('/api/items').then(response => response.json());
Validation|ვებ-საფუძვლები|მონაცემის შემოწმება წესებთან შესაბამისობაზე. კლიენტური შემოწმება სერვერულს არ ცვლის.|if (name.trim().length < 2) { showError(); }
Accessibility|ვებ-საფუძვლები|ინტერფეისის გამოყენებადობა სხვადასხვა შესაძლებლობისა და დამხმარე ტექნოლოგიის მომხმარებლებისთვის.|<button aria-label="ფანჯრის დახურვა">×</button>
Focus|ვებ-საფუძვლები|ელემენტი, რომელიც მოცემულ მომენტში კლავიატურის შეყვანას იღებს.|button.focus();
Debugging|ვებ-საფუძვლები|შეცდომის გამეორება, მიზეზის პოვნა, გამოსწორება და შედეგის შემოწმება.|console.log({ value, expected });
Deployment|ვებ-საფუძვლები|პროექტის ისეთ გარემოში გამოქვეყნება, სადაც მომხმარებელს მისი გამოყენება შეუძლია.|build → შემოწმება → გამოქვეყნება
Version control|ვებ-საფუძვლები|ფაილების ცვლილებების ისტორიის მართვა. ძველ ვერსიასთან შედარებასა და დაბრუნებას ამარტივებს.|git status'''
items=[]
for i,line in enumerate(terms.splitlines()):
 name,topic,definition,example=line.split('|',3);items.append(dict(id='t'+str(i+1),name=name,topic=topic,definition=definition,example=example))
assert len(items)==72,len(items)
(R/'lib/academy/terms.ts').write_text('export type Term={id:string;name:string;topic:string;definition:string;example:string};\nexport const terms:Term[]='+json.dumps(items,ensure_ascii=False,indent=2)+';\n')
