const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
<<<<<<< HEAD
const { useRoutes, sellerRoutes } = require('../routes');
=======
const { getSalesBySeller } = require('../controllers');
const routes = require('../routes');
>>>>>>> main-group-4-feat-tela-produtos-cliente

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

<<<<<<< HEAD
app.use('/user', useRoutes);
=======
app.use('/user', routes.useRoutes);
>>>>>>> main-group-4-feat-tela-produtos-cliente
app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/seller', sellerRoutes);

module.exports = app;
