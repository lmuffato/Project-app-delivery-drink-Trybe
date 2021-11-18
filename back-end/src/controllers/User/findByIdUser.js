const find = require('../../services/find');

module.exports = async (req, res) => {
  const { id } = req.params;

  const user = await find(
    'users',
    { id },
  );

  if (user.length <= 0) return res.status(404).json({ message: 'User not found' });

  res.status(200).json(user[0]);
};
