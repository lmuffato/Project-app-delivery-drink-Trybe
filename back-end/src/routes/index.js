const login = require('./loginRouter');
const user = require('./userRouter');
const product = require('./productRouter');
const sale = require('./saleRouter');

module.exports = {
  login,
  user,
  product,
  sale,
};
