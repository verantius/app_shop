const mongoose = require('mongoose')

//budowanie schematu
const productSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name : String,
    price : Number
})
module.exports = mongoose.model('Product', productSchema)
