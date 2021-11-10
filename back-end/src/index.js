const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
const server = require('http').createServer(app);

const port = 3001;
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
};
require('./sockets/login')(io);

app.use(cors(corsOptions));
// app.get('/', taskController.getTasks);
server.listen(port, () => console.log(`Ouvindo na porta ${port}!`));
module.exports = app;