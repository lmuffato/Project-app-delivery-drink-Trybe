const express = require('express');
const cors = require('cors');
const routes = require('../routes');
const errorMiddleware = require('../middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/user', routes.useRoutes);
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);

module.exports = app;
