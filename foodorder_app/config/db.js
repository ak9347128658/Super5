const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host:process.env.DB_HOST,
    dialect:'mysql'
});

module.exports = db;


// why we have exported 
// to make the structure of the table to create table automatically
// to make connection with the database 