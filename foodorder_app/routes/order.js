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

router.get('/getorders',[verifytoken],getOrders);

router.get('/getorderbyid/:orderId',[verifytoken],getOrderById);

router.put('/updateorder/:orderId',[verifytoken,isAdmin],updateOrder);

module.exports = router;