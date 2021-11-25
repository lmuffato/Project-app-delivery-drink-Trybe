const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');

const app = express();
const httpServer = require('http').createServer(app);

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST'],
  },
});

const socketsClientSeller = require('../sockets/socketsClientSeller');

socketsClientSeller.socketsClientSeller(io);

app.use(cors());

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

app.get('/coffee', (_req, res) => res.status(418).end());

const PORT = process.env.SOCKET_PORT || 3002;

httpServer.listen(PORT, () => {
  console.log(`Socket online on port: ${PORT}`);
});

module.exports = app;
