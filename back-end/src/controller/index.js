const login = require('./loginController');
const user = require('./userController');
const product = require('./productControllers');
const saleController = require('./saleController');
// const productSales = require('./productSale');

module.exports = {
  login,
  user,
  product,
  saleController,
  // productSales,
};
