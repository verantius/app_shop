const express = require('express')
const router = express.Router()

router.get('/',(req, res, next) => {
    res.status(200).json({wiadomosc: 'lista lista wszystkich zamowien'})
})
router.post('/',(req, res, next) => {
    res.status(201).json({
        wiadomosc: 'dodano zamowienie',  
    })
})
router.get('/:id',(req, res, next) => {
    const id = req.params.id
    res.status(200).json({wiadomosc: 'szczegoly zamowienia o nr '+  id})
})

router.delete('/:id',(req, res, next) => {
    const id = req.params.id
    res.status(200).json({wiadomosc: 'usunięcie zamowienia o nr '+  id})
})

module.exports = router

