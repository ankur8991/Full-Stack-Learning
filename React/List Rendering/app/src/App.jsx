
import './App.css'
import UserCard from './UserCard'

function App() {

  // const arr = ["John", "Alpha", "karan"]

  const arr = [
    {id: 1, name: "John", age: 25},
    {id: 2, name: "Alpha", age: 20},
    {id: 3, name: "karan", age: 15},
    {id: 4, name: "YorkDas", age: 14},
    {id: 5, name: "FulChand", age: 25},
  ]

//   const data = [
//     ["HTML", "CSS", "JavaScript", "React"],
//     ["NODE", "MongoDB", "Express"]
// ]

  return (
    <>

    {/* Normal array render */}
      {/* {arr.map((item, index)=>(
         <h1 key={index}>{item}</h1>          // hme pta hai react m jb vi koi chiz  hme render krwani hoti hai to hme usse return krvana padhta hai agr return nhi krvana hai to hme arr.map(() => {// ye curly braceses ki jagah parathesis use krna hai}) jo ki h kuch esa arr.map(() => (// ye use krna hai agr hme return nhi krvana hai to koi vi chiz jo hm UI m render krvani hai)) or hm jb ( // ye wala syntax use krte h curly braceses ki jagah) tbh hm iske andar console nhi kr pate hai to hm dusra syntax use krte hai niche de rakha hai .
     ))} */}


    {/* Normal array render with console + return render syntax */}
      {/* {arr.map((item, index)=>{
        console.log(index)
        return (
          <h1 key={index}>{item}</h1>          // isme hm console + render component dono kr paa rahe hai.
        )
     })} */}


     
{/* Array of object render */}
   {/* {arr.map(user => {
    return (
        <li key={user.id}>{user.name} -- {user.age} years old</li>   
    )
   })} */}



   {/* Nested array render */}
   {/* {data.map((group, i) => {
    console.log(data)
    return (
      <ul key={i}>
      {group.map((item, j) => (
        <li key={j}>{item}</li>
      ))}
    </ul>
    )
   })} */}


  {/* Nested array render different syntax*/}
   {/* {data.map((SubArray, i) => {
      console.log(SubArray)
      return (
        <div key={i} >
          {SubArray.map((item, j) => {
            return (
              <h1 key={j}>{item}</h1>
            )
          })}
        </div>
      )
   })} */}



   {/* Resuable component render uses */}
   {arr.map((users) => {
       return (
         <UserCard key={users.id} userDetails={users}/>
          // users.age > 18 && <UserCard key={users.id} userDetails={users}/>
       )
   })}




    </>
  )
}

export default App