const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userControllers = require('../controllers/userControllers');
const productControllers = require('../controllers/productControllers');

const { checkEmail } = require('../middlewares/checkEmail');
const { checkPassword } = require('../middlewares/checkPassword');
const { validateToken } = require('../middlewares/validateToken');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.post('/login', checkEmail, checkPassword, userControllers.login);

app.get('/products', validateToken, productControllers.getAllProducts);

module.exports = app;
