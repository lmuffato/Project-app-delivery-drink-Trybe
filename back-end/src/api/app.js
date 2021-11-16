const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userController = require('./controllers/userController');
const loginvalidationMid = require('./middlewares/loginValidationMid');
const registerValidationMid = require('./middlewares/registerValidationMid');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/login', loginvalidationMid, userController.login);
app.post('/register', registerValidationMid, userController.login);

module.exports = app;
