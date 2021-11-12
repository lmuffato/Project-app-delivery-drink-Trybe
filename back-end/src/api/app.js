const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const loginRouter = require('../routers/loginRouter');
const registerRouter = require('../routers/registerRouter');

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
}));
app.use(bodyParser.json());

app.use('/login', loginRouter);

app.use('/register', registerRouter);

module.exports = app;