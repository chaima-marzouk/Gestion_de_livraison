const User = require('../models/user.model');
const mongoose = require('mongoose');


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

    try{

        // userId = req.params.id
        const user = await User.findById(req.params.id);
        Object.assign(user, req.body)
         user.save();
        res.send({data: user})
    }catch(err){
        res.send(err)
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

exports.getUsers = async(req, res) => {

    try {
        const users = await User.find();
        res.status(200).send({users})
        console.log(users)
    } catch (error) {
        res.send(error)
    }
}