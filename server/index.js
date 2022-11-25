const express = require('express')
const compression = require('compression')
const routes = require('../routes');

const server = express();
server.use(express.urlencoded({
    extended: true
}))
server.use(compression());
server.use(express.json());

server.use('/api', routes);

module.exports = server;