import test from 'node:test';
import assert from 'node:assert/strict';
import { localAssetPaths } from '../lib/academy/export-project.ts';
test('ZIP rewrites local photos without corrupting source credits or external links',()=>{
 const code=`<img src="/photos/interior.jpg"><a href="https://unsplash.com/photos/abc">Автор</a>
.hero{background:url(/photos/interior.jpg)}
const image='/photos/interior.jpg';`;
 const out=localAssetPaths(code);assert.match(out,/<img src="photos\/interior.jpg">/);assert.ok(out.includes('https://unsplash.com/photos/abc'));assert.ok(out.includes('url(photos/interior.jpg)'));assert.ok(out.includes("const image='photos/interior.jpg'"));
});

test('ZIP preserves uploaded course assets in HTML, CSS and JavaScript',()=>{
 const code=`<img src="/course-assets/branon/logo.png">\nbody{background:url('/course-assets/branon/wood_bg.jpg')}\nconst photo="/course-assets/health/slider1.jpg";`;
 const out=localAssetPaths(code);assert.ok(out.includes('src="course-assets/branon/logo.png"'));assert.ok(out.includes("url('course-assets/branon/wood_bg.jpg')"));assert.ok(out.includes('photo="course-assets/health/slider1.jpg"'));
});
