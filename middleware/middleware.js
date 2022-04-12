const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const User = require('../models/user.model');


    exports.verify = function(req, res, next){
        let accessToken = req.headers.authorization
        console.log(accessToken)
    
    
        if (!accessToken){
            return res.status(403).send("The user belonging to this token does no longer exist.")
        }
    
        let payload
        try{
          
            payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
            
            next()
        }
        catch(e){
            console.log(e);
            return res.status(401).send("sorry your token has expired or has a invalid signature")
        }
          
    next()
}


    exports.verifyIfAdmin = function(req, res, next){

        try {
            
            let accessToken = req.headers.authorization
        payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)

        let user = payload.role

        if (user = 'admin') {
            res.status(200).send('welcome admin')
        }else{

            res.send("sorry you're not allowed")
        }

        } catch (error) {
            res.status(400).send(error)
        }

        next()
    }

   