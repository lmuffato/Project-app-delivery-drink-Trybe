const { sale } = require('../database/models');

const addNew = async (payload) => sale.create(payload);

module.exports = {
  addNew,
};
