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
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        default: null
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        default: null
    },
    meals: [

      {  type: mongoose.Schema.Types.ObjectId,
        ref: 'repas',
        require : true}

    ]
    
});


const order = mongoose.model('order' , orderSchema);

module.exports = order;