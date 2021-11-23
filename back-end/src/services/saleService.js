const { sale } = require('../database/models/index');
const salesProduct = require('./saleProductService');

const createSale = async (data) => {
  const { cart } = data;
  const newSale = await sale.create(data);
  salesProduct.createSalesProduct(cart, newSale.id);
  return { status: 201, id: newSale.id };
};

const getSales = async () => {
  const sales = await sale.findAll();
  return { status: 200, data: sales };
};

module.exports = {
  createSale,
  getSales,
};
