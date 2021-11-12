const express = require('express');
const productsRouter = require('./routes/products');

const app = express();

app.use('/customer/products', productsRouter);

module.exports = app;
