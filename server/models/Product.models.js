const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    },
    count: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('product', ProductSchema)