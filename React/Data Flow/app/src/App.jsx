import './App.css'
import Header from './components/Header.jsx'
import Layout from './components/Layout.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'


// React is all about data -- how it moves from one component to another defines how your app works.
// All about data to changes in the data to changes the UI of the app that's why we can seriously handle the data(and on the eyes of data always) to changes the UI.
// React follows one-way data flow (top --> down) means when data changes then the UI automatically changes but not we can't changes in UI to changes in data until and unless we can explicitly changes the UI too changes the data that is called as the one-way binding.

// Natural FLow : Parent --> Child
// React is designed with one-way data binding: data goes from top(parent) --> down(child).
// This is the default and "natural" direction of data flow.
// Example: Props are the natural way of passing data.

function App() {

  // here the data variable sets the initial value to 0/or we wants our desires, then setData updates it
  const [data, setData] = useState('Alpha')

  function kabutar(data) {
      //  console.log(data)
      setData(data)
  }

  console.log(data)
    
  return (
    <>
        <Header naam={data} func={kabutar}/>  
        <Layout naam={data}/>   
        <Footer naam={data}/> 
    </>
  )
}

export default App