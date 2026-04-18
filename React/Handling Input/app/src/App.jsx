
import { useRef, useState } from 'react'
import './App.css'

function App() {

  // const [state, setState] = useState('')

  // const inputRef = useRef(null)       // We can write these line to gets the initially value of the references is null.

  // function submit() {
  //   console.log(inputRef.current.value)       // isse hme targetted input field mil jata hai jaise controlled m e.target se milta tha vese hi like current=input so if we gets the input in the console so we can simply use the (inputRef.current) or in controlled Component we use these code like e.target or we wants the value of that we can pass the reference so we use the this code simply like inputRef.current.value or in controlled component funtion we write the simply these e.target.value to gets the value of the input.
  // }


  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')

  // const NameHandler = (e) => {
  //    setName(e.target.value)       // these line indicates our input data can now partially passed into the state because we can passed an input data into the setter function setName().
  // }

  // const EmailHandler = (e) => {
  //    setEmail(e.target.value)         
  // }

  // const clearHandler = () => {
  //    setName('')
  //    setEmail('')
  // }


  const [data, setData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  })


      console.log(data)

 
  // const nameHandler = (e) => {
  //   setData({...data, name: e.target.value})   // here we can gets all old initial data of the state in present by ...data spread operato then we can change in the only name value that why we use ({name: e.target.value}) these whole code in object handle that why we can we inner bracket like { // some code }.
  // }


  // const emailHandler = (e) => {
  //   setData(function(prev){
  //     return {
  //       ...prev,
  //       email: e.target.value
  //     }
  //   })
  // }

  const inputhandler = (e) => {
     const {name, value} = e.target
    //  setData({ ...data, [name]: value})
    setData(prev => ({...prev, [name] : value}))
  }


  const Clearhandler = () => {
    setData({
      name: '',
      email: '',
      phoneNumber: ''
    })
  }




  return (
    <>

      {/* <input type="text" value={state} placeholder='Enter your name?' onChange={(evObj) => {       // here the value prop/attribute is more important due to we can clear the value then their state of the input present data cann't gets change due to we can clear the value of the input in the setState function not in the input block name that's why we can write in the value attribute state name pass so that if the state gets changed then the input state and we can use state separatley both gets changed so we can says that when we can says by the help of value we can connected the to state.
                //  console.log(evObj.target.value)  // by default we gets the in the function eventObject and those eventObject we gets many things like target and eventObj.target we can finds which targeted value we gets like input so input gets and eveObject.target.value and these line we gets the targetted value we an write in the input like we can write anything the console we gets that their writted value in the inspect console or that value we can write in the input we gets in the state by the use of the state setter funciton.
                setState(evObj.target.value)    // we can gets into the value of the input block in the state by the use of SetterFunction of the UseState function.
      }} />        {/*We use here onChange eventListener whose works only on when their value gets changed so that their onChange entire functions gets runs.*/}

{/*
    <button onClick={() => setState('')}>Clear</button>

    <h2>{state}</h2>    With the help of input data puts in the state by the help of setter function in the UseState hook pre-built function we can render the state data in that type. */}

  {/* <input ref={inputRef} type="text" placeholder='Enter name' />
  <button onClick={submit}>Submit</button>
  <h1>{inputRef?.current?.value}</h1>    {/* so we cannot use these like the controlled component to write simply state name in that case in reference inputRef.current.value we gets an error initially references value is null so we can chaining by ternary operator like this inputRef?.current?.value these code of written we can also cannot render on the screen. */}

    
   {/* <br />
   <input type="text" placeholder='Enter Name' onChange={NameHandler} value={name} />  {/*We knows that we cannot link to state to the value this is more important when we gets the clear state data that's why we can link the value to state. */}
    {/* <br />
    <input type="text" placeholder='Enter Email' onChange={EmailHandler} value={email} /> 


  <button onClick={clearHandler}>Clear</button>

   <p>{name}</p>
   <p>{email}</p>  */}


   <br />
   <input 
   type="text"
    placeholder='Enter Name'
     onChange={inputhandler}
     value={data.name}
     name='name'
       /> 

   <br />

   <input
    type="text"
     placeholder='Enter Email'
      onChange={inputhandler}
       value={data.email}
       name='email'
       /> 

   <input
    type="text"
     placeholder='Enter phoneNumber'
      onChange={inputhandler}
       value={data.phoneNumber}
       name='phoneNumber'
       /> 


   <p>{data.name}</p>
   <p>{data.email}</p>
   <p>{data.phoneNumber}</p>


   <button onClick={Clearhandler}>Clear</button>


    </>
  )
}

export default App