/*
. jo main.js file  mai examples hai vo saare CommonJS ke saath hmne File-system ko implement krna sikha hai isliye ab hm isko ESM ke through vi sikhna cahahte hai.
. to MediaDeviceInfo.js mai hmne example diye the wo CommomJS syntax me the(require).
. lekin agr tu ECMASript Module (ESM) dtyle use karega(jisme import/export aata hai), ti thoda syntax alag hota Hai.
*/

import fs from "fs";

//file create krna.
fs.writeFileSync("demo.txt", "This is an demo.txt file created by using ESM!");

//file read krna.
const data = fs.readFileSync("demo.txt", "utf8");
console.log(data);

// FIle append krna.
fs.appendFileSync("demo.txt", "\n This txt is appened to the demo.txt file")

// File delete krna.
// fs.unlinkSync("demo.txt");

let a = fs.readFileSync("demo.txt" , "utf8");
console.log(a);

// 👉 CommonJS aur ESM dono me methods same hi hote hain (like writeFileSync, readFileSync, etc.), sirf import karne ka tareeka alag hota hai.



