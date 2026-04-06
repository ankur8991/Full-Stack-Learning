import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import Layout from './components/Layout'

// props when we can pass data outside by in components that is called as the props and the data is passed by the outside by the component in object format that is called as the props(properties because the on object the key-value pair is called as the property) but if the data inside the component is called as the state.
// Props stands for properties.
// They are inputs to a React component.
// Props allow you to pass data from a parent component to a child components.
// They are read-only (immutable inside the child component).

// Why do we need Props? 
// To make components resuable and dynamic.
// Instead of hardcoding values, we pass data via props.


function App() {

  const obj = {
    name: "John",
    age: 22,
    title: "John's Card",
    description: "This is John's card",
    theory: "This is the theory section"
  }

  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  function handleClick1() {
    console.log("Button Clicked by click me")
  }

  function handleClick2() {
    console.log("Button Clicked by click")
  }


  return (
    <>
    <div className='layout'>
      {/* <Card name="John" age={22}/>      {/*We can write here the name data passes as the data dynamic in the card first but in the case of javascript type we write js in the JSX the in curly braces but in the string case not mandatory to write in the between js in curly braces but in the case without string we write js we need to write in the between js in curly braces.*/}
      {/* <Card title="John's Card" />
      <Card description="This is John's card" />
      <Card theory="This is the theory section" />  */}

      <Card {...obj} />

      {/* <Card data={obj} isStudent={true}/>      Here we can sends the whole object as a prop and we can use the key here to pass as object is data and now we can access the data using the key */}
      {/* <Card ank={arr}/> */}
      {/* <div className='button'>
      <Button title="Click Me" func={handleClick1}/>         {/*Here the function name differnet but their key is same that is function key same use in the one as in component but their function is differnet that is make dynamic in of component.*/}
      {/* <Button title="click" func={handleClick2}/>
      </div> */} 
    
    {/* <Card content={<h2>Hello World</h2>} /> */}


    {/* <Button func={handleClick1} >
      click me
    </Button>
    <Button func={handleClick2}>
      click
    </Button> */}



 
    {/* <Layout title={"hello"}>                   {/* We can use the Layout component full like these format <Layout>Here we can write the props to takes in  the component</Layout> and the tag between props we can pass called as the children passed.*/}
      {/* <h1>This is the children props</h1>           {/* Here the children props is name fixed when we can receive it in the component because of we can send props in between layout tag thats why there prop sends name fixed like children.*/}
    {/* </Layout> */} 


    </div>
      </>
  
  )
}

export default App
