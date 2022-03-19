const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const bodyParser = require('body-parser')
const mongoose = require('mongoose') 

const app = express();
//zmienne srodowiskowe
require('dotenv').config()

//laaczenie z baza danych 
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.37tur.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`)

//parsowanie czesc body
app.use(bodyParser.json())

//odblokowanie corsa
app.use(cors())


//logger
app.use(morgan('combined'))

//import routow
const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')

//obsługa routow
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

//jak cos uzyje serwer wykonaj te operacje
app.use((req, res, next) => {
res.status(200).json({wiadomosc: 'wszystko ok'})
})
module.exports=app