const { sale } = require('../database/models/index');

const createSale = async (data) => {
  const newSale = await sale.create(data);
  return { status: 201, id: newSale.id };
};

module.exports = {
  createSale,
};
