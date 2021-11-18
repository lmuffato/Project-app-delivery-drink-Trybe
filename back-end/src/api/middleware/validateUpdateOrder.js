const { Sales } = require('../../database/models');
const { ORDERS_NOT_FOUND } = require('../messages/errorMessages');

const findOrderById = async (id) => {
  const order = await Sales.findByPk(id);

  if (!order) return null;

  return order;
};

const validateUpdateOrder = async (req, res, next) => {
  const { status } = req.body;
  const { id } = req.params;

  const orderStatus = ['Preparando', 'Em Trânsito', 'Entregue']
    .some((order) => order === status);

  if (!orderStatus) {
    return res.status(401).json({ data: 'Order status not authorized' });
  }

  const orderExists = await findOrderById(id);

  if (!orderExists) {
    return res.status(404).json({ error: ORDERS_NOT_FOUND });
  }
  
  next();
};

module.exports = {
  validateUpdateOrder,
};