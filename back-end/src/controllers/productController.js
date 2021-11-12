const Product = require('../services/productService');

const getProducts = async (_req, res) => {
  const { status, message, products } = await Product.getAll();
  if (!products) return res.status(status).json({ message });
  
  return res.status(status).json(products);
};

module.exports = {
  getProducts,
};
