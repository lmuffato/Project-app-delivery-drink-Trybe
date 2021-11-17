const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());



app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
