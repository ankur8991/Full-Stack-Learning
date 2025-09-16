                                    🔹 1. Import fs/promises
                                     import fs from "fs/promises"

                               Yaha hum ECMAScript Module (ESM) syntax use kar rahe hain (import).
                               fs/promises ka matlab hai humko promise-based functions milte hain (jisme await use kar sakte hain).


                                🔹 2. Read all files in current folder
                                       let files  = await fs.readdir('./')
                                       console.log(files)

                                . fs.readdir('./') current folder (./) ke andar ki sabhi file/folder names ek 
                                  array ke form me de deta hai.

                                . files ek array hoga, jaise:
                            ["photo.jpg", "notes.pdf", "program.exe", "music.mp3"]


                             🔹 3. Extensions ka list banaya
                               const extensions = ['jpg', 'png', 'exe', 'pdf', 'zip'];

                            . Ye wo extensions hain jinke liye tu folders banana chahta hai aur files sort karna 
                              chahta hai.

                             🔹 4. Folders create karna (agar na bane ho)
                             for (const ext of extensions) {
                                   try {
                                         await fs.mkdir(ext);
                                   } catch (err) {
                                         // Ignore error if folder exists
                                   }
                             }

                           . Ye loop har ek extension ke liye ek folder banane ki try karega.
                              Example: jpg/, png/, exe/, pdf/, zip/

                            . Agar folder pehle se bana hua hai → error aayegi → usko ignore kar diya (try-catch 
                              ke andar).

                            🔹 5. Har file ka extension nikalna
                            for (const item of files) {
                                  const parts = item.split('.');
                                  if (parts.length < 2) continue; // skip files without extension
                                  const ext = parts.pop().toLowerCase();


                            . item.split('.') → file ka naam dot (.) se tod deta hai.
                              Example: "photo.jpg".split('.') → ["photo", "jpg"]

                            . parts.pop() → last value nikal li (extension).
                            . Agar file ke naam me . hi nahi hai (jaise README) to usko skip kar diya.

                               🔹 6. File ko uske folder me move karna
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

                             . Agar extension list me hai (jpg, png, exe, pdf, zip), tabhi file ko move karo.
                             . fs.rename(oldPath, newPath) → file ko ek jagah se doosri jagah shift karta hai.
                                   . oldPath = current location
                                   . newPath = target folder ke andar
                              . Agar sab sahi hua → console log karega:
                                    Moved photo.jpg to jpg/
                              .Agar error aayi → error print karega.

                              🔹 7. Overall flow
                            . Current folder ke sabhi files read karo.
                            . Required folders (jpg, pdf, exe, etc.) create karo agar na bane ho.
                            . Har file check karo: extension hai ya nahi.
                            . Agar extension hai aur list me hai → usko uske respective folder me move kar do.
                            . Console me batao kya hua.



 