const saleServices = require('../services/saleService');

const register = async (req, res) => {
  const { customer, seller, products, address } = req.body;
  const response = await saleServices.register(customer, seller, products, address);
  res.status(response.status).json(response.message);
};

module.exports = {
  register,
};
