import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
     <nav className='bg-gray-800 p-4'>
       <div className="container mx-auto flex justify-between items-center">
         <div className='text-white text-xl'>
            <Link to='/' className='text-white'>haven food</Link>
         </div>
         <div >
            <Link to='/login' className='text-white px-4 py-2 rounded hover:bg-gray-700'>login</Link>
            <Link to='/register' className='text-white px-4 py-2 rounded hover:bg-gray-700'>signup</Link>
         </div>
       </div>
     </nav>
    );
}

export default NavBar;