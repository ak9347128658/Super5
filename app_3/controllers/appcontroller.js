const  getapp = (req,res,next)=>{
    res.send("Word hellow...!");
 }

const getabout = (req,res,next)=>{
    res.send("About page");
}



const getaboutname = (req,res,next)=>{
    let {name} = req.params;
     res.send("About page "+name);
 }

 const getaboutageprice = (req,res,next)=>{
    let {age,price} = req.params;
    res.send("About page "+age+" "+price);
 }

 const getak = (req,res,next)=>{
    let {name,age,price} = req.query;
    res.send("About page "+name+" "+age+" "+price);
 }

module.exports = {getapp,getabout,getaboutname,getaboutageprice,getak};