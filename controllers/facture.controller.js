const Facture = require('../models/facture.model');


exports.add = async (req, res) => {
    try {
        const price =  req.body.totalPrice
        const facture = await Facture.create({
            totalPrice : price
        })
    
        res.status(200).send(facture)

    } catch (error) {
        res.status(400).send(error)
    }

    
}

exports.edit = async(req, res) => {
    try {
        const facture = await Facture.findById(req.params.id);
        Object.assign(facture, req.body)

        facture.save();
        res.send({data: facture})
    } catch (error) {
        res.send(error)
    }
}

exports.getFactures = async(req, res) => {
    try {
        const facture = await Facture.find().populate('order')
        res.send( facture)
    } catch (error) {
        res.send(error)
    }
}

exports.getSingleFacture = async(req, res) => {
    try {
        const facture = Facture.findById(req.params.id).populate('order')
        res.status(200).send(facture)
    } catch (error) {

        res.status(404).send("not found !")
        
    }
}

