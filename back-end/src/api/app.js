const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('../routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/', routes);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
