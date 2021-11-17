const database = require('../database/models');

const register = async (customer, seller, cartProducts, address) => {
  const value = cartProducts
    .reduce((acc, product) => acc + Number(product.price) * product.quantity, 0);

  const customerId = await database.user.findOne({ where: { email: customer.email } });
  const sale = await database.sale
    .create({
      userId: customerId,
      sellerId: seller.id,
      totalPrice: value,
      deliveryAddress: address.street,
      deliveryNumber: address.number,
  });
  cartProducts.forEach(async (product) => {
      await database.salesProduct
        .create({ productId: product.id, saleId: sale.id, quantity: product.quantity });
  }).PromiseAll();
  return { status: 201, message: { sale } };
};

module.exports = {
  register,
};
