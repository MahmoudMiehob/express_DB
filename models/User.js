const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

        firstname: { type: String, require: true },
        lastname: { type: String, require: true },
        date: { type: Date, default: Date.now },
    })


module.exports = mongoose.model('User', userSchema)