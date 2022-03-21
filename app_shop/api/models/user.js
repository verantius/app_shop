const mongoose = require('mongoose')

//budowanie schematu
const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    email : {
        type: String,
        minLength: 2,
        required: true
    },
    password : {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('User', userSchema)
