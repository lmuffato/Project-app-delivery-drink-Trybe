const express = require('express');

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const productsRouter = require('./routes/products');
const salesRouter = require('./routes/sales');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productsRouter);
app.use('/sales', salesRouter);

module.exports = app;
