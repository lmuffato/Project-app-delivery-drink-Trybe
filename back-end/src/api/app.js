const express = require('express');
const bodyParser = require('body-parser');
const { loginRouter, registerRouter } = require('../routers');

const app = express();

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', loginRouter);

app.use('/register', registerRouter);
// app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
