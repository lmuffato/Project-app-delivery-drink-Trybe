const { saleProduct } = require('../database/models/index');
const Product = require('./productsService');

const createSaleProduct = async (cart, saleId) => {
  const cartData = cart.map(async (prod) => {
    const prodId = await Product.getProductId(prod.name);
    return { product_id: prodId, sale_id: saleId, quantity: prod.quantity };
  });
  cartData.forEach(async (data) => {
    await saleProduct.create(data);
  });
};

module.exports = {
  createSaleProduct,
};
