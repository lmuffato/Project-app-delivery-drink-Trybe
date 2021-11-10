const { Product } = require('../../models');
const productService = require('../../services/products/productService');
const rescue = require('express-rescue');

const getProducts = rescue(async (_req, res) => {
  const allProducts = await Product.findAll();
  res.status(200).json(allProducts);
});

const create = rescue(async (req, res) => {
  const { name, price, url_image } = req.body;
  const newProduct = productService.validateEntries({ name, price, url_image });
  if (newProduct.message) return res.status(newProduct.status).json({ message: newProduct.message });
  const createdProduct = await Product.create({ name, price, url_image });
  res.status(200).json(createdProduct);
});

const exclude = rescue(async (req, res) => {
  const { id } = req.params;
  await Product.destroy( { where: { id } });
  res.status(204).end();
})

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (!product) return res.status(404).json({ message: 'User does not exist' });
  res.status(200).json(product);
});

module.exports = { getProducts, create, exclude, getById };
