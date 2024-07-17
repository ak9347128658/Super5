import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function UserLayout(props) {
    return (
        <>
         <NavBar/>   
         <div className='mt-10'>
         <Outlet/>
         </div>
        </>
    );
}

export default UserLayout;