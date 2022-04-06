const express = require('express');
const router = express.Router();
const repasController = require('../controllers/repas.controller');


router.post('/newMeal', repasController.add);
// router.get('/AllMeals', repasController);
router.post('/delteMeal/:id', repasController.remove);


module.exports = router ;