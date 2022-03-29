const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required:  [true, 'A User must have a name']
    },
    email : {
        type: String,
        required: [true, 'A User must have an email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide an email !!']
    },
    password : {
        type: String,
        required: [true, 'A user must have a passowrd'],
        minlength: 8,
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function(e) {
                return e === this.password;
            },
            message: 'Passwords are not the same !'
        }
    },
    phone_number : {
        type: Number,
        required:  [true, 'A User must have a phone_number']
    },
    role : {
        type: String,
        enum: [
            'admin',
            'user',
            'livreur'
        ],
        default: 'user',
        required: true
    }
});

const user = mongoose.model('user' , userSchema);
module.exports = user;