const Repas = require('../models/repas.model.js');
const multer = require('multer');


const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `public/image/`)
        },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + "--" + file.originalname)
        console.log(file.originalname)
    }
})

exports.upload = multer({storage: fileStorageEngine}); 

exports.add = async(req, res) => {

    try {
        
        const images = req.files.map((file)=>{
            return file.path
        })

        const repas = await Repas.create({
            name : req.body.name,
            description : req.body.description,
            prix : req.body.prix,
            categorie: req.body.categorie,
            images: images,
            contité: req.body.contité
        })

        console.log(repas)

        res.status(200).send(repas)

    } catch (error) {

        res.status(400).send(error)
    }

}
exports.remove = async(req, res) => {

    try {
        const repas = await Repas.findById(req.params.id)
        await repas.remove()
        res.send({data}) 
    } catch (error) {
        res.send(error);
    }

}
exports.select = async(req, res) => {

    try {
        const repas = await Repas.find({}).populate('categorie')

        res.status(200).json({
            data: repas
        })
    } catch (error) {
        
        res.status(400).send(error)
    }

}

exports.findOne = async(req, res) => {

    try {
        
        const repas = Repas.findById(req.params.id);
        await repas.populate('categorie').execPopulate()

    } catch (error) {
        
    }
}