"use server"

import fs from "fs/promises"


  export const submitAction = async (e) => {
    // This function will be called on form submission
    console.log(e.get("name"), e.get("email"));   // Hme ye name or email hamre server pr mil jayega  server mtlb backend m jaise hmare iss current case mai vsCode ke terminal mai run karenge.
    let a = await fs.writeFile("FormSubmission_Lists.txt", `Name: ${e.get("name")}\n Email: ${e.get("email")}`);
  }