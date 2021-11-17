const Sequelize = require('sequelize');
const { Sale, SaleProduct, User } = require('../database/models');
const errorMap = require('../utils/errorMap');

const config = require('../database/config/config');

const sequelize = new Sequelize(process.env.NODE_ENV === 'test' ? config.test : config.development);

const checkRoleMatch = async (entityId, role) => {
  const entity = await User.findOne({ where: {
    id: entityId,
  },
});

  if (!entity) return false;

  const { dataValues } = entity;

  return dataValues.role === role;
};

const createNewSaleOnDatabase = async (user, sellerId, total, delivery) => {
  const { deliveryAddress, deliveryNumber } = delivery;
  const { dataValues: { id } } = await Sale.create({
    userId: user.id,
    sellerId,
    totalPrice: total,
    deliveryAddress,
    deliveryNumber,
    status: 'pendente',
  });

  return id;
};

const postSale = async (data, user) => {
  const transaction = await sequelize.transaction();

  try {
    const { delivery, shoppingCart, total, sellerId } = data;
    const arrProducts = Object.entries(shoppingCart);

    const id = await createNewSaleOnDatabase(user, sellerId, total, delivery);

    Promise.all(arrProducts.map((currProduct) => SaleProduct.create(
      { saleId: id, productId: currProduct[0], quantity: currProduct[1] },
    ))).catch((_error) => { 
      throw new Error();
    });

    await transaction.commit();
  
    return { id };
  } catch (_error) {
    await transaction.rollback();
    return errorMap.internalError;
  }
};

const getSalesBySellerId = async (id) => {
  try {
    const isMatchedRole = await checkRoleMatch(id, 'seller');

    if (!isMatchedRole) return errorMap.unmatchedRole;

    const sellerSales = await Sale.findAll({
      where: {
        sellerId: id,
      },
    });
  
    return sellerSales;
  } catch (_error) {
    return errorMap.internalError;
  }
};

const getSalesByCustomerId = async (id) => {
  try {
    const isMatchedRole = await checkRoleMatch(id, 'customer');

    if (!isMatchedRole) return errorMap.unmatchedRole;

    const customerSales = await Sale.findAll({
      where: {
        userId: id,
      },
    });

    return customerSales;
  } catch (error) {
    return errorMap.internalError;
  }
};

module.exports = { postSale, getSalesBySellerId, getSalesByCustomerId };
