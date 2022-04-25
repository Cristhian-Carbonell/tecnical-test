'use strict';

const Chat = require('../models/chat');
const fs = require('fs');
const path = require('path');

function uploadChat(req, res) {
    const chat = new Chat();
    chat.text = req.body.text;


    chat.save((err, item) => {
        if (err) res.status(500).send({message: `No se pudo enviar el chat ${err}`});

        res.status(201).send({item: item});

    });
}

function getChat(req, res) {
    Chat.find({}, (err, items) => {
        if (err) res.status(500).send({message: `An error occurred ${err}`});
        if (!items) res.status(404).send({message: "No hay mensajes"});

        res.status(200).send({text: items});
    })
}

module.exports = {
    uploadChat,
    getChat
}
