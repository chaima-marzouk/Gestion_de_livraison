const mongoose = require('mongoose');

const FactureSchema = new mongoose.Schema({
    totalPrice : {
        type: Number,
        required : true
    },
    order : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    }
});

const facture = mongoose.model('facture' , FactureSchema);

module.exports = facture;