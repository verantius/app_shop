const mongoose = require('mongoose')

//budowanie schematu
const orderSchema = mongoose.Schema({
   _id: mongoose.Types.ObjectId,
   productId: {
       type: mongoose.Types.ObjectId,
       ref: 'Product',  //referencja do modelu productss

   },
    quantity: {
        type: Number,
        default: 1,
        min: 1,
    }
})
module.exports = mongoose.model('Order', orderSchema)
