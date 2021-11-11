const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('../routers/loginRouter');

const app = express();
app.use(bodyParser.json());

app.use('/login', loginRouter);

// app.use('/register');

module.exports = app;