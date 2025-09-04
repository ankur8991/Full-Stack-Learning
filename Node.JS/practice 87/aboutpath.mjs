
/*🔹 Path Module kya hota hai?

  . Node.js ka built-in module hai (jaise fs hota hai).
  . Ye hume file paths ko handle aur manipulate karne me madad karta hai.
  . Cross-platform hota hai → matlab Windows (\) aur Linux/Mac (/) ke differences ko handle karta hai.

👉 Import karna (ESM style, kyunki ab hum type: module use kar rahe hain):
*/


import path from "path"

let myPath = "C:\\Users\\kumar\\Downloads\\Full Stack\\Full-Stack-practice\\Node.JS\\practice 87\\demo.txt"  // isme hmne ne baad mai demo.txt add kra hai.

// 1). File ka extention niklata hai.
console.log(path.extname(myPath))            // hmne pucha hai ki konsi file ke saath hm work kr rahe hai jb hmne demo.txt file ko add kra tabh manually alg se. 
// Output --> .txt becz my Path at end includes demon.txt file.

// 2). Directory ka naam niklata hai.
console.log(path.dirname(myPath))

// 3).  File ka naam nikalta hai.
console.log(path.basename(myPath))  
// Output --> demo.txt

console.log(path.join("c:/", "programs\\demo.txt"))
// isme c:/ programs ke baad demo.txt add karega ye path add krta hai.


// 4). path.resolve() 
// Absolute path banata hai(current working directory se). 
const fullPath = path.resolve("folder", "file.txt");
console.log(fullPath);
// Before resolve() use --> C:\Users\kumar\Downloads\Full Stack\Full-Stack-practice\Node.JS\practice 87>
// After resolve() use --> C:\Users\kumar\Downloads\Full Stack\Full-Stack-practice\Node.JS\practice 87\folder\file.txt

// 6). path.parse()
// path ko tod deta hai object ke form me.

const parsed = path.parse("C:\Users\kumar\Downloads\Full Stack\Full-Stack-practice\Node.JS\practice 87>");
console.log(parsed);

// 7). path.format()
// Obkect ko wapas path string me convert krta hai.

const formatted = path.format({
  root: 'C:',
  dir: 'C:',
  base: 'UserskumarDownloadsFull StackFull-Stack-practiceNode.JSpractice 87>',
  ext: '.JSpractice 87>',
  name: 'UserskumarDownloadsFull StackFull-Stack-practiceNode'
});
console.log(formatted);


/*
🔑 Summary

1). path.join() → safe join karne ke liye.
2). path.resolve() → absolute path banane ke liye.
3). basename, dirname, extname → path se parts nikalne ke liye.
4). parse & format → object form me todne/jodne ke liye.
5). Cross-platform compatible (Windows/Linux sab me same code chalega).
*/