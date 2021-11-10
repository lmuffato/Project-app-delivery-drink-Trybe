const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const userRoute = require('./routes/users');
const productsRoute = require('./routes/products');
const salesRoute = require('./routes/sales');

app.use('/users', userRoute);
app.use('/products', productsRoute);
app.use('/sales', salesRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
