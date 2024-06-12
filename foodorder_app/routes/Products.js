const {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProductbyId
}  = require('../controllers/Products');
const express = require('express');
const router = express.Router();

router.post('/createproduct',createProduct);

router.get('/products',getAllProducts);

router.get('/products/:productId',getProductById);               // https://localhost:3000/products/:productId

router.delete('/products/:productId',deleteProduct);          // https://localhost:3000/products/:productId

router.put('/products/:productId',updateProductbyId);          // https://localhost:3000/products/:productId

module.exports = router;