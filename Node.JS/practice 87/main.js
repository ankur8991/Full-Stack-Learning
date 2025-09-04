/*
FS Module in Node.js?
 . The FS (File System) module in Node.js is a built-in module that allows you to work with the file system on your computer. It provides an API for interacting with the file system, enabling you to read, write, update, delete, and manage files and directories.
 . Matlab --> 
   FS ka matlab hai file system.
   Ye Node.js ka ek built-in module hai jo hume file system ke saath interact krne deta hai. matlab ki tum apne system ki files ko read, write, update, remane, etc. sab kuch node.js ke through kr skte ho.

   (IN COMMONJS) tumhe ise use krne ke liye require('fs') likhna padta hai. ye by default availabe hota hai alag se install nhi krna padta hai hme.

*/
// 🔹 Example use cases

// 1. File create krna.
const fs = require("fs");

// new file banana ke liye.
fs.writeFileSync("example.txt", "This is an example file created using Node.js FS moudle.");
// 👉 Ye example.txt new file Banayega aur usme "This is an example file created..." likh dega.

// 2. File read krna 

const data = fs.readFileSync("example.txt", "utf-8");
console.log(data);

/*
--> Jab tu koi file read karta hai fs.readFileSync("example.txt", "utf8") se, to Node.js us file ke raw binary data ko uthata hai.
Agar tu encoding nahi batayega, to wo data ek Buffer (raw bytes) ke form me milega.

 . Example bina utf8 ke:

const fs = require("fs");

const data = fs.readFileSync("example.txt"); // encoding nahi diya
console.log(data);

👉 Output aayega kuch aisa:
<Buffer 48 65 6c 6c 6f 20 42 68 61 69>
Ye hexadecimal values hai (ASCII codes).

🔹 Jab tu "utf8" deta hai:
const data = fs.readFileSync("example.txt", "utf8");
console.log(data);

👉 Ab wahi buffer ko Node.js decode karega UTF-8 text encoding ke hisaab se aur tujhe normal string mil jayegi:
 . This is an example file created using Node.js FS moudle.

 UTF-8 kya hota hai?
    . UTF-8 ek character encoding standard hai jo text ko binary me store krta hai.
    . Ye world-wide accepted hai (English, Hindi, Emoji, sab support krta hai).
    . Agr tu "utf8" likhta hai, to NOde.js smajhta hai ki file ke ander ke text UTF-8 hai aur usko shi readable string mai bana deta hai.
   
    👉 Short me:
    "utf8" batata hai ki file ke data ko binary se string me convert kaise krna hai.
       .  "utf8" → normal text string (sabko samajh aane wali).
       .  bina "utf8" → buffer (raw bytes).
*/



// 3. File append kStringMaxLength(extra text add krna)

fs.appendFileSync("example.txt", "\n This text is appended to the file.");
// 👉 Ye pehle wali file me naya content add karega.


// 4. FIle delete krna.
// fs.unlinkSync("example.txt");
// 👉 Ye file ko system se delete kr dega.


// 5. File rename krna.
// fs.remaneSync("example.txt", "newExample.txt");
// 👉 Ye file ka naam change kr dega.

/*
🔹 Sync vs Async

FS module me do tarike hote hain kaam karne ke:

Synchronous (Sync) → Jaise readFileSync, writeFileSync
Ye blocking hote hain (pehle kaam khatam hoga fir agla chalega).

Asynchronous (Async) → Jaise readFile, writeFile
Ye non-blocking hote hain (background me kaam karte hain aur baaki code chalata rehta hai).
Ye callback functions use karte hain result ke liye.
👉 Sync chhote tasks ke liye theek hai, lekin bade tasks ke liye Async better hai taaki app responsive rahe.
*/

// Example of Async file read
// fs.readFile("example.txt", "utf8", (err, data) => {
//     if(err) {
//         console.log("Error aagaya:", err);
//     }
//         console.log("File data:", data);
// });

// Another Example of Async file write.
fs.writeFile("example2.txt", "This is example 2 file created by Async writeFIle.", () => {
    console.log("done writing file");
    
     fs.readFile("example2.txt", "utf8", (error, data) => {
        console.log(error, data);  // error nhi hmne yaha nhi console mai handle kra hai isliye ye hme null.
     })
     // again write and read by Async function.
})
console.log("Ending");




// callback hell function .
fs.writeFile("example2.txt", "This is example 2 file created by Async writeFIle.", () => {
    console.log("done writing file");
    
     fs.readFile("example2.txt", "utf8", (error, data) => {
        console.log(error, data);  // error nhi hmne yaha nhi console mai handle kra hai isliye ye hme null.
     })
     // again write and read by Async function.
             fs.writeFile("example2.txt", "This is example 2 file created by Async writeFIle.", () => {
             console.log("done writing file");
    
               fs.readFile("example2.txt", "utf8", (error, data) => {
               console.log(error, data);  // error nhi hmne yaha nhi console mai handle kra hai isliye ye hme null.
     })
     // again write and read by Async function.
                    fs.writeFile("example2.txt", "This is example 2 file created by Async writeFIle.", () => {
                    console.log("done writing file");
    
                     fs.readFile("example2.txt", "utf8", (error, data) => {
                     console.log(error, data);  // error nhi hmne yaha nhi console mai handle kra hai isliye ye hme null.
     })
     // again write and read by Async function.
                           fs.writeFile("example2.txt", "This is example 2 file created by Async writeFIle.", () => {
                           console.log("done writing file");
    
                            fs.readFile("example2.txt", "utf8", (error, data) => {
                            console.log(error, data);  // error nhi hmne yaha nhi console mai handle kra hai isliye ye hme null.
                    })
                 })
             })
        })
     })
// ISko kehte hai? Callback ke ander callback or isko "Pyramid of Doom" ya CALLBACK HELL.
/*
🔹 Problem kya hai Callback Hell ki?

    1. Code unreadable ho jata hai (nested nesting).
    2. Debug karna mushkil hota hai.
    3. Error handling complex ho jata hai.


🔹 Iska solution kya hai?

Node.js me teen tareeke famous hain:
  1. Named function use krna(nesting kam ho jaati hai).
  2. Promises.
  3. Async/await(best & cleanest).

*/

//🔹 Solution: Named Functions

// Hum kya karenge:

//    1. Ek function banayenge writeToFile (jo file likhega).
//    2. Ek function banayenge readFromFile (jo file padhega).
//    3. Inhe ek dusre ko named reference ke through call karayenge.

// ⚡ Refactored Code with Named Functions

  function wirteTOFile(content, nextStep) {
   fs.writeFile("example2.txt", content, (err) => {
      if(err) {
         console.log("Write error:", err);
         return;
      }
      console.log("✅ Done Writitng file");
      if(nextStep) nextStep();
   });
  }

  function readFromFile(nextStep) {
   fs.readFile("example2.txt", "utf8", (err, data) => {
      if(err) {
         console.log("Read error:", err);
         return;
      }
      console.log("📖 File content:", data);
        if(nextStep) nextStep();
   });
  }

  // 🔹 Flow start
 writeToFile("1st write: This is example 2 file created by Async writeFile.", () => {
  readFromFile(() => {
    writeToFile("2nd write: Again written by Async writeFile.", () => {
      readFromFile(() => {
        writeToFile("3rd write: Again written by Async writeFile.", () => {
          readFromFile(() => {
            writeToFile("4th write: Again written by Async writeFile.", () => {
              readFromFile();
            });
          });
        });
      });
    });
  });
});


/*
🔹 Kya hua ab?
 . Har jagah nested anonymous callback likhne ki jagah humne functions banaye (writeToFile aur readFromFile).
 . Ab code readable lag raha hai → "Flow chart jaisa".
 . Agar aur likhna/paḍhna ho, sirf flow chain me add kar de.

🔑 Next Step (Best Practice)
Bhai sach bolu, named functions se readability improve hoti hai, lekin agar flow lamba ho to ye bhi heavy lagne lagta hai.
Promises ya async/await usse aur clean bana dete hain (ladder khatam, code straight line me).

*/