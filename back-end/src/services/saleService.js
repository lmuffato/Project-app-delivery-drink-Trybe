const database = require('../database/models');

const register = async (customer, seller, cartProducts, address) => {
  const value = cartProducts
    .reduce((acc, product) => acc + Number(product.price) * product.quantity, 0);
  const id = customer.id.toString();
  console.log(customer);
  console.log(id);
  const sale = await database.sale
    .create({
      userId: customer.id,
      sellerId: seller.id,
      totalPrice: value.toFixed(2),
      deliveryAddress: address.street,
      deliveryNumber: address.number,
      status: 'Pendente',
  });
  cartProducts.map(async (product) => database.salesProduct
        .create({ productId: product.id, saleId: sale.id, quantity: product.quantity }));
  return { status: 201, message: { sale } };
};

module.exports = {
  register,
};
