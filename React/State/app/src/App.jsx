import React from 'react'
import { useState } from 'react'
import './App.css'
import Card from './Card'



function App() {

  // let [userData, setUserData] = useState({
  //   name: 'John Doe',                             // these initial data of state is always changes by the use of setUserData function because of when we can changes these data without these setterfunction we can not changes in the UI if we want to changes these data show in the UI we can use the setter function(setUserData) function.
  //   age: 30,
  //   email: 'john.doe@example.com',
  //   passion: 'coding'
  // })


  let arr = [1, 2, 3, 4, 5]


  return (
    <>
       {arr.map((item, index)=>{
          return <Card key={index}/>
       })}
    </>
  )
}

export default App