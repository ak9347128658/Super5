const express = require('express'); 

const app = express();


// get,post,put,delete

app.get("/",(req,res,next)=>{
    res.send("Hello World");
})
 

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}); 