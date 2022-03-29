
const mongoose = require('mongoose');

const repas_orderSchema = new mongoose.Schema({
    
    contité : {
        type: Number,
        required : true
    }

});

const repas_order = mongoose.model('repas_order', repas_orderSchema);
module.exports = repas_order;