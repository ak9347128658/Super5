import React from 'react';
import NavBar from './NavBar';
import Menu from './Menu';
function MainLayout(props) {
    return (
        <>
        <NavBar/>   
        <div className='mt-10'>
        {/* <Outlet/> */}
        <Menu />
        </div>
        </>
    );
}

export default MainLayout;