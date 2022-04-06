const Order = require('../models/repas.model');

exports.add = await (req , res) => {

    try {
        
        const order = await Order.create({
            status: req.body.status,
            adresse: req.body.adresse
        })

        res.status(200).send(order)

    } catch (err) {

        res.status(400).send(err)
        
    }
}