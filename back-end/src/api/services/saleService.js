const { Sale } = require('../../database/models');

const create = async (saleObj) => {
  const newSale = await Sale.create(saleObj);

  return newSale;
};

const findById = async (id) => {
  const getAll = await Sale.findAll({
    where: { sellerId: id },
  });
  return getAll;
};

const findByIdSale = async (saleId) => {
  const getById = await Sale.findById(saleId);
  return getById;
};

const getAll = async () => {
  const data = await Sale.findAll();
  return data;
};

module.exports = {
  create,
  findById,
  getAll,
  findByIdSale,
};
