import React from 'react'
import { NavLink } from 'react-router-dom'
import "./eroor.css"

const Error = () => {
   
  return (
  
  <div>
  
  <h1 className='setStyle'>404 Error pages</h1>
  
  <p className='work'>Sorry, This page doesn`t exist</p>
  <NavLink className="eor" to="/">Go Back</NavLink>
  </div>
  
  )
}

export default Error




























// const ErrorMessage = ({children} )=>{
    

//     return(
//         <div
//         style={{
//             width:"100%",
//             padding:10,
//             marginBootam:10,
//             borderRadius:4,
//             backgroundColor:"orangered",
//             textAlign:"center",
//             color:"white",
//             textTransform:'capitalize',
//         }}
//         >
//         {children}
//         </div>

//     )
// }

// export default ErrorMessage