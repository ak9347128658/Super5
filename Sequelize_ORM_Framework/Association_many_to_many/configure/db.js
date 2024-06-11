const {Sequelize} = require('sequelize');

const db = new Sequelize("sequelize","root","root",{
    host:'localhost',
    dialect:'mysql'
});

module.exports = db;


// why we have exported 
// to make the structure of the table to create table automatically
// to make connection with the database 