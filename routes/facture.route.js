const express = require('express');
const router = express.Router();
const factureController = require('../controllers/facture.controller');


router.post('/newFacture', factureController.add);
router.post('/editFacture', factureController.edit);
router.get('/factures', factureController.getFactures);
router.get('/facture/:id', factureController.getSingleFacture);


module.exports = router;