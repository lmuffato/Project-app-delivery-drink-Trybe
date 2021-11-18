const { Sale } = require('../../database/models');

const create = async (saleObj) => {
  const newSale = await Sale.create(saleObj);

  return newSale;
};

const findBySellerId = async (id) => {
  const getAll = await Sale.findAll({
    where: { sellerId: id },
  });
  return getAll;
};

const findByIdSale = async (saleId) => {
  const getById = await Sale.findById(saleId);
  return getById;
};

const findSaleByUserId = (id) => {
  return Sale.findAll({
    where: { userId: id },
  });
}

const getAll = async () => {
  const data = await Sale.findAll();
  return data;
};

module.exports = {
  create,
  findBySellerId,
  getAll,
  findByIdSale,
  findSaleByUserId,
};
