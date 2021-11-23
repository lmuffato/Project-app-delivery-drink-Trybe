const express = require('express');

const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: 'http://localhost:3000', 
      methods: ['GET', 'POST'], 
    } });
const { getSaleById, update } = require('../services');
const middlewares = require('../middlewares');
const { useRoutes, getSalesRouter } = require('../routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', useRoutes);
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(middlewares.routeNotFound);

app.use(middlewares.errorMiddleware);
app.use('/sales', getSalesRouter);

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
