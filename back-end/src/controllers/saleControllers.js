const saleServices = require('../services/saleService');

const register = async (req, res) => {
  const { customer, seller, cartProducts, address } = req.body;
  const response = await saleServices.register(customer, seller, cartProducts, address);
  console.log(response);
  res.status(response.status).json(response.message);
};

const getSaleDone = async (req, res) => {
  const { sale } = req.body;
  const response = await saleServices.getSaleDone(sale);
  res.status(response.status).json(response.message);
};

module.exports = {
  register,
  getSaleDone,
};
