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

module.exports = {
  addNew,
  addRelation,
};
