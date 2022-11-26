const express = require('express')
const compression = require('compression')
const cors = require('cors');
const routes = require('../routes');

const server = express();

server.use(express.urlencoded({
    extended: true
}))
server.use(compression());
server.use(express.json());

server.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    server.use(cors());
    next();
});

server.use('/api', routes);

module.exports = server;