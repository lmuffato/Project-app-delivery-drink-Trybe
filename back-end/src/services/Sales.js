const Sale = require('../models/Sales');

const getSale = async (id) => {
const sale = await Sale.getSales(id);
return sale;
};

const addNew = async (orders, payload) => {
  try {
    const sale = await Sale.addNew(payload);
    const joinTablePayload = orders
      .map(({ id, quantity }) => ({
        productId: id,
        saleId: sale.id,
        quantity: Number(quantity),
      }));
    await Sale.addRelation(joinTablePayload);

    return { sale };
  } catch (error) {
    return { err: error.message };
  }
};

module.exports = {
  addNew,
  getSale,
};
