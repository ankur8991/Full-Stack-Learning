/*

📌 npm kya hai?

👉 npm (Node Package Manager) ek tool hai jo do kaam karta hai:
1. Package holder/manager – jo bhi external libraries tu install karega (express, mongoose, chalk, etc.), unka track rakhta hai.
2. Package downloader – agar tujhe koi library chahiye, tu ek command se download kar sakta hai (npm install xyz).

📌 npm kaise manage karta hai?
. Jab tu npm init -y karta hai → ek package.json file ban jati hai.
  Ye file ekdum identity card hai project ka.

Isme likha hota hai:
. Project ka naam, version
. Kaunse packages install hai
. Scripts (run commands)

📌 Example

--> Maan le tu ek web server banana chahta hai aur tu Node ka default http use nahi karna, tu express.js use karega (popular library).

 .npm install express

.Yeh command kya karegi?
    1)node_modules/ folder me express ka pura code download karegi.
    2)package.json file me "express": "^4.18.2" jaisa entry kar degi.
    3)Ek package-lock.json banega jo exact version lock karta hai.

📌 External vs Built-in
    . Built-in modules → fs, path, os, events, etc. (npm se install karne ki zaroorat nahi).
    . External modules → express, mongoose, nodemailer, chalk, lodash, etc. (npm se install karna padta hai).

📌 npm ke bina dikka
Agar npm na hota, to tujhe har baar external library ka source code manually download karke apne project me copy-paste karna padta. Aur update bhi manually karna padta.
npm isko auto-manage karta hai.

👉 Matlab npm ekdum waise hi hai jaise Play Store / App Store phone ke liye hota hai.
    1) Built-in apps (Phone, Message) already hote hai → ye Node ke built-in modules ke jaise.
    2) Extra apps (Instagram, WhatsApp) tu install karta hai → ye npm se install hone wale packages hai.

📌 Built-in (Core) Modules

Node.js ke andar sirf 4–5 hi nahi, actually 20+ built-in modules hote hain, jo bina install kiye use kar sakte ho.
Kuch common aur kaam ke:

 .fs → File System (read/write files).
 .http → Server banana.
 .path → Path operations (join, resolve, basename).
 .os → OS info (CPU, memory, platform).
 .events → Event handling.
 .url → URL parsing/manipulation.
 .crypto → Encryption/Hashing.
 .util → Utility functions.
 .stream → Data streaming handle karna.
 .zlib → Compression (gzip, deflate).
 .dns → Domain name lookup.
 .querystring → URL query parsing.
 .timers → setTimeout, setInterval control.

👉 Matlab Node.js ka “STL” bohot bada hai, tumhe har baar npm se install karne ki zaroorat nahi padti.

📌 External (npm se install karne wale)
Agar tujhe koi functionality chahi jo built-in mai nahi hai, tab npm ka use karte ho.
Example:

 .Web framework → express
 .Database → mongoose (MongoDB), mysql2, pg (Postgres)
 .Authentication → jsonwebtoken
 .File upload → multer
 .Utility → lodash

Ye sab tere project ke node_modules folder mai aa jayenge aur package.json mai record ho jayenge.



--> Yeh saare Node.js ke built-in modules hai, aur inhe use karna bohot simple hai. Tujhe bas require() karna hota hai, fir uske functions
    directly use kar sakta hai.
    */

// 📌 General Syntax
const moduleName = require('module_name');


// Aur fir us module ke methods call kar sakta hai.

// 📌 Example with Each Module
// 1. fs (File System)
const fs = require('fs');

// file likhna
fs.writeFileSync('test.txt', 'Hello Bhai!');

// file read karna
const data = fs.readFileSync('test.txt', 'utf8');
console.log(data);

// 2. http (Server banana)
const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from Node.js server!");
}).listen(3000);

// 👉 Browser pe http://localhost:3000 open karo.

// 3. path
const path = require('path');

console.log(path.basename(__filename)); // file ka naam
console.log(path.dirname(__filename));  // folder path
console.log(path.join(__dirname, 'files', 'test.txt')); // path join

// 4. os
const os = require('os');

console.log(os.platform());   // OS platform (win32, linux, darwin)
console.log(os.totalmem());   // Total memory
console.log(os.freemem());    // Free memory
console.log(os.cpus());       // CPU info

// 5. events
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello ${name}!`);
});

emitter.emit('greet', 'Bhai');

// 6. url
const url = require('url');

const myUrl = new URL('https://example.com:8000/path?name=ankur&age=22');
console.log(myUrl.hostname); // example.com
console.log(myUrl.pathname); // /path
console.log(myUrl.searchParams.get('name')); // ankur

// 7. crypto
const crypto = require('crypto');

const hash = crypto.createHash('sha256').update('password123').digest('hex');
console.log(hash);

// 8. util
const util = require('util');
const log = util.debuglog('myapp');

log("This is a debug message!");

// 9. stream
const fs = require('fs');
const readStream = fs.createReadStream('test.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Chunk:', chunk);
});

// 10. zlib
const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
const input = fs.createReadStream('test.txt');
const output = fs.createWriteStream('test.txt.gz');

input.pipe(gzip).pipe(output);

// 11. dns
const dns = require('dns');

dns.lookup('google.com', (err, address) => {
  console.log('IP Address:', address);
});

// 12. querystring
const querystring = require('querystring');

const parsed = querystring.parse('name=ankur&age=22');
console.log(parsed.name); // ankur
console.log(parsed.age);  // 22

// 13. timers
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

setInterval(() => {
  console.log("Repeat every 1 second");
}, 1000);


// 💡 Conclusion:
// . Tujhe kuch bhi use karna hai → const X = require('X') likh aur use kar.
// . Ye modules pehle se Node.js ke andar hote hai → npm install ki zaroorat nahi.