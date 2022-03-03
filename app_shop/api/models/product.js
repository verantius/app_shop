const mongoose = require('mongoose')

//budowanie schematu
const productSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name : {
        type: String,
        minLength: 2,
        required: true
    },
    price : {
        type: Number,
        min: 0,
        required: true,
        //bulid-in validators mangoose
    }, 
})
module.exports = mongoose.model('Product', productSchema)
