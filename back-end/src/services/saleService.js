const Sequelize = require('sequelize');
const database = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const createSale = async ({ customer, sellerId, value, address }, t) => {
    const sale = await database.sale
    .create({
      userId: customer.id,
      sellerId,
      totalPrice: value.toFixed(2),
      deliveryAddress: address.street,
      deliveryNumber: address.number,
      status: 'Pendente',
  }, { transaction: t });
  return sale;
};

const register = async (customer, sellerId, cartProducts, address) => {
  const t = await sequelize.transaction();
  try {
    const value = cartProducts
      .reduce((acc, product) => acc + Number(product.price) * product.quantity, 0);
    const sale = await createSale({ customer, sellerId, value, address }, t);

    const saleProductsObject = cartProducts.map((product) => ({ productId: product.id,
      saleId: sale.id,
      quantity: product.quantity }));
    await database.salesProduct.bulkCreate(saleProductsObject, { transaction: t });  
    await t.commit();
    return { status: 201, message: { sale } };
  } catch (e) {
    await t.rollback();
    console.log(e);
    return { status: 500, message: { message: 'Something whent wrong' } };
  }
};

const getSaleDone = async (sale) => {
  const saleDone = await database.sale.findOne(sale);
  const { id } = saleDone;
  return { status: 201, message: { id } };
};

module.exports = {
  register,
  getSaleDone,
};
