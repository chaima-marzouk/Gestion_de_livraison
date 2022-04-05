const Categorie = require('../models/repas_categorie.model');

exports.add = async(req, res) => {
    const isNewType = await Categorie.isThisCategorieInUse(req.body.type);
    if(!isNewType)
    return res.json({
        success : false,
        message : "This categorie already exists , Please ener a new type :) , thank you !"
    })

    try {
        const categorie = await Categorie.create({
            type: req.body.type
        })

        res.status(200).send(categorie)
    } catch (error) {
        console.log(error);
    }
    
}