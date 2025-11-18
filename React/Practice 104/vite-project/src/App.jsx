import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },

    {
      title: "Hey Another todo",
      desc: "I am a good todo also"
    },

    {
      title: "Hey I am a furneturie todo",
      desc: "I am a good todo but have some specific todo like furnetures"
    },

  ])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <button>{showbtn ? 'show' : 'hide'}</button>
      {/* { showbtn && <button onClick={() => setshowbtn(false)}>hide</button>} */}


 
     { todos.map(Todo => {
        return (
          <div key={Todo.title} style={{border: '1px solid black', margin: '2px', padding: '2px'}}>
            <h2>{Todo.title}</h2>
            <p>{Todo.desc}</p>
          </div>
        )
     })}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
