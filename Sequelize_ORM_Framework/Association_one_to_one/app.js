const db = require('./configure/db');
const User = require('./models/User');
const Profile = require('./models/Profile');

User.hasOne(Profile ,{foreignKey:'userId',onDelete:'CASCADE'});
Profile.belongsTo(User, {foreignKey:'userId',onDelete:'CASCADE'})

const createUser = async (username,email) => {
     const userresponse = await User.create({
        username:username,
        email:email
     })

     console.log(userresponse)
}

const createProfile = async (firstName,lastName,userId) =>{
    await Profile.create({
       firstName:firstName,
       lastName:lastName,
       userId:userId
    })
}

const getUserwithProfile = async (userId) => {
    const user = await User.findByPk(userId,{
        include:Profile
    })

    console.log('user :',user?.dataValues)
}

const deleteUserwithProfile = async (userId) =>{
    const user = await User.findByPk(userId);   
    await user.destroy()
}

const dbconnection = async () => {
    await db.sync();
    
}

dbconnection();