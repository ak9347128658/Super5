const {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProductbyId
}  = require('../controllers/Products');
const express = require('express');
const router = express.Router();

const {verifytoken,isAdmin} = require('../middlewares/authetication');

router.post('/createproduct',[verifytoken,isAdmin],createProduct);

router.get('/products',[verifytoken],getAllProducts);

router.get('/products/:productId',[verifytoken],getProductById);               // https://localhost:3000/products/:productId

router.delete('/products/:productId',[verifytoken,isAdmin],deleteProduct);          // https://localhost:3000/products/:productId

router.put('/products/:productId',[verifytoken,isAdmin],updateProductbyId);          // https://localhost:3000/products/:productId

module.exports = router;