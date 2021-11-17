const express = require('express');
const cors = require('cors');
const path = require('path');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const usersRouter = require('./routes/users');
const salesRouter = require('./routes/sales');
const productsRouter = require('./routes/products');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'assets', 'images'))); 

app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.use('/users', usersRouter);
app.use('/sales', salesRouter);
app.use('/products', productsRouter);

module.exports = app;
