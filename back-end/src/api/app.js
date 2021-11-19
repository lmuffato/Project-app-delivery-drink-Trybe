const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const io = require('socket.io')();
const { getSaleById, update } = require('../services');

const app = express();
const server = http.createServer(app);
const { useRoutes, sellerRoutes } = require('../routes');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

server.use('/user', useRoutes);
server.get('/coffee', (_req, res) => res.status(418).end());

server.use('/seller', sellerRoutes);

io.attach(server);

io.on('connection', (socket) => {
    socket.on('getSale', async (id) => {
        const sale = await getSaleById(id);
        io.emit('takeSale', sale);
    });
    socket.on('senStatus', async ({ id, status }) => {
        await update('sales', { id }, { status });
        const updated = await getSaleById(id);
        io.emit('takeSale', updated);
    });
});

module.exports = server;
