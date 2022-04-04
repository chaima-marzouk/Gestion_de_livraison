const router = require('express').Router();
const User = require('../models/user.model');



exports.register = async(req, res) => {

    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            phone_number: req.body.phone_number
        });

        res.send(200 , user);
       
    } catch(err){
        console.log(err)
    }
}

exports.signin = async(req, res) =>{

    try {
        
        const {email, password} = req.body;

        if (!email && !password) {
            return res.status(400).json({
                status: "fail",
                message: "Please provide email and password"
            })
        }
    } catch (error) {
        
    }
}