const saleServices = require('../services/saleService');

const register = async (req, res) => {
  const { customer, sellerId, cartProducts, address } = req.body;
  const response = await saleServices.register(customer, sellerId, cartProducts, address);
  return res.status(response.status).json(response.message);
};

const getSaleDone = async (req, res) => {
  const { sale } = req.body;
  const response = await saleServices.getSaleDone(sale);
  return res.status(response.status).json(response.message);
  };

const getCustomerSales = async (req, res) => {
  const { userId } = req.body;
  const response = await saleServices.getCustomerSales(userId);
  res.status(response.status).json(response.message);
};

const getSellerSales = async (req, res) => {
  const { sellerId } = req.body;
  const response = await saleServices.getSellerSales(sellerId);
  return res.status(response.status).json(response.message);
};

const getSaleDetails = async (req, res) => {
  const { id } = req.body;
  const response = await saleServices.getSaleDetails(id);
  return res.status(response.status).json(response.message);
};

const getSalesUserSellers = async (req, res) => {
  const { id } = req.body;
  const response = await saleServices.getSalesUserSellers(id);
  return res.status(response.status).json(response.message);
};

const update = async (req, res) => {
  const { updateSale } = req.body;
  const response = await saleServices.update(updateSale);
  return res.status(201).json(response.message);
};

module.exports = {
  register,
  getCustomerSales,
  getSellerSales,
  getSaleDetails,
  update,
  getSalesUserSellers,
  getSaleDone,
};
