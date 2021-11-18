const login = require('./loginRouter');
const user = require('./userRouter');
const product = require('./productRouter');
const sale = require('./saleRouter');
// const productSale = require('./productSale');

module.exports = {
  login,
  user,
  product,
  sale,
  // productSale,
};
