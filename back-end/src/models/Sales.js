const { sale, saleProduct } = require('../database/models');

const addNew = async (payload) => sale.create(payload);

const addRelation = async (payload) => {
  try {
    const inserts = payload.map((item) => saleProduct.create(item));
    await Promise.all(inserts);
  } catch (error) {
    console.log(error.message);
  }
};

const getSales = async (userId) => {
  const salesList = await sale.findAll({ where: { userId } });
  console.log(salesList);
  return salesList;
};

module.exports = {
  addNew,
  addRelation,
  getSales,
};
