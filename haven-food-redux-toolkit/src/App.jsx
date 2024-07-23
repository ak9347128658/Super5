import React,{useState} from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import UserLayout from './components/User/UserLayout'
import Login from './components/User/Login'
import Register from './components/User/Register'
import MainLayout from './components/Main/MainLayout'
import { useSelector } from 'react-redux'

function App() {
 const {isLogin} = useSelector((state) => state.authReducer);
  return (
    <>
    <Routes>
      {!isLogin && 
       <Route path='/' element={<UserLayout />}>
           <Route path="login" element={<Login/>} />
           <Route path='register' element={<Register/>} />
       </Route>}
        {isLogin &&
        <Route path='/' element={<MainLayout />} />
         }
    </Routes>
    </>
  )
}

export default App
