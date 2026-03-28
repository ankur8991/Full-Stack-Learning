import { useState } from 'react'
import './App.css'
// import Navu from './Navbar.jsx'     // Here the default export that's why er can write the Navu instead of Navbar because we can treat them as a variable.
// import { Nav } from './Navbar.jsx'    // Here the named exports that's why we can destrutures the Nav component exact same spelling and export the component is always first letter is Big all on the case not valid if the first latter is small.


// React look like HTML but behave like JavaScript.
// Components --> A component is a reusable piece of UI one component can contain others component is nothing but the we can treat as the function where we can write the HTML inside JavaScript and javaScript inside HTML and we can make the UI clean and reuseable using components another components passes.


// function Component() {            // In Component we can only one html tag returns not more then one if we can returns one or more then html then we can use div tag of html or <></> this tag to write on or more html tags in the returns components.
//   return (
//     <>
//       <h1>Hello This is Component</h1>
//       <Component2 />
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique non, quisquam reiciendis, voluptatum sint quam error labore quaerat saepe rem recusandae facilis corporis numquam! Aliquid, voluptatem optio. Laboriosam, blanditiis alias dolorum eius eligendi aut expedita, iste facilis vero ipsum rerum odio voluptates placeat tenetur?</p>
//     </>
//   )
// }


// function Component2() {
//   return(
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzkqJagInXu6ICYO1qLVCh5ZZeelp-mRwh0g&s" alt="" />
//   )
// }


// function App() {        // Here the function App is javaScript inside it we can write the HTML its called the JSX.
//   return (
//     <>
//     <Navu title="Navbar1" link="google.com" number={5}/>       {/*Here we can pass the properties as called as props means we can pass the data as a components like Navu and that data we can recieve the Navu file write there in that component like function can takes the parameter and that we can call as props function navbar (props) and the props is takes the full of object formate of data we can send by there full of data.*/}
//     <Navu title="Navbar2"  />
//     <Navu link="stackOverflow.com" />
//     {/* <Nav /> */}
//     <div>
//       Hello
//       <p>{2 + 2}</p>         {/* Here we can Write the HTML inside the JavaScript that is also knows as the JSX */}
//       <Component />     {/*This is the way of reusable component in another function/component and this is the way of call the component in another component <Component />*/}
//     </div>
//     </>

//   )
// }


// This is not good in when we use react they cannot changes in the UI that's why we can use the useState() in React.
// function App() {

//   let count = 1 
  
//   function increment() {      // Function and component is differnces of UI must be build in Component and function we can write the logic.
//       count++
//       console.log(count)
//   }

//   return(
//     <>
//       <button onClick={increment}>Increment</button>
//       {count}
//     </>
//   )
// }


// State = local data for a component changing state updates UI, React will React.
function App() {

   const [count, func] = useState(0)    // useState is a predefined method in react where they can returns the array and that array is contains two things one variable and second one is function that changes that variable is returns by the array and we can achieve these two things why the help of destrucutres of the array and that initial value we can set as we can put the useState(0) value passes and important point is we cannot changes there count  variable value changes directly that's why we given as the function that changes the value of that variable.

   function increment(){
    // func(1)
    func(count + 1)   // we can change variable count by the use of that function we can write in the useState() destructures the array and that arrray can contains these two things one is variable and second one is function.
   }

  return(
    <>
      <button onClick={increment}>Increment</button>
      {count}
    </>
  )
}

export default App



// Data Flow ----> React uses one-way data flow. Data flows from parent to child via props. State is local to a component.
// Hooks ----> Hooks is nothing but pre-builts function like useState, lifecycle, refs, and context in function components Only call hooks inside React functions(like components space in return before we can call that hooks like useState we can write and call in the above of return components written).