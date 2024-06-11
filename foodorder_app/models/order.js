const db = require('../config/db');
const {DataTypes} = require('sequelize');

const Order = db.define('order', {
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0.0
    },
    status: {
        type: DataTypes.ENUM,
        values: ['pending', 'completed', 'cancelled'],
        allowNull: false,
        defaultValue: 'pending'
    }
},{
    timestamps:true,
    id:false
  });

module.exports = Order;

