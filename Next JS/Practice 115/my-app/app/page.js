"use client";
// import { useState, useEffect } from "react";
// import fs from "fs/promises";
import Navbar from "@/components/Navbar";

export default function Home() {
  // const [count, setcount] = useState(0)
  
  // console.log("I AM a component");
  // let a = fs.readFile("./app/page.js", "utf-8")
  // a.then(e=>{
  //   console.log(e)
  // })

  return (
    <div>
      
       I AM a component 

      <Navbar />

       {/* { count} */}
       {/* <button className="ml-5 bg-violet-500" onClick={() => setcount(count+1)}>Counter</button> */}
    </div>
  );
}
