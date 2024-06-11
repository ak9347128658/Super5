const db = require('../config/db');
const {DataTypes} = require('sequelize');

const Role = db.define('role', {
    roleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},{
    timestamps:false,
    id:false
  });

module.exports = Role;

