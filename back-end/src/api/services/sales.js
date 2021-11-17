const { Sale } = require('../../database/models');

const findById = async (id) => {
  const salesById = await Sale.findAll({
    where: { seller_id: +id },
  });
  return salesById
};

module.exports = {
  findById,
}