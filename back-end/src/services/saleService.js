const { sale } = require('../database/models/index');
const salesProduct = require('./saleProductService');

const createSale = async (data) => {
  const { cart } = data;
  const newSale = await sale.create(data);
  salesProduct.createSalesProduct(cart, newSale.id);
  return { status: 201, id: newSale.id };
};

const getAllSales = async (id) => {
  const query = { where: { user_id: id } };

  const allSales = await sale.findAll(query);
  return allSales;
};

module.exports = {
  createSale,
  getAllSales,
};
