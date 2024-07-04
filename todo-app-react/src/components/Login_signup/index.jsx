import React from 'react'
import './LS.css'
export default function LoginSignUp() {
  return (
    <div className='logincontainer'>
        <div className='login'>
            <h1>Login</h1>
            <input id='lsemail' type='text' placeholder='Enter Your Email' />
            <input id='lspassword'  type='password' placeholder='Enter Your Password' />
            <button>Login/signup</button>
        </div>
    </div>
  )
}
