import React from 'react';
import Sum from './Sum';
function User({User ,title}) {
    return (
        <div>
            <h1>{title}</h1>
            <h1>User Name : {User.name}</h1>
            <h1>Age : {User.age}</h1>
            <h1>Email : {User.email}</h1>
            <h1>Location : {User.location}</h1>
            <h1>What is sum of a=5 and b=10 ? Ans :<Sum a={5} b={10} /></h1>
        </div>
    );
}

export default User;