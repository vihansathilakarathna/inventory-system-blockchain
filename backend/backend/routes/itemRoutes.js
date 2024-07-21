const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/getItem/:id', itemController.getItem);
router.post('/createItem', itemController.createItem);
router.put('/updateItem/:id', itemController.updateItem);
router.delete('/deleteItem/:id', itemController.deleteItem);

module.exports = router;
