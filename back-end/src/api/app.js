const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const userControllers = require('../controllers/userControllers');
const productControllers = require('../controllers/productControllers');
const saleControllers = require('../controllers/saleControllers');

const { checkEmail } = require('../middlewares/checkEmail');
const { checkPassword } = require('../middlewares/checkPassword');
const { validateToken } = require('../middlewares/validateToken');
const { checkName } = require('../middlewares/checkName');
// const validateProducts = require('../middlewares/validateProducts');
const validateSeller = require('../middlewares/validateSeller');
const validateCustomer = require('../middlewares/validateUser');
const validateAddress = require('../middlewares/validateAddress');
const uploadImages = require('../middlewares/uploadImages');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.post('/login', checkEmail, checkPassword, userControllers.login);
app.post('/register', checkName, checkEmail, checkPassword, userControllers.register);

app.get('/users', userControllers.getAllUsers);
app.get('/products', validateToken, productControllers.getAllProducts);

app.get('/images/:name', uploadImages.single('image'));
app.use('/images', express.static(path.join(__dirname, '../..', 'public')));

app.get('/sellers', validateToken, userControllers.getAllSellers);

app.post('/sale',
  validateToken,
  validateAddress,
  saleControllers.register);

module.exports = app;
