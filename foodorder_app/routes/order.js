const express = require('express');
const router = express.Router();
const {
    createOrder,
    getOrders,
    getOrderById,
    updateOrder
}  = require('../controllers/Order');

const {verifytoken,isAdmin} = require('../middlewares/authetication');

router.post('/createorder',[verifytoken],createOrder);

router.get('/getorders',getOrders);

router.get('/getorderbyid/:orderId',getOrderById);

router.put('/updateorder/:orderId',updateOrder);

module.exports = router;