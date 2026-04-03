import './App.css'
import Card from './component/Card'

// A Component is a resuable piece of UI.
// Building blocks of every React app.
// Can be combined to form complex interfaces.

// A function that returns JSX.
// No need for this, simpler & cleaner.
// With Hooks, functional components repalaced most class components.

// Props = properties.
// Passed from parent to child.
// Read-only (cannot be changed inside child).
// Props make components dynamic & reusable.

// State mtlb data or har component ka apna kuch data hota hai or usse hi hm state bolte hai.
// koi vi data agr hm component ke andar bana rahe hai to vo hai state(khud ka data hai) mtlb data uska local component ka data or agr vo data bhr se received ho raha hai to vo hai props jo read-only hota hai.
// State = Data that changes inside component.
// Managed with useState in functional components.
// Props = external input, State = internal memory.

// Component composition = Nesting components inside others, Make UI modular, Small components combined ----> comples UIs.

// Component Lifecycle (class vs Hooks) = Mounting(mtlb avi load hua hai hmara component UI m), updating(state data changed jb hota hai vo condition hai ye), Unmounting(jb component remove ho raha hota hai mtlb screen bnd ho rhi hoti hi vo condition h or isme hm cleanup kuch krte hai), Class: componentDidMount, componentDidUpdate, componentWillUnmount, function: useEffect hook.

// Best Practices
// 1. Keeps components small & focused.
// 2. Use PascalCase for component names.
// 3. Reuse logic with custom hoks instead of duplicating.
// 4. Separate UI (presentational) from business logic (container components).

// Why components?
// 1. Reusability: Write once, use anywhere.
// 2. Maintainability: Easier to manage & update.
// 3. Readability: Clear structure, easier to understand.
// 4. Testability: Isolated units, easier to test.
// 5. Scalability: Large apps made manageable.

// Lifecycle managed with hooks.

// In the case of function 
// function square(para1, para2){             // We can also UI render using the function with the small letter but not to good as a component due to the readability and maintainability of the code because it is not clear that this is a component or not. So it is better to use the component for UI render.
//   return(
//     <div className='square'>
//       <h1>{para1}</h1>
//       <h1>{para2}</h1>
//     </div>
//   )
// }


// Component with props
// function Square(props){              // component name should start with capital letter not small letter otherwise it will be treated as html element and not as component.
//   // console.log(props)

//   return (
//     <div className='square'>
//       <h1>{props.name}</h1>               {/* here not confusion like we pass as function in first palce name and second one pass as age that confusion is not there because we are using the component and we can pass the props as an object and we can access the props using the dot notation like props.name and props.age */}
//       <h1>{props.age}</h1>
//     </div>
//   )
// }



function App() {

  return (
    <>
      <h1>Hello, React!</h1>

       {/* {square("Hello", "World")}      We can put the para1 value as pass the first h1 and in the second place we can write the para2 value positon strict when we can use function UI render because we can write the first letter small square() instead of Square() */}
       
       {/* <Square  age={21} name="ankur" />       Here we can write any position of the props because we are using the component and we can pass the props as an object and we can access the props using the dot notation like props.name and props.age or destructuring not using notation to clean and readable code. */}

       <Card title="phla" description="This is the first card" />
       <Card title="dusra" description="This is the second card" />
       <Card title="tisra" description="This is the third card" />
       <Card title="chautha" description="This is the fourth card" />
       <Card title="pancha" description="This is the fifth card" />

    </>
  )
}

export default App