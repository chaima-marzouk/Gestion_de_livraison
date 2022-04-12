const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyIfAdmin } = require('../middleware/middleware');

router.post('/newUser', verifyIfAdmin, userController.add)


module.exports = router ;