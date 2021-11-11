const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const errorHandler = require('./middlewares/errorHandler');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');

const app = express();

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, '..', '..','..', 'productImages')));

app.get('/', (req, res) => {
  res.status(200).send('OK FUNCIONANDO');
});

app.get('/products/:id', productController.getOne);
app.get('/products', productController.getAll);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', userController.login);
app.use('/register', userController.register);

app.use(errorHandler);

module.exports = app;
