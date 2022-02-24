const express = require("express")

//wyciaganie routeru
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({wiadomosc: 'Lista wszystkich produktów'})
})
router.post('/products', (req, res, next) => {
    res.status(201).json({wiadomosc: 'Dodano nowy produkt' })
})
module.exports = router