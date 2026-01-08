import NotFound from "../../not-found";

export default async function Page({ params }) {

  const { slug } = await params; // pehle hi nikaal lo

  let languages = ["javascript", "Python", "ruby", "go", "java", "cpp", "cSharp"];

  if (languages.includes(slug)) {
    return <div>My Post: {slug}</div>;
  } else {
    return <NotFound />;
  }
}



// import { notFound } from "next/navigation";

//export default async function Page({ params }) {
//   const { slug } = await params; // pehle hi nikaal lo
//   let languages = ["JavaScript", "Python", "Ruby", "Go", "Java", "cpp", "cSharp"];
//   if (!languages.includes(slug)) {
//     notFound(); // 👈 yahin else ka kaam ho gaya
//   }

//   return <div>My Post: {slug}</div>;
// }
