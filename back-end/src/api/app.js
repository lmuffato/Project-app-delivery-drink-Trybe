require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('../routes');

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.BASE_CLIENT || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', router.login);
app.use('/register', router.user);

module.exports = app;
