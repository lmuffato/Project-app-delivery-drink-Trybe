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
}

const getAll = async () => {
  const getAll = await Sale.findAll();
  return getAll;
}
module.exports = {
  create,
  findById,
  getAll,
};
