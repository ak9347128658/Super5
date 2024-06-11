const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const registerUser = async (req,res,next) =>{
  try{
    const {username :email,password} = req.body;
    const registerQuery = 'INSERT INTO users (username,password) VALUES (?,?)';
     
     const hashedpassword = await bcrypt.hash(password,10);
    const newUser = await db.execute(registerQuery,[email,hashedpassword]);
    
    if(newUser[0].affectedRows === 1){
      res.status(201).json({message: 'User Registered Successfully.'});
    }else{
        res.status(400).json({message: 'Failed to Register.'});
    }

  }catch(error){
    console.log(error);
    res.status(500).json({message: 'Failed to Register .'});
  }
}


const loginUser = async (req,res,next) =>{
   try{
    const {username : email,password} = req.body;
    const loginQuery = 'SELECT * FROM users WHERE username = ?';
    const user = await db.execute(loginQuery,[email]);
    
   // user[0] = [{id,username,password}]
    if(user[0].length === 0){
      return res.status(400).json({message: 'User not found.'});
    }
    // ak23115@gmail.com,Test@1234   ==> lsjdfl;asjfdl;sakdsfklsh
    const isMatched = await bcrypt.compare(password,user[0][0].password);
    
    if(!isMatched){
      return res.status(400).json({message: 'invalid password.'});
    }

    // res.status(200).json({"message":"user login successfully.."})
    const token = await jwt.sign(
          {userId:user[0][0].id,username:user[0][0].username},
          process.env.JWT_SECRET,
          {expiresIn: '2h'}
        )
    res.status(200).json(
      {
        "message":"Authentication successfull..",
        "token":token
      }
    );


   }catch(error){
      console.log(error);
        res.status(500).json({message: 'Failed to Login.'});
   }
}





module.exports = {registerUser,loginUser}