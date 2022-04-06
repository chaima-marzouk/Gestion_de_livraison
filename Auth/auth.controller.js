const router = require('express').Router();
const User = require('../models/user.model');



exports.register = async(req, res) => {
    const isnewUser = await User.isThisEmailInUse(req.body.email);
    if(!isnewUser)
    return res.json({
        success: false,
        message: "this email is already in use, try signin"
    })

    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            phone_number: req.body.phone_number
        });

        res.status(200).send(user);
       
    } catch(err){
        console.log(err)
    }
}

exports.login = async (req, res, next) => {

    try {

        const { email, password } = req.body;

        if(!email && !password) {
            return res.status(400).json({
                status: "fail",
                message: "Please provide email and password!"
            });
        }

        const user = await User.findOne({ email }).select('+password');
        console.log(user);

        if(!user || !(await user.correctPassword(password, user.password))) {
            return res.status(401).json({
                status: "fail",
                message: "Incorrect email or password"
            });
        }

    //    else{
    //        res.send('yey!')
    //    }


    } catch (err) {
        return res.status(404).json({
            status: "fail",
            message: "Requested Fail !!"
        });
    }

};