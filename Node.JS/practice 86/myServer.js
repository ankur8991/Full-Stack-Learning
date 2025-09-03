/*
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hello world</h1>');
});
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});
*/

// CommonJS aur ECMAScript Modules (ESM / ES6 Modules) dono hi Node.js / JavaScript mai code ko alag-alag file mai todne (modular banane) ke tareeke hain.
// 📌 1. CommonJS (CJS) 

// . Ye purana system hai (Node.js shuru se use karta  tha).

// . Isme hum require aur module.exports ka use karte hain.

// . Ye default hai Node.js mai (agar tu kuch special nahi set kare).

// Example (CommonJS)

// import krna.
// const add = require('./math.js');
// console.log(add(2,5));

// Yaha require() function ka use hota hai import ke liye.

/*
📌 2. ECMAScript Modules (ESM / ES6 Modules)
  . Ye modern JS standard hasSubscribers(browser + Node.js dono mai kaam krta hai).
  . Node.js ise use krne ke liye: 
     1. package.json mai "type": "module" likhna pdta hai.
     2. ya phir file ka extension .mjs rakhna pdta hai.
*/

//  EXample (ESM)

// IMport krna
// import { add } from './math.mjs';
// console.log(add(8,9));

// 👉 Yaha import/export ka use hota hai(python jaisa lagta hai).


// 📌 Difference ekdum simple shabdon mai
/*
| Feature            | CommonJS         | ESM (ECMAScript Module)    |
| ------------------ | ---------------- | -------------------------- |
| Import             | `require()`      | `import`                   |
| Export             | `module.exports` | `export`                   |
| Default in Node.js | ✅               |  ❌(enable karna padta hai)|
| Modern JS standard | ❌               | ✅                       |



Maan le tu ek project bana raha hai:

CommonJS way:
// db.js
const mongoose = require('mongoose');
module.exports = mongoose;

js
// app.js
const db = require('./db');

ESM way:
// db.js
export { default as mongoose } from 'mongoose';

js
// app.js
import { mongoose } from './db.js';





💡 Short line mai samajh le:
1). CommonJS = purana system (sirf Node.js mai popular tha).

2). ESM = naya system (browser + Node.js + future ke liye standard).

3). Node.js dono ko support karta hai, bas syntax alag hai.
*/




// EX important part COde ka commonjs requuire ka !
const add = require('./math.js');
console.log(add(2,5 , __dirname , __filename)); // 7 , ye dono global variable hai jo har file mai available hote hai.

// nODE.JS by Default CommonJS ke iss function mai isko wrap kr deta hai.
/*
(function (exports, require, module, __filename, __dirname) {
    // Tera sara code yaha hota hai.
    // Matlab code actually yah hota hai Sara.
});
*/

// Kuch vi Chiz hm agr CommonJS mai use krta hai jise ki __dirname, __filenname, require, module, vo by defalut hme uska sara code likhne ki jrurt nhi hai vo iss fucntion mai wrap hua hota hai phle se hi.


