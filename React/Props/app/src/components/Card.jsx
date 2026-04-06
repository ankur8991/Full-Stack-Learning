import React from 'react'

// Normal access of the props in the card component using dot notation access the object keys for the access of their keys data.
const Card = (props) => {
    console.log(props)
  return (
    <div className='card'>
      {props.name}  {props.age} {props.title} {props.description} {props.theory}
    </div>
  )
}


// Desturcturing props in the card component simple way to access the props data without using the dot notation we can direclty access the data by their keys by the destructuring of the props but one condition is followed keys exact name used in the components passes use in the time of the destructures.
// const Card = ({name, age, title, description, theory}) => {
//     // when we pass by the components data in the card component and recivee in that card component we cannot change in the props data because the props data is immutable we can read only then they can recived data in the component.
//     console.log({name, age, title, description, theory}) 
//   return (
//     <div className='card'>
//       {name}  {age} {title} {description} {theory}
//     </div>
//   )
// }


// const Card = ({data, isStudent}) => {             // here the data is another object thats why we can access their in the card component to destructuring the data in the card component and we can access the data by their keys in the data object.
//     const {name, age, title, description, theory} = data
//     console.log(name, age, title, description, theory, isStudent)        // here we can recive the whole object in the card component we can pass in the component so here the data we can recieved in the object in object that why we can destructuring also of the data object in above line.
//   return (
//     <div className='card'>
//     </div>
//   )
// }


// Props as recive in the array from the card component.
// const Card = ({ank}) => {             
//       console.log(ank)
//     return (
//     <div className='card'>
//         <ul>
//             {ank.map((value, index) => {
//                 return <li key={index}>{value}</li>
//             })}
//         </ul>
//     </div>
//   )
// }


// Props as JSX Elements.
// const Card = ({ content }) => {             
//      console.log(content)
//     return (
//     <div className='card'>
//          {content}
//     </div>
//   )
// }



export default Card