const Product = require('../services/Products');

const getProducts = async (_req, res) => {
  const products = await Product.getProducts();
  res.status(201).json(products);
};

module.exports = {
    getProducts,
};
