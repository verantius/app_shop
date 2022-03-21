const express = require("express")
const mongoose = require("mongoose")

//wyciaganie routeru
const router = express.Router()

//Import modelu produktu

const Product = require("../models/product")

//ladowanie plikow
const multer  = require('multer')

//zmiana miejsca przechowywania plików i nazwy
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/') //tu zmiana katalogu
    },
    filename: function (req, file, cb) {
      cb(null,new Date().toISOString().replace(":","_").replace(":","_") + file.originalname) //tu zmiana nazwy
    }
  })
//filtracja plikow - akceptacja jedynie jpg
function fileFilter (req, file, cb) {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null,true)
    } else {
        cb(null, false)
    }
}

const upload = multer({ storage: storage, limits:{
    fileSize: 1024*1024*5,
}, 
    fileFilter: fileFilter,
})

router.get('/', (req, res, next) => {
    Product.find()
    .then(result => {
        res.status(200).json({
            wiadomosc: 'Lista wszystkich produktów',
            info: result,
        })
    })
    
    .catch((err) => console.log(err))
})
router.post('/', upload.single('productImage'), (req, res, next) => {
    console.log(req.file)
    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        productImage: req.file.path
    })
    product
        .save()
        .then(result =>{
            res.status(201).json({
                wiadomosc: 'Dodano nowy produkt',
                info: result,
            })
        })
        .catch(err => console.log(err))
        
        
    })
    router.get("/:id", (req, res, next) =>{
        const id = req.params.id;
        Product.findById(id)
        .then((result) => {
            res.status(200).json({
                wiadomosc: 'sczczegóły produktu o nr ' + id,
                info: result,
            })
            
        })
        .catch(err => console.log(err))
    })
    router.put("/:id", (req, res, next) =>{
        const id = req.params.id;
        Product.findByIdAndUpdate(
            id, 
            {
            name: req.body.name,
            price: req.body.price
            },
            {
                new:true,
            }
        )
            .then((result) =>{
                res.status(200).json({
                    wiadomosc: 'zmiana produktu o nr ' + id,
                    info: result,
                    
                })
            })
            .catch(err => console.log(err))
})
router.delete("/:id", (req, res, next) =>{
    const id = req.params.id;
    Product.findOneAndDelete(id)
    .then(() => {
        res.status(200).json({wiadomosc: 'usuniecie produktu o nr ' + id })

    })
    .catch(err => console.log(err))

})
// :- wartosc, zmienna
module.exports = router