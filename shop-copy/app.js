const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.37tur.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`)

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('common'))

const productRoutes = require('./api/routes/products') 
const orderRoutes = require('./api/routes/orders') 

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

app.use((req, res, next) => {
  res.status(200).json({wiadomosc:'Hello World!'})
})
module.exports = app