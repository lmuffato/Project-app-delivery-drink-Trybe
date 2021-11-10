const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { userController, productsController } = require('./controllers');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/login', userController.login);

app.get('/products', productsController.findAllProducts);

module.exports = app;
