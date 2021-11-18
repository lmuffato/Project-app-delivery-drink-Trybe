const { Sale } = require('../../database/models');

const create = async (saleObj) => {
  const newSale = await Sale.create(saleObj);

  return newSale;
};

module.exports = { create };
