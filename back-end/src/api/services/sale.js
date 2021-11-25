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
exports.getOrdersByUserEmail = async ({ email }) => {
  const user = await userModel.findOne({ where: { email } });
  if (user) {
    const sales = await saleModel.findAll({ where: { userId: user.id } });
    return sales;
  }
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

exports.getOrderByID = async ({ id: saleId }) => {
  const { dataValues } = await saleModel.findOne({ where: { id: saleId } });
  const productIDs = await salesProductModel.findAll({ where: { saleId } });
  const productQueries = productIDs
  .map(({ productId }) => (productModel.findOne({ where: { id: productId } })));
  const products = await Promise.all(productQueries);
  const formattedProducts = products.map(({ name, price }, index) => ({
  description: name,
  unitaryValue: price,
  quantity: productIDs[index].quantity,
  subTotal: price * productIDs[index].quantity,
  }));
  return { ...dataValues, products: formattedProducts };
  }; 