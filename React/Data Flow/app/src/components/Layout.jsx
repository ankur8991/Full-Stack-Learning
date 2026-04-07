import React, { useState } from 'react'
import Hero from './Hero'
import About from './About'

const Layout = (props) => {

  console.log(props)

  const [count, setCount] = useState(55)

  return (
    <div className='layout'>
        Layout
      <Hero naam={props.naam} num={count} />
      <About naam={props.naam} num={count} />
    </div>
  )
}

export default Layout
