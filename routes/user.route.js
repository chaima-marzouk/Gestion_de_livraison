const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyIfAdmin } = require('../middleware/middleware');
const mongoose = require('mongoose')

router.post('/newUser', verifyIfAdmin, userController.add);
router.post('/deleteUser/:id',verifyIfAdmin, userController.remove);
router.post('/updateUser/:id',verifyIfAdmin, userController.edit);
router.get('/getSingleUser/:id', userController.OneUser);
router.get('/users', userController.getUsers);
 

module.exports = router ;