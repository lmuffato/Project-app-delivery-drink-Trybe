const Sale = require('../models/Sales');

const addNew = async (orders, payload) => {
  try {
    const joinTablePayload = orders.map(({ id, quantity }) => ({ id, quantity }));

    const sale = await Sale.addNew(payload);
    sale.setProducts(joinTablePayload);

    return { sale };
  } catch (error) {
    return { err: error.message };
  }
};

module.exports = {
  addNew,
};
