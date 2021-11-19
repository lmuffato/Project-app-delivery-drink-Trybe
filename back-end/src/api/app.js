const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');

const Product = require('../controllers/productsController');
const Sale = require('../controllers/salesController');

const app = express();
app.use(cors());
app.use(BodyParser.json());

app.get('/products', Product.getProducts);
app.get('/sales', Sale.getSales);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
