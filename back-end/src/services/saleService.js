const { Sale } = require('../database/models');
const saleSchema = require('../schemas/saleSchema');

const create = async (order) => {
  const validateSale = await saleSchema.validateSale.validate(order);
  if (validateSale.error) return { status: 422, message: validateSale.error.message };

  const sale = await Sale.create(order);
  if (!sale) return { status: 500, message: 'Internal Server Error' };

  return { status: 201, sale };
};

module.exports = {
  create,
};
