const express = require('express');
const bodyParser = require('body-parser');

const UserController = require('./controllers');

const newUserAuthentication = require('./middleware/newUserAuthentication');

const app = express();

app.use(bodyParser.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/register', newUserAuthentication, UserController.createUser);

module.exports = app;
