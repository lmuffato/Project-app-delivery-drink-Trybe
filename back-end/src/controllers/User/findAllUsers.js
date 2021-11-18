const find = require('../../services/find');

module.exports = async (_req, res) => {
  const users = await find(
    'users',
  );

  res.status(200).json(users);
};
