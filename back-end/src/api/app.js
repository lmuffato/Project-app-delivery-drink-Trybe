const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('../routers/loginRouter');
const registerRouter = require('../routers/registerRouter');

const app = express();
app.use(bodyParser.json());

app.use('/login', loginRouter);

app.use('/register', registerRouter);

module.exports = app;