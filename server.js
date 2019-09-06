const express = require('express');
const server = express();

server.use(express.json());
server.use('/projects', require('./data/routers/projectRouter'));
server.use('/actions', require('./data/routers/actionRouter'));

server.get("/", (req, res) => {
    res.send('hey');
});

module.exports = server;