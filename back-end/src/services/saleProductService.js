const { salesProduct } = require('../database/models/index');
const Product = require('./productsService');

const createSalesProduct = async (cart, saleId) => {
  const cartData = await cart.map(async (prod) => {
    const prodId = await Product.getProductId(prod.name);
    const productId = 'product_id';
    const saleIdKey = 'sale_id';
    return { [productId]: prodId, [saleIdKey]: saleId, quantity: prod.quantity };
  });
  const test = await Promise.all(cartData);
  test.forEach(async (data) => {
    await salesProduct.create(data);
  });
};

module.exports = {
  createSalesProduct,
};
