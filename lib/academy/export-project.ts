import type { CodeFiles } from './types';
import { photos } from './photos';
import { download, zipBytes } from './zip';
export async function exportCodeProject(name:string,files:CodeFiles,title:string){
 const matches=[...new Set(Object.values(files).join('\n').match(/\/photos\/[a-z-]+\.jpg/g)??[])];
 const assets:Record<string,string|Uint8Array>={};
 for(const path of matches){const response=await fetch(path);if(!response.ok)throw new Error('ფოტო ვერ ჩაიტვირთა: '+path);assets[path.slice(1)]=new Uint8Array(await response.arrayBuffer());}
 const local=(text:string)=>text.replaceAll('/photos/','photos/');
 const safeTitle=title.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
 const html=`<!doctype html>\n<html lang="ka"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${safeTitle}</title><link rel="stylesheet" href="styles.css"></head><body>\n${local(files.html)}\n<script src="main.js"></script></body></html>`;
 const credits=photos.filter(photo=>matches.includes(photo.path)).map(photo=>`${photo.credit} — ${photo.source}\n${photo.license}: ${photo.licenseUrl}`).join('\n\n');
 const readme=`# ${title}\n\nსასწავლო პროექტი: გახსენი index.html. ფოტოები არქივშია და გარე ჰოსტზე დამოკიდებული არ არის.\n\nlocalStorage-ის სტაბილურად შესამოწმებლად გახსენი პროექტი ადგილობრივი სერვერით: ამ საქაღალდეში გაუშვი python3 -m http.server 8000 და ბრაუზერში გახსენი http://localhost:8000. file: მისამართზე შენახვის ქცევა ბრაუზერებს შორის განსხვავდება.\n\nფორმები, კალათა და დაჯავშნა დემოა: მონაცემები არ იგზავნება, გადახდა და ნამდვილი ჯავშანი არ იქმნება.\n\n## ფოტოები\n\n${credits||'ამ მაგალითში ფოტო არ გამოიყენება.'}\n\nგამოსახულ პირებს სასწავლო ბრენდთან კავშირი არ მიეწერებათ.\n`;
 const archive=zipBytes({'index.html':html,'styles.css':local(files.css),'main.js':local(files.js),'README.md':readme,...assets});
 download(name+'.zip',archive as BlobPart,'application/zip');
}
