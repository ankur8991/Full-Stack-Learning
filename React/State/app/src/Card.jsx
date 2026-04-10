import { useState } from 'react'


function Card() {

  let [count, setCount] = useState(0)
  let [obj, setObj] = useState({
    name: 'ankur',
  })


  function increment() {
    //    setCount(count + 1)     // one way to change the count value in UI by the help of setterfunction by the help of useState variable changes in useState.

    // setCount(function(prev){         // second way to change the value in UI by setter function takes another function in useState.
    //     // console.log(prev)       // here the setCount function takes another function and these function by default holds one parameter and these parameter holds the value of the previous value we can assigns the useState that will they can holds.
    //     return prev + 1       // We know that react reflects those things we can returns and these values shows in the UI.
    // })

    // setCount((prev)=> {return prev + 1})      // setter function with the help of takes another function / arrow function.
    // setCount(prev=>  prev + 1)                   // setter function with the help of takes another function / arrow function with the minimal code of lines.

    // Functional updates works on current state value.
    setCount((prev) => { return prev + 1 }) // 1
    setCount((prev) => { return prev + 1 }) // 2
    setCount((prev) => { return prev + 1 }) // 3
    setCount(prev => prev + 1) // 4

    // setObj({...obj, age: 21 })

  }


  return (
    <>
      <h1>{count}</h1>
      {/* <h1>{obj.name}</h1> */}
      {/* <p>{obj.age}</p> */}
      <button onClick={increment} >click</button>
    </>
  )
}

export default Card