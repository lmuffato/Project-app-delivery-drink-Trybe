const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const userController = require('./routes/routes');

const app = express();

app.use(bodyParser.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', userController.login)

app.use(errorHandler);

module.exports = app;
