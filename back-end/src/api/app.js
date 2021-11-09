const express = require('express');
const { StatusCodes } = require('http-status-codes');
const { User, Product, Sale } = require('../database/models');

const app = express();

app.get('/coffee', (_req, res) => res.status(StatusCodes.IM_A_TEAPOT).end());
app.get('/users', async (_req, res) => {
  const users = await User.findAll({});
  res.status(200).json({ result: users });
});
app.get('/products', async (_req, res) => {
  const users = await Product.findAll({});
  res.status(200).json({ result: users });
});
app.get('/sales', async (_req, res) => {
  const users = await Sale.findAll({});
  res.status(200).json({ result: users });
});
module.exports = app;
