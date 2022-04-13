const Order = require('../models/order.model');

exports.add = async (req, res) => {

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

exports.remove = async(req, res) => {

    try {
        
        const order = await Order.findById(req.params.id)
        await order.remove()

        res.send('order Deleted :) !')

    } catch (error) {
        
        res.status(400).send(error)

    }
}

exports.getOneOrderById = async(req, res, next) => {
    
    try {
        const order = await Order.findById(req.params.id);
        const status = order.status
        req.order = order
        // res.send(status)
        
    } catch (error) {
        console.log(error)
    }

    next()
}