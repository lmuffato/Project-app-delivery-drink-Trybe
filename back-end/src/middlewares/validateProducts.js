const database = require('../database/models');

const validateProducts = async (req, res, next) => {
  const { products } = req.body;
  const dataBaseProducts = await database.product.findAll();
  console.log(dataBaseProducts);
  if (dataBaseProducts.forEach((product) => {
    products.some((p) => product.id === p.id && product.name === p.name);
  })) {
    return next();
  }
  return res.status(404).json({ message: { message: 'Product not registered' } });
};

module.exports = validateProducts;
