const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller')

router.post('/newOrder' , orderController.add)




module.exports = router;