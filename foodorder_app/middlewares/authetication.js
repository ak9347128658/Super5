const dotenv = require('dotenv');
dotenv.config();
const {User} = require('../models/index');
const jwt = require('jsonwebtoken');

const verifytoken = (req,res,next) => {
    try{
        const fulltoken = req.headers.authorization;
        // console.log("fulltoken",fulltoken);
        const token = fulltoken.split(' ')[1];
        // console.log("token",token)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("decoded",decoded)
        req.userData = decoded;
        next();
    }catch(error){
        console.log("Error in verifytoken function",error);
        return res.status(401).json({message: 'Authentication failed.'});
    }
}

const isAdmin = async (req,res,next) => {
  const userId = req.userData.userId;
  const user = await User.findByPk(userId);
//   console.log("user",user);
    const roles = await user.getRoles();
    // console.log("roles",roles);
    // return res.status(200).json({roles:roles});
  for(let role of roles){
      if(role.name === 'ADMIN'){
          next();
          return;
      }
  }
    return res.status(403).json({message: 'Require Admin Role!'});
}

module.exports = {verifytoken,isAdmin};