import React from 'react';
import { useState,useEffect } from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

function Greeting(props) {

    const [whatyouwant, setWhatyouwant] = useState(true);

    const handleClick = () => {
        setWhatyouwant(!whatyouwant);
    }

    useEffect(()=>{
     console.log("i am  useEffect")
    },[whatyouwant]);


    return (
        <div>
           {whatyouwant === true && <UserGreeting />}
           {whatyouwant === false && <GuestGreeting />} 
              <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Greeting;