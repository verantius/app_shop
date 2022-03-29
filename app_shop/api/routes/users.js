const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

//logowanie
router.post("/login",(req, res, next) => {
    //wyciągam z bazy usera o znanym emailu
    User.findOne({ email: req.body.email })
    .then((user) => {
        if(!user) {
            return res.status(401).json({wiadomosc: 'brak autoryzacji'})  
            //tutaj moze byc 404 i inna wiadomosc pozwalajaca na identyfikacje co jesst nie tak
      } else {
            bcrypt.compare(req.body.password, user.password)
            .then((result) => {
                if(!result) {
                    return res.status(401).json({wiadomosc: 'brak autoryzacji'})
                    
                } else {
                    const token = jwt.sign({
                        email: user.email,
                        id: user._id},
                        process.env.JWT_KEY, {expiresIn:'1h'})

                    return res.status(200).json({
                        wiadomosc: 'zalogowano', 
                        token: token,
                    })
                }
                })
        }
    }) 
    //walidacja hasla
})

module.exports = router