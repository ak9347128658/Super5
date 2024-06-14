const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {User,Role} = require('../models/index');
const dotenv = require('dotenv');
dotenv.config();

const register = async (req,res,next) => {
  try{
    const {
        username,
        email,
        password,
        logo
        } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const role = await Role.findByPk(2);
    // create user with role and add the role in user_roles table
    const user = await User.create({
        username: username,
        email: email,
        password: hashedPassword,
        logo: logo
    });
    await user.setRoles(role);
    await user.save();
    if(user){
        res.status(201).json({message: 'User Registered Successfully.'});
    }else{
        res.status(400).json({message: 'User Registration Failed or User Already exists.'});
    }
  }catch(error){
    console.log("Error in register function",error);
    res.status(400).json({message: 'User Registration Failed.'});
  }
   
}

const login = async (req,res,next) => {
   try{
    const {email,password} = req.body;                           

    const user = await User.findOne({where:{email:email}})
     if(!user){
       return  res.status(400).json({message: 'User not found.'});
     }
     const isMatch = await bcrypt.compare(password, user.password);
     if(!isMatch){
        return res.status(400).json({message: 'Invalid password.'});
     }else{
        const token = jwt.sign(
          {userId:user.userId,username:user.username,email:user.email,logo:user.logo},
          process.env.JWT_SECRET,
          {expiresIn: '24h'}
        );
        res.status(200).json({message: 'Authentication successfull.', token: token
            ,userId: user.id,username:user.username,email:user.email,logo:user.logo
        });
     }


   }catch(error){
    console.log('error',error);
     console.log("Error in login function");   
   }   
}


module.exports = {
  register,
  login
}