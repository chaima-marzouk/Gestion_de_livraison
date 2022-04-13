const express = require('express');
const router = express.Router();
const factureController = require('../controllers/facture.controller');


router.post('/newFacture', factureController.add);


module.exports = router;