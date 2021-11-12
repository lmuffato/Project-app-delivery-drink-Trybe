const express = require('express');
const loginRouter = require('./routes/login');
const usersRouter = require('./routes/users');
const salesRouter = require('./routes/sales');
const productsRouter = require('./routes/products');

const app = express();
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/sales', salesRouter);
app.use('/products', productsRouter);

module.exports = app;
