//instalacja expresa
const express = require('express');
//instalacja morgana
const morgan = require('morgan')
const cors = require("cors")
const bodyParser = require('body-parser')

const app = express();

//parsowanie czesc body
app.use(bodyParser.json())

//odblokowanie corsa
app.use(cors())


//logger
app.use(morgan('combined'))

//import routow
const productRoutes = require('./api/routes/products')

//obsługa routow
app.use('/products', productRoutes)

//jak cos uzyje serwer wykonaj te operacje
app.use((req, res, next) => {
res.status(200).json({wiadomosc: 'wszystko ok'})
})
module.exports=app