const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const loginRouter = require('./router/loginRouter');
const userRouter = require('./router/userRouter');
const registerRouter = require('./router/registerRouter');
const productRouter = require('./router/productRouter');
const imagesRouter = require('./router/imagesRouter');

const app = express();

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

app.use((error, _req, res, _next) => {
  res.status(error.status).json({ message: error.message });
});

module.exports = app;
