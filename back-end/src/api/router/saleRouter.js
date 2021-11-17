const express = require('express');
const rescue = require('express-rescue');

const verifyLogin = require('../middlewares/validateGenerals');

const saleController = require('../controllers/sales');

const { createSalesSchemas } = require('../schemas/schemas');
const validSchema = require('../middlewares/validSchemas');

const saleRouter = express.Router();

saleRouter.get('/', rescue(saleController.getAllSale));

saleRouter.post(
  '/',
  verifyLogin.verifyToken,
  validSchema(createSalesSchemas),
  saleController.createSale,
);

module.exports = saleRouter;
