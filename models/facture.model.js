const mongoose = require('mongoose');

const FactureModel = new mongoose.Schema({
    totalPrice : {
        type: Number,
        required : true
    },
    order : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    }
})