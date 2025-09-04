import { writeFile, readFile } from "fs/promises";



writeFile("example2.txt", "1st write: This is example 2 file created by Async writeFile.")
  .then(() => {
    console.log("✅ 1st write done");
    return readFile("example2.txt", "utf8");
  })
  .then(data => {
    console.log("📖 After 1st read:", data);
    return writeFile("example2.txt", "2nd write: Again written by Async writeFile.");
  })
  .then(() => {
    console.log("✅ 2nd write done");
    return readFile("example2.txt", "utf8");
  })
  .then(data => {
    console.log("📖 After 2nd read:", data);
    return writeFile("example2.txt", "3rd write: Again written by Async writeFile.");
  })
  .then(() => {
    console.log("✅ 3rd write done");
    return readFile("example2.txt", "utf8");
  })
  .then(data => {
    console.log("📖 After 3rd read:", data);
    return writeFile("example2.txt", "4th write: Again written by Async writeFile.");
  })
  .then(() => {
    console.log("✅ 4th write done");
    return readFile("example2.txt", "utf8");
  })
  .then(data => {
    console.log("📖 Final read:", data);
  })
  .catch(err => {
    console.error("❌ Error aaya:", err);
  });

/*
🔹 Ab yahan kya hua?
 . Har step ek Promise return karta hai (writeFile, readFile).
 . Hum chain banate gaye .then() ke through.
 . Agar kahin error aaya to .catch me chala jayega.
 . Callback hell → seedha straight line me flow 🚀.
*/