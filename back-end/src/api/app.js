const express = require('express');
const bodyParser = require('body-parser');
const { getSalesBySeller } = require('../controllers');

const app = express();

app.use(bodyParser.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/sales', getSalesBySeller);

module.exports = app;
