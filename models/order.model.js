const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    status : {
        type: String,
        enum: [
            'ready',
            'packged',
            'delivering',
            'delivred'
        ],
        required : true,
        default: 'ready'
    },
    adresse : {
        required: true,
        type: String
    }
});


const order = mongoose.model('order' , orderSchema);

module.exports = order;