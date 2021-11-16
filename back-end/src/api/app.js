const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const loginController = require('./controllers/loginController');
const loginvalidationMid = require('./middlewares/loginValidationMid');
const registerValidationMid = require('./middlewares/registerValidationMid');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/login', loginvalidationMid, loginController.login);
app.post('/register', registerValidationMid, loginController.login);

module.exports = app;
