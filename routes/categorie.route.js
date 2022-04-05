const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/repas_categorie.controller');

    router.post('/newCategorie', categorieController.add);
    router.get('/AllCategories', categorieController.select);
    router.post('/deleteCategorie/:id', categorieController.remove);

module.exports = router ;