const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { loginRouter, registerRouter, productRouter } = require('../routers');

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', loginRouter);

app.use('/register', registerRouter);

app.use('/products', productRouter);

module.exports = app;
