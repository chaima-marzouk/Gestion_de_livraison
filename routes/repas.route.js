const express = require('express');
const router = express.Router();
const repasController = require('../controllers/repas.controller');


router.post('/newMeal', repasController.add);



module.exports = router ;