import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home/></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login/></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact/></>
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User/></>
    },
  ]);

  return (
    <>
     
     
      <RouterProvider router={router} />  

    </>
  )
}

export default App
