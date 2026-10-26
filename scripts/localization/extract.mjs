import ts from 'typescript';
import fs from 'node:fs';
const files=['components/academy/App.tsx','components/academy/Cloud.tsx','components/academy/Workspace.tsx','components/academy/Editor.tsx','components/academy/Diagnostics.tsx','lib/academy/progress.ts'];
const out=[];
for(const file of files){const source=ts.createSourceFile(file,fs.readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);const texts=new Set();function visit(n){if(ts.isJsxText(n)||ts.isStringLiteral(n)||ts.isNoSubstitutionTemplateLiteral(n)||ts.isTemplateHead(n)||ts.isTemplateMiddle(n)||ts.isTemplateTail(n)){const t=n.text.trim();if(/[a-zA-Z]/.test(t)&&(t.includes(' ')||/^[A-Z][a-z]+(?:…|\.)?$/.test(t))&&!t.includes('from ')&&!t.includes('=>')&&!t.startsWith('<')&&!t.startsWith('.')&&!t.startsWith('bg-'))texts.add(t);}ts.forEachChild(n,visit)}visit(source);out.push({file,texts:[...texts]});}
fs.writeFileSync(process.argv[2]??'.sites-runtime/ui-strings.json',JSON.stringify(out,null,2));console.log(out.map(x=>[x.file,x.texts.length]));
