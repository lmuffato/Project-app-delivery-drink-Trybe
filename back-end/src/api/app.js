const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { userController, productsController } = require('./controllers');

const newUserAuthentication = require('./middleware/validateNewUser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/login', userController.login);

app.get('/products', productsController.findAllProducts);

app.post('/register', newUserAuthentication, userController.createUser);

module.exports = app;
