import React, {  useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {registerFuction} from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';

function Register(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
     const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handChange = (e) => {
      if(e.target.id === 'email'){
       setEmail(e.target.value); 
      }
      if(e.target.id === 'password'){
        setPassword(e.target.value);
      }
    }

    const submit = () => {
      dispatch(registerFuction(email,password));
       setTimeout(() => {
            navigate('/login');
            }, 2000);
    }

    return (
        <>
        <div className='w-full flex justify-center'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
            <div className="mb-4">
              <lable className="block text-gray-700 text-sm font-bold mb-2" for="email" >
                 Email
              </lable>
              <input type="text" id="email" placeholder='eg. ak2311581@gmail.com'
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               onChange={handChange}
                 />
              <lable className="block text-gray-700 text-sm font-bold mb-2" for="password" >
                    Password
                </lable>
                <input type="password" id="password" placeholder='********'
                onChange={handChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div>
                <button
                onClick={submit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Register
                </button>
            </div>
            <div className=''>
                <p className=''>
                    Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                </p>
            </div>
        </div>
        </div>
        </>

    );
}

export default Register;