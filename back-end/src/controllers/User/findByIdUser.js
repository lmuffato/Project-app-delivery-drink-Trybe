const find = require('../../services/find');

module.exports = async (req, res) => {
  const { id } = req.params;

  const user = await find(
    'users',
    { id },
  );

  res.status(200).json(user);
};
