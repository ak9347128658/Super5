const express = require('express');

const router = express.Router();

router.get("/",(req,res,next)=>{
    res.send("Word hellow...!");
 });

 router.get("/about",(req,res,next)=>{
    res.send("About page");
});

//path parameter
router.get("/about/:name",(req,res,next)=>{
   let {name} = req.params;
    res.send("About page "+name);
});

router.get("/about/:age/:price",(req,res,next)=>{
    let {age,price} = req.params;
    res.send("About page "+age+" "+price);
 });


//query parameter

router.get("/api/ak",(req,res,next)=>{
    let {name,age,price} = req.query;
    res.send("About page "+name+" "+age+" "+price);
 });


module.exports = router;