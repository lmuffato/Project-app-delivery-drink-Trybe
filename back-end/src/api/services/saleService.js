const { sales, salesProducts } = require('../../database/models');
const { User } = require('../../database/models');
const { ORDERS_NOT_FOUND } = require('../messages/errorMessages');

const findUserById = async (id) => {
 const { dataValues: { password: _, ...userData } } = await User.findOne({
    where: { id },
  }); 

  return userData;
};

const registerSale = async (saleData) => {
  const { products, ...data } = saleData;
  console.log('Service');
  const { dataValues } = await sales.create(data);

  products.map(({ productId, quantity }) => salesProducts.create({
    productId, saleId: dataValues.id, quantity,
    }));

  return dataValues;
};

const getOrdersByUserId = async (userId) => {
  const userOrders = await sales.findAll({
    where: { userId },
    include: { model: User, as: 'seller', attributes: { exclude: ['password'] } },
  });

  if (userOrders.length === 0) {
    return ({ status: 404, data: ORDERS_NOT_FOUND });
  }

  const ordersData = await findUserById(userId);
  ordersData.orders = userOrders;

  return ({ ordersData });
};

const getAllOrders = async () => {
  const allOrders = await sales.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: User, as: 'seller', attributes: { exclude: ['password'] } },
    ],
  });

  console.log(allOrders);
  
  return allOrders;
};

const getOrdersBySellerId = async (sellerId) => {
  const sellerOrders = await sales.findAll({
    where: { sellerId },
    include: { model: User, as: 'user', attributes: { exclude: ['password'] } },
  });

  if (sellerOrders.length === 0) {
    return ({ status: 404, data: ORDERS_NOT_FOUND });
  }

  const ordersData = await findUserById(sellerId);
  ordersData.orders = sellerOrders;

  return ({ ordersData });
};

const updateOrder = async (id, status) => {
  await sales.update(
    { status },
    { where: { id } },
  );

  const updatedOrder = await sales.findByPk(id);

  return updatedOrder;
};

module.exports = {
  registerSale,
  getOrdersByUserId,
  getAllOrders,
  getOrdersBySellerId,
  updateOrder,
};
