const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    image: String,
    description: {
        type: String
    }
})

module.exports = mongoose.model('Service', serviceSchema)