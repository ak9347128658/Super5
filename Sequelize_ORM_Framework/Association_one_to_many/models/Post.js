const db = require('../configure/db')
const {DataTypes} = require('sequelize')

const Post = db.define('post',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content :{
        type:DataTypes.TEXT,
        allowNull:false
    }
})

module.exports = Post;