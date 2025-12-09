import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"lightgrey": "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"lightgrey": "" }} to="/login"><li>Login</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"lightgrey": "" }} to="/contact"><li>Contact Us</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
