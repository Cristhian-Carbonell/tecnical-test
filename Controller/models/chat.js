'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    text: String,
    img: {
        data: Buffer,
        contentType: String,
    },
    date: Date,
});

module.exports = new mongoose.model('Image', chatSchema);
