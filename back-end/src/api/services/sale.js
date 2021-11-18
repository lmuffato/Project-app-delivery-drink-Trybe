const { sale: saleModel } = require('../../database/models');
const { user: userModel } = require('../../database/models');
const { product: productModel } = require('../../database/models');
const { productsSale: productsSaleModel } = require('../../database/models');

exports.findAll = async () => {
  const sales = await saleModel.findAll({});
  return sales;
};
const getUserIdByName = async (name) => {
  const user = await userModel.findOne({ where: { name } });
  return user.id;
};
const getProductsByName = async (products) => {
  const productQueries = products
  .map(({ name }) => productModel.findOne({ where: { name } }));
  return Promise.all(productQueries);
};
exports.create = async ({ userName,
  sellerName, totalPrice, deliveryAddress, deliveryNumber, products }) => {
  const sellerId = await getUserIdByName(sellerName);
  const userId = await getUserIdByName(userName);
  const productsData = await getProductsByName(products);
  const sale = await saleModel.create({
    deliveryAddress,
    deliveryNumber,
    saleDate: Date.now(),
    status: 'Pendente',
    totalPrice,
    sellerId,
    userId,
  });
  productsData.forEach((product, index) => {
    productsSaleModel.create({
      productId: product.id, saleId: sale.id, quantity: products[index].quantity });
  });
};
