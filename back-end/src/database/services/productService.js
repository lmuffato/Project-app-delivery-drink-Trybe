const { Product } = require('../models');
const { HTTP_CREATED, HTTP_CONFLICT, HTTP_OK_STATUS } = require('../../status');

async function getAll() {
  const products = await Product.findAll();

  if (products.length <= 0) return { code: HTTP_CONFLICT, error: 'Products are empty' };

  return { data: products, code: HTTP_OK_STATUS,  };
};

module.exports = {
  getAll,
};
