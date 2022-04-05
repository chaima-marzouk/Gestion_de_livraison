const mongoose = require('mongoose');
const validator = require('validator');

const categorieSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, 'Please add meal type']
    }
});

categorieSchema.statics.isThisCategorieInUse = async function(type) {
    if(!type) console.log("invalid type");
    try {
        const categ = await this.findOne({type})
        if(type) return false

        return true;
    } catch (error) {
        console.log(error)
        return false ;
    }
}

const categorie = mongoose.model('Categorie', categorieSchema);

module.exports = categorie; 