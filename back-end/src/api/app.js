const express = require('express');
const bodyParser = require('body-parser');
const { getSalesBySeller } = require('../controllers');
const cors = require('cors');
const routes = require('../routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/user', routes.useRoutes);
app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/sales', getSalesBySeller);

module.exports = app;
