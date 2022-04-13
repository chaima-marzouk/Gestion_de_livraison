const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const {verifyIfDelieveryman} = require('../middleware/middleware');
const {verifyIfTheRightDelieveryman} = require('../middleware/middleware');
const status = require('../suivie_commande.js/status')

router.post('/newOrder' , orderController.add);
router.post('/updateOrder',verifyIfDelieveryman, verifyIfTheRightDelieveryman );
// router.get('/get/:id', orderController.getOneOrderById);
router.post('/get/:id', orderController.getOneOrderById , verifyIfDelieveryman , status.followOrder);




module.exports = router;