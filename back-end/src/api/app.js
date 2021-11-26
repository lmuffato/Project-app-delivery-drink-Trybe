const express = require('express');
const cors = require('cors');

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const productsRouter = require('./routes/products');
const salesRouter = require('./routes/sales');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/customer/products', productsRouter);
app.use('/sales', salesRouter);

app.use('/images', express.static('../assets/images'));

module.exports = app;
