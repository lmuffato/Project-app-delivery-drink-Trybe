const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const Product = require('../controllers/productsController');
const User = require('../controllers/usersController');

const app = express();
app.use(cors());
app.use(BodyParser.json());
app.use('/images', express.static(path
  .join(__dirname, '..', '..', '/public', '/images', '/public')));

app.get('/products', Product.getProducts);

app.post('/user', User.getUserbyEmail);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
