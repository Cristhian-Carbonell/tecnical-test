'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');


/* presenta error al escribir localhost en la conexión con mondogdb,
 solución cambiar localhost por 127.0.0.1 o 0.0.0.0*/
mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`);
    }
    console.log('Conexion a la base de datos establecida...');

    app.listen(config.port, () => {
        console.log(`server ${config.server}:${config.port}` );
    });
});
