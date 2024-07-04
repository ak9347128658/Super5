import React from 'react'
import { Link, Navigate, NavLink,useNavigate } from 'react-router-dom'
import './Nav.css'
export default function NavBar() {
   const navigate = useNavigate();

   const backHandler = () =>{
      navigate(-1);
      // navigate('/loginsignup')
      // navigate('/about')
      // navigate('/',{replace:true, state:{description:"vinay"}})
   }

  // const myfunction = (isActive) => {
  //   console.log(isActive ? "i am active" : "i am not active")
  // }
 
  // myfunction(true);
  // myfunction(true);

  return (
    <div className='navbar'>
      <button className='backbutton' onClick={backHandler} >Back</button>
       <div className="logo">
         <h1>devdynamoToDo</h1>
       </div>
       <div className='navlinks'>
           {/* <Link to="/" className='navitem'>Home</Link>
           <Link to="/about" className='navitem'>About us</Link>
           <Link to="/contact" className='navitem'>Contact</Link>
           <Link to="/loginsignup" className='navitem'>Login/signup</Link> */}
           {/* <a href="/" className='navitem'>Home</a>
            <a href="/about" className='navitem'>About us</a>
            <a href="/contact" className='navitem'>Contact</a>
            <a href="/loginsignup" className='navitem'>Login/signup</a> */}
           <NavLink to="/"            style={({isActive}) => ({ color: isActive? "red" :"blue"})} className='navitem'>Home</NavLink>
           <NavLink to="/about"       style={({isActive}) => ({ color: isActive? "red" :"blue"})} className='navitem'>About us</NavLink>
           <NavLink to="/contact"     style={({isActive}) => ({ color: isActive? "red" :"blue"})} className='navitem'>Contact</NavLink>
           <NavLink to="/loginsignup" style={({isActive}) => ({ color: isActive? "red" :"blue"})} className='navitem'>Login/signup</NavLink>
       </div>
    </div>
  )
}
