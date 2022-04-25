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

api.get('/product', ProductCtrl.getProducts);
api.get('/product/:productId', ProductCtrl.getProduct);
api.post('/product', auth, ProductCtrl.saveProduct);
api.put('/product/:productId', auth, ProductCtrl.updateProduct);
api.delete('/product/:productId', auth, ProductCtrl.deleteProduct);
api.get('/private', auth, (req, res) => {
    res.status(200).send({message: "Tienes acceso"});
});
api.post('/singup', userCtrl.singUp);
api.post('/singin', userCtrl.singIn);

api.get('/chat', auth, chatCtrl.getChat);
api.post('/chat', auth, uploadChat.single('image'), chatCtrl.uploadChat);


module.exports = api;
