const express = require('express')
const router = express.Router()
const Product = require('../models/product')

router.get('/',(req, res, next) => {
    res.status(200).json({wiadomosc: 'lista wszystkiego'})
})
router.post('/',(req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
    })
    
    product.save = {
        name: req.body.name,
        price: req.body.price,
    }
    res.status(201).json({
        wiadomosc: 'dodano produkt',
        info: product   
    })
})
router.get('/:id',(req, res, next) => {
    const id = req.params.id
    res.status(200).json({wiadomos: 'szczegoly produktu o nr '+  id})
})
router.put('/:id',(req, res, next) => {
    const id = req.params.id
    res.status(200).json({wiadomos: 'zmiana produktu o nr '+  id})
})

router.delete('/:id',(req, res, next) => {
    const id = req.params.id
    res.status(200).json({wiadomos: 'usunięcie produktu o nr '+  id})
})

module.exports = router

