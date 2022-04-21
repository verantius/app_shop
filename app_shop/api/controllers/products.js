const mongoose = require("mongoose")


const Product = require("../models/product")

exports.products_get_all = (req, res, next) => {
    Product.find()
    .then(result => {
        res.status(200).json({
            wiadomosc: 'Lista wszystkich produktów',
            info: result,
        })
    })
    
    .catch((err) => console.log(err))
}

exports.products_add_new =  (req, res, next) => {
    //auth raczej powinno byc na 1 miejscu
    console.log(req.file)
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        productImage: req.file.path
    })
    product
        .save()
        .then((result) =>{
            res.status(201).json({
                wiadomosc: 'Dodano nowy produkt',
                info: result,
            })
        })
        .catch(err => console.log(err))
        
        
}

exports.products_get_by_id = (req, res, next) => {
    const id = req.params.id;
    Product.findById(id)
    .then((result) => {
        res.status(200).json({
            wiadomosc: 'sczczegóły produktu o nr ' + id,
            info: result,
        })
        
    })
    .catch(err => console.log(err))
} 

exports.products_change = (req, res, next) => {
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
}

exports.products_remove = (req, res, next) => {
    
    const id = req.params.id;
    Product.findOneAndDelete(id)
    .then(() => {
        res.status(200).json({wiadomosc: 'usuniecie produktu o nr ' + id })

    })
    .catch(err => console.log(err))

}
/*
exports.products_add_new =  (req, res, next) => {
    //auth raczej powinno byc na 1 miejscu
    console.log(req.file)
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        productImage: req.file.path
    })
    product
        .save()
        .then((result) =>{
            res.status(201).json({
                wiadomosc: 'Dodano nowy produkt',
                info: result,
            })
        })
        .catch(err => console.log(err))
        
        
}

exports.products_get_by_id = (req, res, next) => {
    const id = req.params.id;
    Product.findById(id)
    .then((result) => {
        res.status(200).json({
            wiadomosc: 'sczczegóły produktu o nr ' + id,
            info: result,
        })
        
    })
    .catch(err => console.log(err))
} 
-
/*
exports.products_add_new =  (req, res, next) => {
    //auth raczej powinno byc na 1 miejscu
    console.log(req.file)
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        productImage: req.file.path
    })
    product
        .save()
        .then((result) =>{
            res.status(201).json({
                wiadomosc: 'Dodano nowy produkt',
                info: result,
            })
        })
        .catch(err => console.log(err))
        
        
}
-
*/