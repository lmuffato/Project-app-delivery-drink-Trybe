const express = require('express');
const cors = require('cors');
const { useRoutes, sellerRoutes } = require('../routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/user', useRoutes);
app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/seller', sellerRoutes);

module.exports = app;
