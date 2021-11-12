const express = require('express');
const loginRouter = require('./routes/login');
const usersRouter = require('./routes/users');
const salesRouter = require('./routes/sales');
const productsRouter = require('./routes/products');

const app = express();
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/sales', salesRouter);
app.use('/products', productsRouter);

app.get('/coffee', (_req, res) => res.status(StatusCodes.IM_A_TEAPOT).end());
app.get('/users', async (_req, res) => {
  const users = await User.findAll({});
  res.status(200).json({ result: users });
});
app.get('/products', async (_req, res) => {
  const products = await Product.findAll({});
  res.status(200).json({ result: products });
});
app.get('/sales', async (_req, res) => {
  const sales = await Sale.findAll({});
  res.status(200).json({ result: sales });
});

module.exports = app;
