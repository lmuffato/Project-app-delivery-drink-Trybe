const { Products } = require('../../database/models');
const { NO_REGISTRED_PRODUCTS } = require('../messages/errorMessages');

const findAllProducts = async () => {
  const allProducts = await Products.findAll();

  if (!allProducts) return ({ status: 404, data: NO_REGISTRED_PRODUCTS });

  const productsArray = allProducts.map((product) => product.dataValues)

  return ({ status: 200, data: productsArray });
};

findAllProducts();

module.exports = {
  findAllProducts,
}
