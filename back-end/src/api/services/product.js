const { product: productModel } = require('../../database/models');

exports.findAll = async () => {
  const products = await productModel.findAll({});
  return products;
};
