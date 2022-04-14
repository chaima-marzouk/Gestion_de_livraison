const Order = require('../models/order.model');
const jwt = require('jsonwebtoken');


exports.add = async (req, res) => {

    try {
        
        let meals = []
        req.body.meals.forEach(meal => {
            meals.push(meal.id)
        });

        const accessToken = req.headers.authorization
        const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        console.log(payload.id)
        
        const order = await Order.create({
            status: req.body.status,
            adresse: req.body.adresse,
            meals: meals,
            client :  payload.id
        })

        console.log(req.body);

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
        const order = await Order.findById(req.params.id).populate('meals').exec()
        const status = order.status
        req.order = order
        // res.send(status)
        
    } catch (error) {
        console.log(error)
    }

    next()
}