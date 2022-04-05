const mongoose = require('mongoose');
const validator = require('validator');

const categorieSchema = new mongoose.Schema({
    Type: {
        type: String,
        required: [true, 'Please add meal type']
    }
});

const categorie = mongoose.model('Categorie', categorieSchema);

module.exports = categorie;