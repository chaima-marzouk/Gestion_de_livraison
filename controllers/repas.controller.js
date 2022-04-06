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
exports.remove = async(req, res) => {

    try {
        const repas = await Repas.findById(req.params.id)
        await repas.remove()
        res.send({data}) 
    } catch (error) {
        res.send(error);
    }

}
exports.select = async(req, res) => {

    try {
        const repas = await Repas.find({})

        res.status(200).json({
            data: repas
        })
    } catch (error) {
        
        res.status(400).send(error)
    }
    
}