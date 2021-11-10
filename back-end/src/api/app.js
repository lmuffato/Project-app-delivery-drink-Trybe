const express = require('express');

const app = express();
const userController = require('../database/controllers/users/userController');

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/users', userController.getUser);

module.exports = app;
