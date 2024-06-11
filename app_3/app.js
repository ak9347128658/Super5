const express = require('express');
const app = express(); 
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT
const approuter = require('./routers/approuter');


app.use("/api/",approuter);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});