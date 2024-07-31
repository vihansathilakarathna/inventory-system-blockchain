const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.createUser);
router.post('/login', userController.login);
router.get('/users', userController.getUsers);
router.post('/clients', userController.createClient);
router.get('/getUsersCount', userController.getUsersCount);


module.exports = router;