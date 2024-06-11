const db = require('../configure/db');
const {DataTypes} = require('sequelize')

const Course = db.define('course',{
    name:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Course;

// create table courses (
//     id primary key auto_increment,
//     name varchar(255) not null
// )