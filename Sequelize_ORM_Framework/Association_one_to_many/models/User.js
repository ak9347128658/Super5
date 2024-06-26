const db = require('../configure/db')
const {DataTypes} = require('sequelize')

const User = db.define('user',{
    name:{
       type: DataTypes.STRING,
       allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});


module.exports = User;