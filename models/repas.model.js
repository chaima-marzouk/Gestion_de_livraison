const mongoose = require('mongoose');

const repasSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    description : {
        type: String,
        required : true
    },
    prix : {
        type: Number,
        required : true
    },
    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Categorie',
        required : true
    },
    images: {
        type: [String],
        required : true
    },
    contité: {
        type: Number,
        required : true,
        default: 0
    }

});
    // repasSchema.virtual('Categorie', {
    //     ref: 'Categorie',
    //     foreignField: 'categorie',
    //     localField: '_id'
    // });

const repas = mongoose.model('repas', repasSchema);
module.exports = repas;