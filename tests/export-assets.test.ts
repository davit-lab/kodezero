import test from 'node:test';
import assert from 'node:assert/strict';
import { localAssetPaths } from '../lib/academy/export-project.ts';
test('ZIP rewrites local photos without corrupting source credits or external links',()=>{
 const code=`<img src="/photos/interior.jpg"><a href="https://unsplash.com/photos/abc">Автор</a>
.hero{background:url(/photos/interior.jpg)}
const image='/photos/interior.jpg';`;
 const out=localAssetPaths(code);assert.match(out,/<img src="photos\/interior.jpg">/);assert.ok(out.includes('https://unsplash.com/photos/abc'));assert.ok(out.includes('url(photos/interior.jpg)'));assert.ok(out.includes("const image='photos/interior.jpg'"));
});
