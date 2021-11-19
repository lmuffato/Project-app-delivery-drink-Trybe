const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('../routes');
const middlewares = require('../middlewares');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', routes);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(express.static(path.join(__dirname, '../', '../', 'public')));

app.use(middlewares.routeNotFound);
app.use(middlewares.errorMiddleware);

module.exports = app;
