
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  // const inputRef = useRef()

  // const handleFocus = () => {
  //     inputRef.current.focus()        // inputref.current these indicates we have returns the references returns we can passed through in reference or .foucs() method gets returns us that referenced input we passed in the ref={inputRef} to gets focused.
  // }

//   const divRef = useRef()

//  const handleClick = () => {
//     // console.log(divRef.current)
//     divRef.current.style.backgroundColor = "blue"
//     divRef.current.style.borderRadius = "100%"
//     divRef.current.click()
//  }


  
  // const [count, setCount] = useState(0)
  // const countRef = useRef(0)    // but in the case of useRef() hook they can persists the value of old one whenever the state gets changed in the UI that's why we perfer the state with useRef() hook.
  // // let countvar = 0     // they cannot persists the old one value when gets re-render when states gets changed but in state case they can persists the value of old on value this behaviour comes whenever we use this with state.

  // const handleIncrement = () => {
  //   setCount(count + 1)          // whenever we change in state by the help of setCount funciton in useState re-render gets triggers that's times but we use in references by the help of useRef hook they cannot gets re-renders again and again.
  //   countRef.current += 1         // that's time we change in UI with the help of useRef hook by the passes of references in the hook they cannot gets re-render again and again.
  //   console.log(countRef.current)
  //   // countvar += 1
  //   // console.log(countvar)
  // }

  // useEffect(() => {
  //   console.log("Re render hau h")
  // })


  const [randomNumber, setRandomNumber] = useState(0)
  const renderCountRef = useRef(0)

  const generateRandomNumber = () => {
    const no = Math.floor(Math.random()*100)
    setRandomNumber(no)
  }

  useEffect(() => {
    console.log("Render gets trigger")
    renderCountRef.current += 1
  })

  return (
    <>
    {/* <input ref={inputRef} type="text" placeholder='Enter Name'/>
      <button onClick={handleFocus}>Focus</button> */}

    {/* <div onClick={() => {
      console.log("Div clicked by referenced passed into by input tag")
    }} ref={divRef} className='block'>blockquote</div>
    <button onClick={handleClick}>Focus</button> */}
     
     {/* <h1>{count}</h1>
    <button onClick={handleIncrement} >Increment</button> */}

     <h1>{randomNumber}</h1>
     <h1>Re-render Count : {renderCountRef.current}</h1>
    <button onClick={generateRandomNumber}>Random Number</button>


    </>
  )
}

export default App