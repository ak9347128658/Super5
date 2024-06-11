const express = require('express');
const dotenv  =require('dotenv');
const app = express();
const approuter = require('./routes/approuter');

dotenv.config();
const PORT = process.env.PORT;

app.use(approuter);


app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);  
});

