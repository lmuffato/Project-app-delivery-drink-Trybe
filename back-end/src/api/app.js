const express = require('express');
const bodyParser = require('body-parser');

const userControllers = require('../controllers/userControllers')

const app = express();
app.use(bodyParser.json());

app.post('/login', userControllers.login)

module.exports = app;
