const express = require('express')
const compression = require('compression')
const cors = require('cors');
const routes = require('../routes');

const server = express();

server.get('/', function( req, res, next) {
    res.json({msg: 'teste cors'})
})

server.use(express.urlencoded({
    extended: true
}))
server.use(cors())
server.use(compression());
server.use(express.json());

server.use('/api', routes);

module.exports = server;