const express = require('express')
const compression = require('compression')
const routes = require('../routes');

const server = express();
server.use(compression());
server.use(express.json());

server.use('/api', routes);

module.exports = server;