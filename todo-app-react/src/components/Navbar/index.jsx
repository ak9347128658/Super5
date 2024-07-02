import React from 'react'
import './Nav.css'
export default function index() {
  return (
    <div className='navbar'>
       <div className="logo">
         <h1>devdynamoToDo</h1>
       </div>
       <div className='navlinks'>
           <div className='navitem'>Home</div>
           <div className='navitem'>About us</div>
           <div className='navitem'>Contact</div>
           <div className='navitem'>Login/signup</div>
       </div>
    </div>
  )
}
