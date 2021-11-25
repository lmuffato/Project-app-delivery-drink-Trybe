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
  try {
    const { dataValues: { id } } = await Sale.create({
      userId: user.id,
      sellerId,
      totalPrice: total,
      deliveryAddress,
      deliveryNumber,
      status: 'Pendente',
    });

    return id;
  } catch (error) {
    console.log(error);
  }
};

const postSale = async (data, user) => {
  const transaction = await sequelize.transaction();
  console.log(data);
  try {
    const { delivery, shoppingCart, total, sellerId } = data;
    const arrProducts = Object.entries(shoppingCart);

    const id = await createNewSaleOnDatabase(user, sellerId, total, delivery);

    Promise.all(arrProducts.map((currProduct) => SaleProduct.create(
      { saleId: id, productId: currProduct[0], quantity: currProduct[1] },
    ))).catch((error) => { 
      console.log(error);
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

const getSaleDetailById = async (id) => {
  try {
    const saleDetail = await Sale.findOne({ where: {
      id,
    },
  });
  if (!saleDetail) return errorMap.saleNotFound;

  return saleDetail;
  } catch (error) {
    return errorMap.internalError;
  }
};

module.exports = { postSale, getSalesBySellerId, getSalesByCustomerId, getSaleDetailById };
