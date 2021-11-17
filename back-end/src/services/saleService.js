const { sale } = require('../database/models/index');
const saleProduct = require('./saleProductService');

const createSale = async (data) => {
  const cart = data.cart;
  delete data.cart;
  const newSale = await sale.create(data);
  saleProduct.createSaleProduct(cart, newSale.id);
  return { status: 201, id: newSale.id };
};

module.exports = {
  createSale,
};
