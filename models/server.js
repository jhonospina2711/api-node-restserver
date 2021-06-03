const express = require('express')
var cors = require('cors')


class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        // Rutas de mi apliocacion
        this.routes();
    }

    middlewares() {
        //Cors
        this.app.use( cors());

        //Parseo y lectura del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'));
     }

    listener() {
        this.app.listen(this.port, () => {
            console.log('Servidor Corriendo en el puerto: ', this.port)
        });
    }

}

module.exports = Server;