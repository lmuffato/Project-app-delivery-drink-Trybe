const { sales } = require('../database/models');

const getSales = async (userId) => {
  const salesList = await sales.findAll({ where: { userId } });
  return salesList;
};

module.exports = {
    getSales,
};