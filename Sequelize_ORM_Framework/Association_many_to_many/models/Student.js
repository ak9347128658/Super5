const db = require('../configure/db');
const {DataTypes} = require('sequelize');

const Student = db.define('student',{
    name:{
      type: DataTypes.STRING,
      allowNull:false
    },
    email:{
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    }
})


module.exports = Student;

// create table students(
//     id int primary key auto_increment,
//     name varchar(255) not null
//     email varchar(255) not null unique
// );