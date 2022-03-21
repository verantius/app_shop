const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

//wyciaganie routeru
const router = express.Router()

//Import modelu produktu
const User = require("../models/user")

//zakladanie konta
router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {    
        const user = new User ({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash,
            })
        user
            .save()
            .then((user) => {
                res.status(201).json({ wiadomosc: 'utworzono nowego uzytkownika'})
            })
            .catch((err) => res.status(500).json({ wiadomosc: err}))
        })
})
/* 1:56:00
//logowanie
router.post("/login",(req, res, next) =>{
    //wyciągam z bazy usera o znanym emailu
    User.findOne({email: req.body.email})
    .then(user =>{
        if(!user)
        return res.status(404).json({wiadomosc: 'brak takiego emaila'})
    }) 
    //walidacja hasla
})
*/
module.exports = router