import React from 'react'

// const Button = ({title, func}) => {
//   return (
//     <div>
//       <button onClick={func}>{title}</button>
//     </div>
//   )
// }

const Button = ({children, func}) => {
  return (
    <div>
      <button onClick={func}>{children}</button>
    </div>
  )
}

export default Button
