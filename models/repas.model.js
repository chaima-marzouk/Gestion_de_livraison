const mongoose = require('mongoose');

const repasSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    image : {
        type: String,
        // required : true
    },
    description : {
        type: String,
        required : true
    },
    prix : {
        type: Number,
        required : true
    }

});
    // repasSchema.virtual('Categorie', {
    //     ref: 'room',
    //     foreignField: 'hotel',
    //     localField: '_id'
    // });

const repas = mongoose.model('repas', repasSchema);
module.exports = repas;