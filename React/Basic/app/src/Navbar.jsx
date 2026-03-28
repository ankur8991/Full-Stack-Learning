import React from 'react'

//  const Navbar = (props) => {     // We can recieve the data as we passes by the component Navu in the from app.jsx file like that <Navu title="Navbar" /> here we can recieve like const Navbar = (props)=> and the whole data takes in the object format. 
//     console.log(props)         
//   return (
//     <div>
//       {/* <h1>{JSON.stringify(props)}</h1>*/}  {/*that data we can recieve the in all object format we can display in the UI only string that's why we can convert it into string by using JSON.stringify() */}
//       <h1>{props.title}</h1>
//       <h1>{props.link}</h1>
//       <h1>{props.number}</h1>
//     </div>
//   )
// }


 const Navbar = ({title, number, link}) => {     
  return (
    <div>
      <h1>{title}</h1>
      <h1>{number}</h1>
      <h1>{link}</h1>
    </div>
  )
}



export default Navbar       // Here we can export as a default that's why when we can import as a variable we can treat them but path still we can write correct.