const express = require("express")
const mongoose = require("mongoose")

//wyciaganie routeru
const router = express.Router()

//Import modelu produktu

const Product = require("../models/product")

router.get('/', (req, res, next) => {
    res.status(200).json({wiadomosc: 'Lista wszystkich produktów'})
})
router.post('/', (req, res, next) => {
    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
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
    res.status(200).json({wiadomosc: 'sczczegóły produktu o nr ' + id })
})
router.put("/:id", (req, res, next) =>{
    const id = req.params.id;
    res.status(200).json({wiadomosc: 'zmiana produktu o nr ' + id })
})
router.delete("/:id", (req, res, next) =>{
    const id = req.params.id;
    res.status(200).json({wiadomosc: 'usuniecie produktu o nr ' + id })
})
// :- wartosc, zmienna
module.exports = router