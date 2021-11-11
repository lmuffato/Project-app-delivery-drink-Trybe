const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const userController = require('../database/controllers/users/userController');
const productController = require('../database/controllers/products/productController');
const saleController = require('../database/controllers/sales/salesController');

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/users', userController.getUser);
app.get('/users/:id', userController.getById);

app.post('/users', userController.create);

app.delete('/users/:id', userController.exclude);

app.get('/products', productController.getProducts);
app.get('/products/:id', productController.getById);

app.post('/products', productController.create);

app.delete('/products/:id', productController.exclude);

app.get('/sales', saleController.getSale);
app.get('/sales/:id', saleController.getById);

app.post('/sales', saleController.create);

app.delete('/sales/:id', saleController.exclude);

module.exports = app;
