const { sale: saleModel } = require('../../database/models');

exports.findAll = async () => {
  const sales = await saleModel.findAll({});
  return sales;
};
