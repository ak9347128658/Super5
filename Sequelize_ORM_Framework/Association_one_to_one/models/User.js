const db = require('../configure/db');
const {DataTypes} = require('sequelize')
const User = db.define('user',{
    id:{
      type:DataTypes.UUID,
      allowNull:false,
      defaultValue:DataTypes.UUIDV4
    },
    username: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
},{
    timestamps:true
})


module.exports = User;