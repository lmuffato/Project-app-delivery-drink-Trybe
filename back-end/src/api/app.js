const express = require('express');
const bodyParser = require('body-parser');
const { loginRouter, productRouter } = require('../routers');

const app = express();

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', loginRouter);

app.use('/products', productRouter);
// app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
