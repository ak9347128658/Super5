import React, { useEffect, useState } from 'react';

function UserRefComponent(props) {
    let [count,setCount] = useState(0);

    const increment = () => {
        setCount(count++)
    }

    const decrement = () => {
        setCount(count--);
    }

    useEffect(() => {
        console.log(count);

    },[count]);

    return (
        <div className="h-screen w-screen grid place-content-center">
            <div className="h-[200px] w-[200px] border border-black ">
                <h1 className="font-bold text-xl mt-10">count : {count}</h1>
                <button onClick={increment} className="btn btn-primary"  >Increment</button>
                <button onClick={decrement} className="btn btn-outline btn-accent">Decrement</button>
            </div>
        </div>
    );
}

export default UserRefComponent;