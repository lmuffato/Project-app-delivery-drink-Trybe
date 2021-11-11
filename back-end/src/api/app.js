const express = require('express');
const bodyParser = require('body-parser');

const userControllers = require('../controllers/userControllers');
const productControllers = require('../controllers/productControllers');

const { checkEmail } = require('../middlewares/checkEmail');
const { checkPassword } = require('../middlewares/checkPassword');
const { validateToken } = require('../middlewares/validateToken');
const { checkName } = require('../middlewares/checkName');

const app = express();
app.use(bodyParser.json());

app.post('/login', checkEmail, checkPassword, userControllers.login);
app.post('/register', checkName, checkEmail, checkPassword, userControllers.register);

app.get('/products', validateToken, productControllers.getAllProducts);

module.exports = app;
