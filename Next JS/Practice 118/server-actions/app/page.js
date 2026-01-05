"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {

  let ref = useRef();

  return (
   <div className="w-1/2 mx-auto my-15" >
    <form ref={ref} action={(e)=> {submitAction(e); ref.current.reset();}} className="flex flex-col mt-10 border border-white p-10 rounded-lg" >
      <div>
        <label htmlFor="name">Name:</label>
        <input name="name" id= "name"className="text-black bg-white mx-4 mb-5" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input name="email" id= "email"className="text-black bg-white mx-4" type="text" />
      </div>
      <div>
        <button className="mt-6 border border-white px-5 py-2 rounded" >Submit</button>
      </div>
    </form>
   </div>
  );
}