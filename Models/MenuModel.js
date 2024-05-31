const mongoose = require('mongoose')

const Menu = mongoose.model(
    'Menu', 
    new mongoose.Schema({
        name: {type: String, required: true},
        decription: {type: String, required: true},
        price: {type: Number, required: true},
        rating: {type: Number, requied: true},
        deliveryTime: {type: Number, requied: true},
        offer:{type: Number, default: null},
        type: {type: String, required: true},
        image: {
            data: Buffer,
            contentType: String
        }
    }
    ,{timestamps: true})
)

module.exports = Menu