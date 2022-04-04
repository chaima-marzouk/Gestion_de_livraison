const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv').config();
const userRoute = require('./routes/user.route');
const app = express();
require('./models/db');


    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.use('/api/users', userRoute);

    app.get('/', (req, res) => {
    res.send('Bienvennue sur {gestion de livraison} app!')
    })



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});