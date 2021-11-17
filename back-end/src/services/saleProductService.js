const { salesProduct } = require('../database/models/index');
const Product = require('./productsService');

const createSalesProduct = async (cart, saleId) => {
  const cartData = await cart.map(async (prod) => {
    const prodId = await Product.getProductId(prod.name);
    return { product_id: prodId, sale_id: saleId, quantity: prod.quantity };
  });
  const test = await Promise.all(cartData);
  test.forEach(async (data) => {
    await salesProduct.create(data);
  });
};

module.exports = {
  createSalesProduct,
};
