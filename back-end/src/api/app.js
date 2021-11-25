const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const Product = require('../controllers/productsController');
const User = require('../controllers/UserController');
const Sale = require('../controllers/saleController');
const Validation = require('../middlewares/validations');

const app = express();
app.use(cors());
app.use(BodyParser.json());
app.use('/images', express.static(path
  .join(__dirname, '..', '..', '/public', '/images', '/public')));

app.get('/products', Product.getProducts);

app.get('/sales', Sale.getAllSales);

app.get('/sales/getSales', Sale.getSales);

app.post('/user', User.register);

app.post('/user/admin', Validation.validateAdmToken, User.register);

app.post('/user/login', User.getUserbyEmail);

app.get('/sellers', User.getSelers);

app.get('/users', User.getUsers);

app.delete('/user', Validation.validateAdmToken, User.deleteUser);

app.post('/sale', Sale.createSale);

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/user/sale/:id', Sale.getAllSales);

app.patch('/sale/:id', Sale.setSaleStatus);

app.get('/sale/:id', Sale.getProductsSale);

module.exports = app;
