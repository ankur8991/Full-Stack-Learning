import { writeFile, readFile } from "fs/promises";

async function run() {
  try {
    // 1st write & read
    await writeFile("example2.txt", "1st write: This is example 2 file created by Async writeFile.");
    console.log("✅ 1st write done");

    let data = await readFile("example2.txt", "utf8");
    console.log("📖 After 1st read:", data);

    // 2nd write & read
    await writeFile("example2.txt", "2nd write: Again written by Async writeFile.");
    console.log("✅ 2nd write done");

    data = await readFile("example2.txt", "utf8");
    console.log("📖 After 2nd read:", data);

    // 3rd write & read
    await writeFile("example2.txt", "3rd write: Again written by Async writeFile.");
    console.log("✅ 3rd write done");

    data = await readFile("example2.txt", "utf8");
    console.log("📖 After 3rd read:", data);

    // 4th write & read
    await writeFile("example2.txt", "4th write: Again written by Async writeFile.");
    console.log("✅ 4th write done");

    data = await readFile("example2.txt", "utf8");
    console.log("📖 Final read:", data);

  } catch (err) {
    console.error("❌ Error aaya:", err);
  }
}

// Run function
run();


/*
🔑 Difference samajh le:
  . Promises (.then chaining) → thoda lambe chain jaisa lagta hai.
  . Async/Await → normal synchronous code jaisa lagta hai (seedha top-to-bottom).
  . Readability ✅ Debugging easy ✅
*/