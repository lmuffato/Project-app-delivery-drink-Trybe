const find = require('../../services/find');

module.exports = async (_req, res) => {
  const products = await find(
    'products',
  );

  res.status(200).json(products);
};
