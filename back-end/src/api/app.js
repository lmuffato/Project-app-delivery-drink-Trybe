const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRoute = require('./routes/users');
const productsRoute = require('./routes/products');
const salesRoute = require('./routes/sales');
const error = require('./middleware/error');

app.use('/images', express.static(path.join(__dirname, '..', '..', '/public')));
app.use('/users', userRoute);
app.use('/products', productsRoute);
app.use('/sales', salesRoute);
app.get('/carlos', (_req, res) => res.status(200).json({ message: 'ok' }));
app.get('/coffee', (_req, res) => res.status(418).end());
 
console.log(path.join(__dirname, '..', '..', '/public'));
app.use(error);

module.exports = app;
