const express = require('express');

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const productsRouter = require('./routes/products');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productsRouter);

module.exports = app;
