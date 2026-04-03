import React, { useState } from 'react'

const Card = ({title, description}) => {        // har card ka har component ka apna apna data hota hai chahe fir vo same component ko hi hm use kyu n kr rahe ho hr jagah.

   const [count, setCount] = useState(0)

   function increment(){
       setCount(count + 1)
   }

  return (
    <div className='card'>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Card