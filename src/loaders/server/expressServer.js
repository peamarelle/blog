const express = require('express');
const config = require('../../config');

class expressServer {
    constructor() {
        this.app = express();
        this.port = config.port;
        this._notFound();
        this._middlewares();
        this._errorHandler();
    }

    _middlewares() {
        this.app.use(express.json());
    }

    _notFound() {
        this.app.use((req, res, next) => {
            let error = new Error("Not found");
            error.code = 404;
            next(error)
        })
    }

    _errorHandler() {
        this.app.use((err, req, res, next) => {
            const code = err.code || 500;
            const body = {
                code,
                error: err.message
            }
            res.status(code).json(body);
        }) 
    }

    async start() {
        this.app.listen(this.port, (error) => {
            if(error) process.exit(1);
        })
    }
}

module.exports = expressServer;