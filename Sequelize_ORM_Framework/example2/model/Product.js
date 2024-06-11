const {DataTypes} = require('sequelize');
const db = require("../configure/db");


const Product = db.define('products',
{
    id:{
       type: DataTypes.UUID,
       primaryKey: true,
       defaultValue: DataTypes.UUIDV4        
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price :{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    decription:{
        type: DataTypes.TEXT,           // upt ot 65535 characters
        allowNull: false
    },
    quantity:{
        type: DataTypes.INTEGER,       
        allowNull: false
    },
    status:{
        type: DataTypes.ENUM('active','inactive','discontinued'),
        allowNull: false,
        defaultValue: 'active'
    },
    tags:{
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: []
    },
},
{
  timestamps: true,
}
)

module.exports = Product;

//
// create table products(
//     id varchar(255) primary key,
//     name varchar(255) not null,
//     price decimal(10,2) not null,
//     decription text not null,
//     quantity int not null,
//     status enum('active','inactive','discontinued') not null default 'active',
//     tags json,
//     created_at timestamp not null,
//     updated_at timestamp not null
// );