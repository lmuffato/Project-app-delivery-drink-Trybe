const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const http = require('http');

const app = express();

const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] },
});

require('./socket')(io);

const login = require('./routes/login');
const user = require('./routes/user');
const product = require('./routes/product');
const sale = require('./routes/sale');
const errorMiddleware = require('./middlewares/Error');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', login);
app.use('/users', user);
app.use('/products', product);
app.use('/sales', sale);

app.use(errorMiddleware);

module.exports = server;
