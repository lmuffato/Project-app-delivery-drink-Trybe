const Sequelize = require('sequelize');
const { Sale, SaleProduct } = require('../../database/models');
const config = require('../../database/config/config');
const AppError = require('../utils/AppError');

const sequelize = new Sequelize(config.development);

const create = async ({ products, ...saleObj }) => {
  const t = await sequelize.transaction();

  try {
    const newSale = await Sale.create(saleObj, { transaction: t });
    const productsMapped = products.map((product) => ({
        saleId: newSale.id,
        productId: product.id,
        quantity: product.quantity,
      }));

    await SaleProduct.bulkCreate(productsMapped, { transaction: t });
    await t.commit();

    return newSale;
  } catch (err) {
    await t.rollback();
    throw new AppError(400, err.message);
  }
};

const findBySellerId = async (id) => {
  const getAll = await Sale.findAll({
    where: { sellerId: id },
  });
  return getAll;
};

const findByIdSale = async (saleId) => {
  const getById = await Sale.findByPk(saleId);
  return getById;
};

const findSaleByUserId = (id) => Sale.findAll({
  where: { userId: id },
});

const getAll = async () => {
  const data = await Sale.findAll();
  return data;
};

const updateStatus = async (id, status) => {
  const saleUpdated =  await Sale.update({ status }, { where: { id } });
  return saleUpdated;
};

module.exports = {
  create,
  findBySellerId,
  getAll,
  findByIdSale,
  findSaleByUserId,
  updateStatus,
};
