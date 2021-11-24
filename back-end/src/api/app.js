const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: 'http://localhost:3000', 
      methods: ['GET', 'POST'], 
    } });
const { getSaleById, update } = require('../services');
const middlewares = require('../middlewares');
const routes = require('../routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', routes);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(express.static(path.join(__dirname, '../', '../', 'public')));

app.use(middlewares.routeNotFound);
app.use(middlewares.errorMiddleware);

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
