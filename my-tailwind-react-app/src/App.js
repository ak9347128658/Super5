import './App.css';
// import Welcome from './components/Welcome';
// import User from './components/User';
import Greeting from './components/Greeting';
import { useState } from 'react';
function App() {

  // const userdetails = {
  //   name: 'John Doe',
  //   age: 25,
  //   email: 'ak2311581@gmail.com',
  //   location: 'Lagos, Nigeria'
  // }

  // let count = 0;
  // const [count, setCount] = useState(0);
  // const increment = () =>{
  //   setCount(count+1);
  //   console.log(count);
  // }

  // const decrement = () => {
  //   setCount(count-1);
  //   console.log(count);
  // }

  return (
    <>
    {/* <Welcome content="This is a  welcome page" title="My first page title" /> */}
    {/* <User User={userdetails} title="my title" /> */}
    {/* <h1>Count :{count}</h1>
    <button onClick={increment}><h1>Increment</h1></button>
    <button onClick={decrement}><h1>Decrement</h1></button> */}
     <p  className="myparam">I am h1</p>
    <Greeting />
    </> 
  );
}

export default App;
