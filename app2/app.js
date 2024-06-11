const express = require('express');
const dotenv  =require('dotenv');
 dotenv.config();

const app = express();

const PORT = process.env.PORT;




app.get("/about",(req,res,next)=>{
    res.send("About page");
});

//path parameter
app.get("/about/:name",(req,res,next)=>{
   let {name} = req.params;
    res.send("About page "+name);
});

app.get("/about/:age/:price",(req,res,next)=>{
    let {age,price} = req.params;
    res.send("About page "+age+" "+price);
 });


//query parameter

app.get("/api/ak",(req,res,next)=>{          //http://localhost:3000/api/ak?name=veeresh
    let {name,age,price} = req.query;
    res.send("About page "+name+" "+age+" "+price);
 });



app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);  
});

