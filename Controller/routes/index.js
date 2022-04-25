'use strict';

const express = require('express');
const ProductCtrl = require('../controller/product');
const userCtrl = require('../controller/user');
const chatCtrl = require('../controller/chat');
const auth = require('../middlewares/auth');
const api = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

const uploadChat = multer({storage: storage});

api.post('/singup', userCtrl.singUp);
api.post('/singin', userCtrl.singIn);

api.get('/chat', chatCtrl.getChat);
api.post('/chat', uploadChat.single('image'), chatCtrl.uploadChat);


module.exports = api;
