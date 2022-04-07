const express = require('express');
const router = express.Router();
const repasController = require('../controllers/repas.controller');


router.post('/newMeal', repasController.upload.array('images', 8),repasController.add);
router.get('/AllMeals', repasController.select);
router.post('/delteMeal/:id', repasController.remove);


module.exports = router ;