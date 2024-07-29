const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/createOrder', orderController.createOrder);
router.delete('/deleteOrder/:orderID', orderController.deleteOrder);
router.get('/getOrders', orderController.getOrders);

module.exports = router;