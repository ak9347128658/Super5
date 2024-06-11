const {DataTypes} = require('sequelize');
const db = require('../configure/db');

const Example = db.define("example",
{    
    id:{
     type: DataTypes.UUID,
     primaryKey:true,
     allowNull:false,
     defaultValue:DataTypes.UUIDV4
    },
    stringField: {
       type:DataTypes.STRING,            // varchar(100) 
    },
    textField: {
        type:DataTypes.TEXT,             // text  0 - 65535       
    },
    integerField: {
        type:DataTypes.INTEGER,          // int 0  - 38943009940930
       
    },
    floatField: {
        type:DataTypes.FLOAT,            // float 0 - 3.4
       
    },
    decimalField: {
        type:DataTypes.DECIMAL(10,2),    // 99999999.99
       
    },
    dateField: {
        type:DataTypes.DATE,             // date
       
    },
    booleanField: {
        type:DataTypes.BOOLEAN,          // true and false
       
    },
    enumField: {
        type:DataTypes.ENUM('apple','banna','cherry'), // enum
       
    },
    jsonField: {
        type:DataTypes.JSON,             // json  {} ,[]
    },
 
},
{
timestamps:true
}
)


module.exports = Example;

// create table Example(
//     id              int           primary key auto_increment,
//     stringField     varchar(100)  not null,
//     textField       text,
//     integerField    int,
//     floatField      float,
//     decimalField    decimal(10,2),
//     dateField       date,
//     booleanField    boolean,
//     enumField       enum('apple','banna','cherry'),
//     jsonField       json
// );