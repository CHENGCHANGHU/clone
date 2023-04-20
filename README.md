# #golden-tiger/clone

Clone a JS Value (Undefined, Null, NaN, String, Number, BigInt, Boolean, Map, Set, Date, RegExp).

```js
import Clone from '@golden-tiger/clone'; // mjs
const { clone } = Clone;

const a = 'string';
console.log(clone(a)); // string
console.log(a === clone(a)); // true

const b = 123;
console.log(clone(b)); // 123
console.log(b === clone(b)); // true

const c = 123n;
console.log(clone(c)); // 123n
console.log(c === clone(c)); // true

const d = false;
console.log(clone(d)); // false
console.log(d === clone(d)); // true

const e = { a, b, d, e: {} };
const clone_e = clone(e);
console.log(JSON.stringify(clone_e)); // {"a":"string","b":123,"d":false,"e":{}}
console.log(e === clone_e); // false
console.log(e.a === clone_e.a); // true
console.log(e.e === clone_e.e); // false

const f = [ a, b, d, [] ];
const clone_f = clone(f);
console.log(JSON.stringify(clone_f)); // ["string",123,false,[]]
console.log(f === clone_f); // false
console.log(f[0] === clone_f[0]); // true
console.log(f[3] === clone_f[3]); // false

const ga = {};
const g = new Map([['ga', ga]]);
const clone_g = clone(g);
console.log(Array.from(clone_g)); // [ [ 'ga', {} ] ]
console.log(g === clone_g); // false
console.log(g.get('ga') === clone_g.get('ga')); // false

const ha = [ a, b, d, [] ];
const h = new Set(ha);
const clone_h = clone(h);
console.log(Array.from(clone_h)); // [ 'string', 123, false, [] ]
console.log(h === clone_h); // false
console.log(Array.from(h)[0] === Array.from(clone_h)[0]); // true
console.log(Array.from(h)[3] === Array.from(clone_h)[3]); // false

const i = new Date();
const clone_i = new Date(i.getTime());
console.log(i.getTime() === clone_i.getTime()); // true
console.log(i === clone_i); // false

const j = /^test$/;
const clone_j = clone(j);
console.log(j.source === clone_j.source); // true
console.log(j === clone_j); // false
```
