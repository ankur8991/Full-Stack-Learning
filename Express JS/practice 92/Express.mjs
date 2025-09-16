// You have to write a Node.js program to clear  clutter inside of a directory and organize the contents of that directory into differnet folders.

// For Example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. ANkur.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. Ankur.pdf

// This Forms we can organize the files in different folders:
// jpg/name.jpg/cat.jpg
// png/name.png
// pdf/this.pdf/Ankur.pdf
// zip/Ankur.zip/Rohan.zip


import fs from "fs/promises"

let files  = await fs.readdir('./')  
console.log(files)


const extensions = ['jpg', 'png', 'exe', 'pdf', 'zip'];

for (const ext of extensions) {
      // Create folder if not exists
      try {
            await fs.mkdir(ext);
      } catch (err) {
            // Ignore error if folder exists
      }
}

for (const item of files) {
      const parts = item.split('.');
      if (parts.length < 2) continue; // skip files without extension
      const ext = parts.pop().toLowerCase();
      if (extensions.includes(ext)) {
            const oldPath = `./${item}`;
            const newPath = `./${ext}/${item}`;
            try {
                  await fs.rename(oldPath, newPath);
                  console.log(`Moved ${item} to ${ext}/`);
            } catch (err) {
                  console.error(`Error moving ${item}:`, err.message);
            }
      }
}
