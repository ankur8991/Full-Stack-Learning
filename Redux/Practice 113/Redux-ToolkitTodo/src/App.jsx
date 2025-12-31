import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")

  return (
    <>
      <div className="md:container mx-3 md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2">
      <AddTodo input={input} setInput={setInput} />
      <Todos setInput={setInput} />
      </div>
    </>
  )
}

export default App
