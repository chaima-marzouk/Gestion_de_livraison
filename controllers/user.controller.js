const User = require('../models/user.model');

exports.add = async(req, res) => {

    try {
        
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            phone_number: req.body.phone_number
        });

        res.status(200).send(user)

    } catch (error) {

        res.status(400).send(error)
    }
}

exports.remove = async(req, res) => {

    try {
        
        const user = await User.findById(req.params.id)
        await user.remove()

        res.send('user Deleted :) !')

    } catch (error) {
        
        res.status(400).send(error)

    }
}

exports.edit = async(req, res) => {

    try {
        
        const user = await  User.findById(req.params.id);
        Object.assign(user, req.body)

        user.save();
        res.send(user)

    } catch (error) {
        res.send(error)
    }

}

exports.OneUser = async(req,res) => {

    try {
        const user = await User.findById(req.params.id);
       res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }

}