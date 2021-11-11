const registerSchema = require('../schemas/registerSchema');
const { sale, salesProducts, product } = require('../database/models');
const clientError = require('../utils/clientError');

const userSnake = 'user_id';
const sellerSnake = 'seller_id';
const productIdSnake = 'product_id';
const saleIdSnacke = 'sale_id';
const totalPriceSnake = 'total_price';
const deliveryAddressSnake = 'delivery_address';
const deliveryNumberSnake = 'delivery_number';
const salesDateSnake = 'sale_date';

const createOrder = async (dataForCreate) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, 
    salesDate, status, stateCart } = dataForCreate;
  const dataForModel = { [userSnake]: userId,
    [sellerSnake]: parseInt(sellerId, 10),
    [totalPriceSnake]: parseFloat(totalPrice), 
    [deliveryAddressSnake]: deliveryAddress,
    [deliveryNumberSnake]: deliveryNumber,
    [salesDateSnake]: salesDate,
    status,
  };
  const result = await sale.create(dataForModel);
   stateCart.forEach((async (productItem) => {
      await salesProducts.create({ [saleIdSnacke]: result.id,
[productIdSnake]: productItem.id,
quantity: productItem.quantity });
    }));
  return result;
};

const getAllOrders = () => sale.findAll();

const getOrderById = async (id) => {
  const { error } = registerSchema.checkId.validate(id);
  if (error) return clientError.badRequest(error.details[0].message);

  try {
    const { dataValues: { password: _, ...result } } = await sale.findByPk(id);
    return result;
  } catch (err) {
    return clientError.badRequest(`Not Found Id: ${id}`);
  }
};

const getAllOrdersByUserId = async (id) => {
  const foundSales = await sale.findAll({
    where: { [userSnake]: id },
    attributes: { exclude: ['user_id'] },
    include: [
      {
      attributes: { exclude: [''] },
      model: product,
      as: 'productId',
      required: false,
      through: { 
        attributes: { exclude: ['sale_id', 'product_id'] },
      },
    },
  ],
  });

  return foundSales;
};

const getAllOrdersBySellerId = async (id) => {
  const sellerId = 'seller_id';
  const foundSales = await sale.findAll({
    where: { [sellerId]: id },
    attributes: { exclude: ['seller_id'] },
    include: [{
      attributes: { exclude: [''] },
      model: product,
      as: 'productId',
      required: false,
      through: { 
        attributes: { exclude: ['sale_id', 'product_id'] },
      },
    }],
  });
  return foundSales;
};

  const getOrdersByUserById = async (id, ordersId) => {
    const foundSales = await sale.findAll({
      where: { [userSnake]: id, id: parseInt(ordersId, 10) },
      attributes: { exclude: ['user_id'] },
      include: [{
        attributes: { exclude: [''] },
        model: product,
        as: 'productId',
        required: false,
        through: { 
          attributes: { exclude: ['sale_id', 'product_id'] },
        },
      }],
    });
  
    return foundSales;
  };
  
  const getOrdersBySellerById = async (id, ordersId) => {
    const sellerId = 'seller_id';
    const foundSales = await sale.findAll({
      where: { [sellerId]: id, id: parseInt(ordersId, 10) },
      attributes: { exclude: ['seller_id', 'user_id'] },
      include: [{
        attributes: { exclude: [''] },
        model: product,
        as: 'productId',
        required: false,
        through: { 
          attributes: { exclude: ['sale_id', 'product_id'] },
        },
      }],
    });

  return foundSales;
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  getAllOrdersByUserId,
  getAllOrdersBySellerId,
  getOrdersByUserById,
  getOrdersBySellerById,
};
