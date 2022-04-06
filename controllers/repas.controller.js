const Repas = require('../models/repas.model.js');

exports.add = async(req, res) => {
    try {
        const repas = await Repas.create({
            name : req.body.name,
            description : req.body.description,
            prix : req.body.prix
        })

        res.status(200).send(repas)
        
    } catch (error) {
        res.status(400).send(error)
    }
}