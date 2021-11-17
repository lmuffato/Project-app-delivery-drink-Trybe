const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const errorHandler = require('./middlewares/errorHandler');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const saleController = require('./controllers/saleController');

const app = express();

app.use('/', express.static(path.join(__dirname, '..', '..', 'public')));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('OK FUNCIONANDO');
});

app.get('/products/:id', productController.getOne);
app.get('/products', productController.getAll);

app.post('/sales', saleController.create);
app.use ('/sales/:id', saleController.findById);
app.get('/sales', saleController.getAll);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', userController.login);
app.use('/register', userController.register);


app.use(errorHandler);

module.exports = app;
