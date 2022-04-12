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

        console.log(err)
    }
}

