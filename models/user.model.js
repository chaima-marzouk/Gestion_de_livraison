const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
        type: String,
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

userSchema.pre('save', async function(next) {

    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    this.passwordConfirm = undefined;
    next();

});

userSchema.statics.isThisEmailInUse = async function(email) {
    if(!email) console.log("Invalid Email")
  try {
    const client =  await this.findOne({email})
    if(client) return false
    
    return true;
  } catch (error) {
      console.log(error)
      return false
  }
}



userSchema.method.correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}
const user = mongoose.model('User' , userSchema);

module.exports = user;