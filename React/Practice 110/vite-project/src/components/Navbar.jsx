import React from 'react'
import { memo } from 'react';

const Navbar = ({adjective , getAdjective}) => {
    console.log("Navbar Rendered");
  return (
    <div>
      I Am a {adjective} Navbar.
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
