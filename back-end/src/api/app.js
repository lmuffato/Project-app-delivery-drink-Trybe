const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userControllers = require('../controllers/userControllers');
const { checkEmail } = require('../middlewares/checkEmail');
const { checkPassword } = require('../middlewares/checkPassword');
const { checkName } = require('../middlewares/checkName');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.post('/login', checkEmail, checkPassword, userControllers.login);
app.post('/register', checkName, checkEmail, checkPassword, userControllers.register);

module.exports = app;
