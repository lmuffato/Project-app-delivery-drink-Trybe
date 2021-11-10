const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const userController = require('../database/controllers/users/userController');

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/users', userController.getUser);
app.post('/users', userController.create);

module.exports = app;
