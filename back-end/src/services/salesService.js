const { Sale } = require('../database/models/index');

const getSales = async () => {
  const sales = await Sale.findAll();
  return { status: 200, data: sales };
};

module.exports = {
  getSales,
};
