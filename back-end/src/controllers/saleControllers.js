const saleServices = require('../services/saleService');

const register = async (req, res) => {
  const { customer, seller, cartProducts, address } = req.body;
  const response = await saleServices.register(customer, seller, cartProducts, address);
  res.status(response.status).json(response.message);
};

module.exports = {
  register,
};
