const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

require('./socket/sockets')(io);

const loginRouter = require('./router/loginRouter');
const userRouter = require('./router/userRouter');
const registerRouter = require('./router/registerRouter');
const productRouter = require('./router/productRouter');
const imagesRouter = require('./router/imagesRouter');
const saleRouter = require('./router/saleRouter');

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/customer', productRouter);
app.use('/images', imagesRouter);
app.use('/sale', saleRouter);

app.use((error, _req, res, _next) => {
  res.status(error.status).json({ message: error.message });
});

module.exports = server;
