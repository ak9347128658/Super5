import React,{createContext,useState} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const [isLogin,setIsLogin] = useState(false);
  const [user,setUser] = useState(null);
  const [pass,setPass] = useState(null);

 const registerFuction = (email,password) => {
        setUser(email);
        setPass(password);
      if(email === '' || password === ''){
         return [false,"Email or Password is empty"];
         }
    return [true,"Register Successful"];
 }
 const loginFunction = (email,password) => {
    if(email === '' || password === ''){
      return [false,"Email or Password is empty"];
    }
     if(email === user && pass === password){
        setUser(email);
        setPass(password);
        return [true,"Login Successful"];
     }
     else{
         return [false,"Email or Password is incorrect"];
     }
    }

    return (
       <AuthContext.Provider value={{user,setUser,registerFuction,loginFunction,isLogin,setIsLogin}}>
              {children}
        </AuthContext.Provider>
    );
}
