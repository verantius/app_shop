const express = require('express');
//instalacja expresa
const app = express();

//jak cos uzyje serwer wykonaj te operacje
app.use((req, res, next) => {
res.status(200).json({wiadomosc: 'wszystko ok'})
})
module.exports=app