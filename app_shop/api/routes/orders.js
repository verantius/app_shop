const express = require("express")
const mongoose = require('mongoose')
//wyciaganie routeru
const router = express.Router()

const Order = require('../models/order')

router.get('/', (req, res, next) => {
    res.status(200).json({wiadomosc: 'Lista wszystkich zamówień'})
})

router.post('/', (req, res, next) => {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        productId: req.body.productId,
        quantity: req.body.quantity,
    })
    order
    .save()
    .then((result) => {
        res.status(201).json({
            wiadomosc: 'Dodano nowe zamówienie',
            info: result, 
        })
    })
     .catch((err) => res.status(500).json({blad: err}))
})

router.get("/:id", (req, res, next) =>{
    const id = req.params.id;
    res.status(200).json({wiadomosc: 'sczczegóły zamówienia o nr ' + id })
})
router.delete("/:id", (req, res, next) =>{
    const id = req.params.id;
    res.status(200).json({wiadomosc: 'usuniecie zamowienia o nr ' + id })
})

module.exports = router