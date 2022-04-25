'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes');
const cors = require('cors');



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', api);
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
}));



module.exports = app;
