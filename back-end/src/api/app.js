const express = require('express');
const bodyParser = require('body-parser');

const userControllers = require('../controllers/userControllers');
const { checkEmail } = require('../middlewares/checkEmail');
const { checkPassword } = require('../middlewares/checkPassword');

const app = express();
app.use(bodyParser.json());

app.post('/login', checkEmail, checkPassword, userControllers.login);

module.exports = app;
