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

const getSellerSales = async (sellerId) => {
  const sellerSales = await database.sale.findAll({ where: { sellerId }, raw: true });
  return { status: 201, message: { sellerSales } };
};

const getSaleDetails = async (id) => {
    const saleDetails = await database.sale
      .findOne({
        where: { id },
        include: 'salesProduct' });
    console.log(saleDetails);
    return { status: 201, message: { saleDetails } };
};

const update = async (updateSale) => {
  console.log('updateSale at update saleService', updateSale);
  const saleUpdated = await database.sale
    .update({ status: updateSale.status }, { where: { id: updateSale.id } });
  console.log(saleUpdated);
  return { status: 201, message: { saleUpdated } };
};

module.exports = {
  register,
  getSaleDone,
  getSellerSales,
  getSaleDetails,
  update,
};
