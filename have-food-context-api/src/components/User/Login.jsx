import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <div className='w-full flex justify-center'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md '>
            <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
            <div className="mb-4">
              <lable className="block text-gray-700 text-sm font-bold mb-2" for="email" >
                 Email
              </lable>
              <input type="text" id="email" placeholder='eg. ak2311581@gmail.com'
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 />
              <lable className="block text-gray-700 text-sm font-bold mb-2" for="password" >
                    Password
                </lable>
                <input type="password" id="password" placeholder='********'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Login
                </button>
            </div>
            <div className=''>
                <p className=''>
                    Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
                </p>
            </div>
        </div>
        </div>
    );
}

export default Login;