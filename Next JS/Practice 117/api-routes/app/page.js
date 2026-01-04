"use client"
import Image from "next/image";

export default function Home() {

  const handleClick = async () => {
    let data = {
      name: "Ankur",
      email: "GnLgj@example.com",
      role: "admin/Senoir-Developer"
    }
    let a = await fetch("/api/add", {method: "POST", headers: {
      "Content-Type": "application/json"},
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Next.js Api routes demo</h1>
      <button onClick={handleClick} >click me to get data</button>
    </div>
  );
}
