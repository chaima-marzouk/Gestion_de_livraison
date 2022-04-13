const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const {verifyIfDelieveryman} = require('../middleware/middleware');
const {verifyIfTheRightDelieveryman} = require('../middleware/middleware');

router.post('/newOrder' , orderController.add);
router.post('/updateOrder',verifyIfDelieveryman, verifyIfTheRightDelieveryman )




module.exports = router;