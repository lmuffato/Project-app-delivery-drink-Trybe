const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: 'http://localhost:3000', // url aceita pelo cors
      methods: ['GET', 'POST'], // Métodos aceitos pela url
    } });
const { getSaleById, update } = require('../services');

const { useRoutes, sellerRoutes } = require('../routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/user', useRoutes);
app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/seller', sellerRoutes);

io.on('connection', (socket) => {
    console.log('conectou');
    socket.on('getSale', async (id) => {
        const sale = await getSaleById(id);
        console.log(sale);
        io.emit('takeSale', sale);
    });
    socket.on('sendStatus', async ({ id, status }) => {
        await update('sales', { id }, { status });
        const updated = await getSaleById(id);
        io.emit('takeSale', updated);
    });
});

module.exports = server;
