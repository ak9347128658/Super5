import './App.css'
import { Route, Routes } from "react-router-dom"
import UserLayout from './components/User/UserLayout'
import Login from './components/User/Login'
import Register from './components/User/Register'
import { useContext } from 'react'
import { AuthContext } from './mycontext/AuthConxtext'


function App() {
 const {isLogin,user} = useContext(AuthContext)
  return (
    <>
    <Routes>
       {!isLogin && 
       <Route path='/' element={<UserLayout />}>
           <Route path="login" element={<Login/>} />
           <Route path='register' element={<Register/>} />
       </Route>}
        {isLogin &&
        <Route path='/' element={<center><h1>Welcome {user} You have login success fully</h1></center>} />
     }
    </Routes>
    </>
  )
}

export default App
