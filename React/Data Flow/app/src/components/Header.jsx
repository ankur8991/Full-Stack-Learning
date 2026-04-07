import React from 'react'
import { useState } from 'react'

const Header = (props) => {
  console.log(props)

  const [headerData, setHeaderData] = useState('Header ka data hai ye for test of child to parent data flow')

  // props.func('Child ka data')      // this leads error because we can't directly call the function in props without any event handler or any other function but we can call it inside the event handler or any other function.

  function changeData(){
    props.func(headerData)
  }

  return (
    <div onClick={changeData} className='header'>
      Header
    </div>
  )
}

export default Header
