const { Sale, SaleProduct } = require('../database/models');
const errorMap = require('../utils/errorMap');
const Sequelize = require('sequelize');

const config = require('../database/config/config');

const sequelize = new Sequelize(process.env.NODE_ENV === 'test' ? config.test : config.development);

const postSale = async (data, user) => {
  const transaction = await sequelize.transaction();

  try {
    const { delivery, shoppingCart, total, sellerId } = data;
    const { deliveryAddress, deliveryNumber } = delivery;
    const arrProducts = Object.entries(shoppingCart);
    
    const { dataValues: { id } } = await Sale.create({
      userId: user.id,
      sellerId,
      totalPrice: total,
      deliveryAddress,
      deliveryNumber,
      status: 'pendente',
    });

    Promise.all(arrProducts.map((currProduct) => SaleProduct.create(
      { saleId: id, productId: currProduct[0], quantity: currProduct[1] },
    ))).catch((_error) => { 
      throw new Error();
    });

    await transaction.commit()
  
    return { id };
  } catch (_error) {
    await transaction.rollback();
    return errorMap.internalError;
  }
};

const getSalesBySellerId = async (id) => {
  try {
    const sellerSales = await Sale.findAll({
      where: {
        sellerId: id
      }
    });
  
    return sellerSales
  } catch (_error) {
    return errorMap.internalError;
  }
}

module.exports = { postSale, getSalesBySellerId };
