const {
  sale: saleModel,
  user: userModel,
  product: productModel,
  salesProduct: salesProductModel,
} = require('../../database/models');

exports.findAll = async () => {
  const sales = await saleModel.findAll({});
  return sales;
};
const formatSaleData = ({ id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber }) => ({
    id,
    status,
    date: saleDate,
    price: totalPrice,
    address: `${deliveryAddress}, ${deliveryNumber}`,
  });
exports.getOrdersByUserEmail = async ({ email }) => {
  const user = await userModel.findOne({ where: { email } });
  const sales = await saleModel.findAll({ where: { userId: user.id } });
  return sales.map(formatSaleData);
};

exports.getOrdersBySellerEmail = async ({ email }) => {
  const user = await userModel.findOne({ where: { email } });
  const sales = await saleModel.findAll({ where: { sellerId: user.id } });
  return sales.map(formatSaleData);
};
/* const getUserIdByName = async (name) => {
  const user = await userModel.findOne({ where: { name } });
  return user.id;
}; */
const getProductsByName = async (products = []) => {
  const productQueries = products
  .map(({ name }) => productModel.findOne({ where: { name } }));
  return Promise.all(productQueries);
};
exports.create = async ({ userId,
  sellerId, totalPrice, deliveryAddress, deliveryNumber, products }) => {
  /* const sellerId = await getUserIdByName(sellerName);
  const userId = await getUserIdByName(userName); */
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
    salesProductModel.create({
      productId: product.id, saleId: sale.id, quantity: products[index].quantity });
  });
  return { id: sale.id };
};
