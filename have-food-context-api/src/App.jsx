import './App.css'
import { Route, Routes } from "react-router-dom"
import UserLayout from './components/User/UserLayout'
import Login from './components/User/Login'
import Register from './components/User/Register'


function App() {

  return (
    <Routes>
       <Route path='/' element={<UserLayout />}>
           <Route path="login" element={<Login/>} />
           <Route path='register' element={<Register/>} />
       </Route>
    </Routes>
  )
}

export default App
