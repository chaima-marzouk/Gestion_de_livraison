const Categorie = require('../models/repas_categorie.model');

exports.add = async(req, res) => {
    // const isNewType = await Categorie.isThisCategorieInUse("test");
    // if(!isNewType)
    // return res.json({
    //     success : false,
    //     message : "This categorie already exists , Please ener a new type :) , thank you !"
    // })

    try {
        const categorie = await Categorie.create({
            type: req.body.type
        })

        res.status(200).send(categorie)

    } catch (error) {
        console.log(error);
    }
    
}

exports.select = async(req, res) =>{
    try {
        const categories = await Categorie.find({})

        res.status(200).json({
            data: categories
        })
    } catch (error) {
        
        res.status(400).send(error)
    }
}

exports.remove = async(req, res) =>{
    try {
        const categorie = await Categorie.findById(req.params.id)
        await categorie.remove()
        res.send({data})
    } catch (error) {
        res.send(error)
    }
}