
import './App.css'

function App() {

  // function greet(){
  //   alert("Button clicked")
  // }

  // function handleInputChange() {
  //   console.log("Input gets changed now")
  // }

  // function testing1(e) {
  //   console.log(e.target.value)          // isse hm input block ke input value jo hm/user dega vo le skte hai or e.target ke hm kiss ko target kr rahe hai jaise iss case mai input ko kr rahe hai to input ka pura ka pura return krke dega hme pr e.target.value se uski value hm access kr skte hai hm.
  //   // console.log("We test somethings else")
  // }

  // function testing2(name) {   // jb hm as a argument pass krte hai event call krte time tbh hm function handle krte time uss time pr jaha function call krte hai jsx m tbh hm arrow function use krte hai kuch ese onClick={() => {}} ye phla function ab hm jvo function iske andar likhengai jisme hmne as a argumnet pass kra hai jo kuch esa hai onClick={() => {testing('Alpha')}} isse kya hoga jb user click krega just tbh hi chalega hamara code of logic jo hmne iske andar likha hai.
  //   console.log(name)   
  //   console.log("Hello how are you")
  // }

  // function submitHandler (e) {
  //      e.preventDefault()
  //      console.log("Submit ho gya form")
  // }

  return (
    <>

      {/* <h3 style={{backgroundColor: "red"}} >hello Ankur</h3>
      <button onClick={greet}>Click Me</button>
      
      <input onChange={handleInputChange} type="text" placeholder='Enter your name'/>
      
      
      <form onSubmit={handleInputChange} action="">
      <input type="text" placeholder='Enter email'/>
      <button>Submit</button>
      </form> 

      {/* <button onClick={testing1} >Click</button>  {/*jb vi hm event krte hai kuch vi kisi vi button ya kisi or chiz pr to vo hme kuch na kuch event object de raha hota hai or usse hm event of object bolte hai or hm uss ko hm handler function m access kr skte hai as a parameter or ye by default milta hai hme.*/}
      {/* <input type="text" onChange={testing1} /> */}

      {/* <button onClick={() => {testing2('Alpha')}}>Clicked</button> */}

      {/* <form onSubmit={submitHandler} action="">
        <input type="text" placeholder='Enter name' />
        <button type='submit' >Click</button>
      </form> */}


    </>
  )
}

export default App