import {createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const initialState = {
    isLogin: false,
    user:null,
    pass:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginFuction: (state,action) => {
         const {email,pass} = action.payload;
         state.user = email;
         state.pass = pass;
            state.isLogin = true;
            toast.success('Login Success');
       },
       registerFuction: (state,action) => {
        const {email,pass} = action.payload;
        state.user = email;
        state.pass = pass;
        toast.success('Register Success');
       }
    }
});


export const {loginFuction,registerFuction} = authSlice.actions;
export default authSlice.reducer;