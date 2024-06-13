const db = require('../config/db');
const {DataTypes} = require('sequelize');

const User = db.define('user', {
    userId:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      logo:{
        type:DataTypes.TEXT,
        allowNull:false
      }
},{
  timestamps:true,
  id:false
});

module.exports = User;

