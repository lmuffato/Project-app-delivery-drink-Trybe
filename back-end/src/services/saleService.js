const { Sale } = require('../database/models');
// const saleSchema = require('../schemas/saleSchema');

const create = async (order) => {
  const sale = await Sale.create(order);
  if (!sale) return { status: 500, message: 'Internal Server Error' };

  return { saleId: sale.dataValues.id, status: 201, sale };
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
