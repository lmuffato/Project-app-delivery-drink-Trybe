const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const socket = require('socket.io');
const path = require('path');

const { loginRouter, registerRouter, productRouter, saleRouter } = require('../routers');

const app = express();
const httpServer = http.createServer(app);

const io = socket(httpServer, { cors: { origin: '*', methods: ['GET', 'POST'] } });

console.log(path.join(__dirname, '..', '..', 'public'));

const corsOptions = {
  origin: '*',
};

// https://github.com/tryber/sd-10a-live-lectures/pull/89/files
app.use(cors(corsOptions));

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public')));

app.use('/login', loginRouter);

app.use('/register', registerRouter);

app.use('/products', productRouter);

app.use('/sale', saleRouter);

io.on('connection', (currSocket) => {
  currSocket.on('message', () => console.log('chamou message'));

  // socket.on('disconnect', () => {
    // the user is deleted from array of users and a left room message displayed
    // const PUser = user_Disconnect(socket.id);
    // if (PUser) {
      // io.to(PUser.room).emit('message', {
        // userId: PUser.id,
        // username: PUser.username,
        // text: `${PUser.username} has left the room`,
      // });
    // }
});

module.exports = httpServer;
