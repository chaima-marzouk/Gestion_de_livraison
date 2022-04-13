const Facture = require('../models/facture.model');
const Order = require('../models/order.model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const User = require('../models/user.model');


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
            console.log('yey')
            res.send(req.orderStatus)
            
            break;
    
        case 'delivering':
        
            const delieverymanId = req.payload.id
            const order = await Order.findById(req.params.id);
    
            try{

                const orderId = req.body.orderId;
                const livreur = await Order.findById(req.body.orderId);
                const livreurId = livreur.id
                console.log(livreurId);
                console.log(livreurId)
                const order = await Order.findByIdAndUpdate(
                    orderId,
                   {$set: { livreur: livreurId }}
                   
                )

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
                })
            
                res.status(200).send(facture)
        
            } catch (error) {
                res.status(400).send(error)
            }
    
            break;
    
        default:
            break;
    }
}
