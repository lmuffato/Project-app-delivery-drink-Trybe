const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const socket = require('socket.io');
const path = require('path');
const sockets = require('../sockets');

const {
  loginRouter,
  registerRouter,
  productRouter,
  saleRouter,
  customerRouter,
  sellerRouter,
} = require('../routers');

const app = express();
const httpServer = http.createServer(app);

const io = socket(httpServer, { cors: { origin: '*', methods: ['GET', 'POST'] } });

console.log(path.join(__dirname, '..', '..', 'public'));

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public')));

app.use('/login', loginRouter);

app.use('/register', registerRouter);

app.use('/products', productRouter);

app.use('/sale', saleRouter);

app.use('/customer', customerRouter);

app.use('/seller', sellerRouter);

sockets(io);

module.exports = httpServer;
