const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const userController = require('./controllers/userController');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('OK FUNCIONANDO');
});

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', userController.login);
app.use('/register', userController.register);

app.use(errorHandler);

module.exports = app;
