const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const SALE_ID = '/sales/:id';

const userController = require('../database/controllers/users/userController');
const productController = require('../database/controllers/products/productController');
const saleController = require('../database/controllers/sales/salesController');
const loginController = require('../database/controllers/login/loginController');
const validateToken = require('../database/services/login/validateToken');
const saleProductController = require(
  '../database/controllers/salesProducts/salesProductsController',
);

app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

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
app.get(SALE_ID, saleController.getById);

app.post('/sales', validateToken, saleController.create);
app.put(SALE_ID, saleController.updateSale);

app.delete(SALE_ID, saleController.exclude);

app.post('/login', loginController.login);

app.get('/salesproducts', saleProductController.getSalesProducts);

module.exports = app;
