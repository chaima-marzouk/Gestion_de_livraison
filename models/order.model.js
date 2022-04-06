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
        type: String,
        required: true
    }
});


const order = mongoose.model('order' , orderSchema);

module.exports = order;