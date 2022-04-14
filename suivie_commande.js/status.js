const Facture = require('../models/facture.model');
const Order = require('../models/order.model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const User = require('../models/user.model');
const nodemailer = require("nodemailer");


// exports.getOrderStatus = async(req, res) => {
//     try {
//         const order = await Order.findById(req.params.id);
//         console.log(order)
//         const status = order.status
        
//     } catch (error) {
//         console.log(error)
//     }

//     return status;
// };

exports.followOrder = async (req, res) => {

    switch ( req.order.status) {

        case 'ready':
            const delieverymanId = req.payload.id
            const order = await Order.findById(req.params.id);
    
            try{

                const orderId = req.body.orderId;
                const client = await Order.findById(req.body.orderId).populate('client')
                const clientId = client.client._id
                const order = await Order.findByIdAndUpdate(
                    orderId,
                    {$set: { client: clientId }}
                    
                    )
                    console.log(client)

                res.send({data: order})

            }catch(err){
                console.log(err)
            }
            
            break;
    
        case 'delivering':
        
            // const delieverymanId = req.payload.id
            // const order = await Order.findById(req.params.id);
    
            try{

                const orderId = req.body.orderId;
                const livreur = await Order.findById(req.body.orderId).populate('livreur')
                const livreurId = livreur.livreur._id
                const order = await Order.findByIdAndUpdate(
                    orderId,
                    {$set: { livreur: livreurId }}
                    
                    )
                    console.log(livreur)

                res.send({data: order})

            }catch(err){
                console.log(err)
            }
            
            break;
    
        case 'delivred':
    
            try {
                const price =  req.body.totalPrice;
                const orderId = req.body.orderId
                const facture = await Facture.create({
                    totalPrice : price,
                    order : orderId
                });

                const maFactureAenvoyer = await Facture.findById(facture.id).populate('order');
                // const orderInfos = await Order.findById(maFactureAenvoyer.order.id).populate('user');
                const MyOrderLivreur = await User.findById(maFactureAenvoyer.order.livreur);
                console.log(MyOrderLivreur);

                let transporter = nodemailer.createTransport({
                    host: "smtpout.secureserver.net",
                    secure: false,
                    secureConnection: false, 
                    tls: {
                    ciphers: "SSLv3",
                    },
                    requireTLS: true,
                    port: 465,
                    service: 'outlook',
                    debug: true, 
                    auth: {
                    user: `marzouk.chaima.892@outlook.fr`, 
                    pass: `@myoultlookaccount2000`, 
                    },
                });
            
                let info = await transporter.sendMail({
                    from: '"MARHABA APP 💌" marzouk.chaima.892@outlook.fr', 
                    to: `marzouk.chaima.892@gmail.com  `, 
                    subject: "facture de l'ordre",
                    text: "test", 
                    html: `<h1>Facture de l'order</h1> </br>
                            <h2> total price :  </h2> ${maFactureAenvoyer.totalPrice}, 
                            <h2> status :  </h2> ${maFactureAenvoyer.order.status}, 
                            <h2> Adresse </h2> ${maFactureAenvoyer.order.adresse}, 
                            <h2> livreur :  </h2> Mr. ${MyOrderLivreur.name} </br>
                            email:  ${MyOrderLivreur.email}
                            `, 
                });
            
                res.status(200).send(facture)
        
            } catch (error) {
                res.status(400).send(error)
            }
    
            break;
    
        default:
            break;
    }
}
