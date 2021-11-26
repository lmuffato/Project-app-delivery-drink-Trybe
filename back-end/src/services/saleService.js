const { Sale, User } = require('../database/models');
// const saleSchema = require('../schemas/saleSchema');
const jwt = require('jsonwebtoken');

const create = async (order) => {
  // const validateSale = saleSchema.validateSale.validate(order);
  // if (validateSale.error) return { status: 422, message: validateSale.error.message };

  const sale = await Sale.create(order);
  if (!sale) return { status: 500, message: 'Internal Server Error' };

  // const { id } = sale;
  // await SaleProduct.create(
  //   { saleId: id, productId: 2, quantity: 2 }
  // );

  return { status: 201, sale };
};

const getSale = async (id) => { 
  const sales = await Sale.findAll({ where: { USER_ID: id } });
  if (!sales) return { status: 404, message: 'Sale not found' };

  return { status: 200, sales };
};

module.exports = {
  create,
  getSale,
};
