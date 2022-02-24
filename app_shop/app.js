const express = require('express');
//instalacja expresa
const app = express();

//import routow
const productRoutes = require('./api/routes/products')

//obsługa routow
app.use('/products', productRoutes)

//jak cos uzyje serwer wykonaj te operacje
app.use((req, res, next) => {
res.status(200).json({wiadomosc: 'wszystko ok'})
})
module.exports=app