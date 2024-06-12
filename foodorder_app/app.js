const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const {setupDatabaseAssociations} = require('./models/index');
const ProductRoutes = require('./routes/Products');
const app = express();


app.use(bodyParser.json()); // Parses JSON requests

const PORT = process.env.PORT || 8080;

app.use(ProductRoutes);

const startapp = async () => {
  try{
    await setupDatabaseAssociations();
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
  }catch(error){
    console.error(error);
  }
}

startapp();
