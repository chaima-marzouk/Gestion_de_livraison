const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    status : {
        type: String,
        enum: [
            'ready',
            'delivering',
            'delivred'
        ],
        required : true,
        default: 'ready'
    },
    adresse : {
        required: true,
        type: String
    },
    livreur: {
        type: String,
        default: null
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    meals: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'repas',
        require : true
    }
});


const order = mongoose.model('order' , orderSchema);

module.exports = order;