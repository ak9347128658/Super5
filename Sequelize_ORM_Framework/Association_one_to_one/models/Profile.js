const db = require('../configure/db');
const {DataTypes} = require('sequelize')

const Profile = db.define('profile',{
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        defaultValue:DataTypes.UUIDV4
      },
     firstName:{
        type:DataTypes.STRING,
        allowNull:false
     },
     lastName:{
        type:DataTypes.STRING,
        allowNull:false
     }
},
{
  timestamps:false  
})


module.exports = Profile;