const {DataTypes} = require('sequelize');
const db = require('../configure/db');


const Product = db.define('products',
{
  name:{
    type: DataTypes.STRING
  },
  price:{
    type: DataTypes.DECIMAL(10,2)
  },
}
,
{
  timestamps: true  
})

module.exports = Product;