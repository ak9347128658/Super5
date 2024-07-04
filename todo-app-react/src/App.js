import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Home from './components/Home';
import LoginSignUp from './components/Login_signup';
import About from './components/About/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home title="Asif Khan" />} />
      <Route path='/loginsignup' element={<LoginSignUp/>} />
      {/* <Route path='/about/:id' element={<About/>} /> */}
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    {/* <Home/>
    <LoginSignUp/>
    <About/>
    <Contact/> */}
    </>
  );
}

export default App;
