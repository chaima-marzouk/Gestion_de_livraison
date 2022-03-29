const router = require('express').Router();
const User = require('../models/user.model')


exports.register = async(req, res) => {

    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm
        });
       
    } catch(err){
        console.log(err)
    }
}