const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv').config();
const userRoute = require('./routes/user.route');
const categorieRoute = require('./routes/categorie.route');
const repasRouter = require('./routes/repas.route');
const orderRoute = require('./routes/order.route');
const AuthRoute = require('./routes/Auth.route');
const factureRoute = require('./routes/facture.route');
const { notFound } = require('./middleware/error');
const { errorHandler } = require('./middleware/error');
const app = express();
require('./DB/db');


    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(cookieParser())

    // app.use(notFound);
    app.use(errorHandler);
    app.use('/api/users', AuthRoute);
    app.use('/api/categories', categorieRoute);
    app.use('/api/repas', repasRouter);
    app.use('/api/order', orderRoute);
    app.use('/api/user', userRoute);
    app.use('/api/facture', factureRoute);
    app.get('/', (req, res) => {
    res.send('Bienvennue sur {gestion de livraison} app!')
    })



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});