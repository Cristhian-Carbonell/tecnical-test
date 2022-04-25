'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    name: String,
    pitcture: String,
    price: { 
        type: Number, 
        default: 0
    },
    category: {
        type: String,
        num: [
            'computer',
            'phones',
            'accesories'
        ]
    },
    description: String,
})

module.exports = mongoose.model('Product', ProductSchema);
