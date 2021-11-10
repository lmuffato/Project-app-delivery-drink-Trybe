const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('../routes');

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', router.login);

module.exports = app;
