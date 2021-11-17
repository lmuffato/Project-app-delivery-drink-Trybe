const find = require('../../services/find');

module.exports = async (req, res) => {
  const { email } = req.body;

  const user = await find(
    'users',
    { email },
  );

  if (user.length <= 0) return res.status(404).json({ message: 'User not found' });

  res.status(200).json(user[0]);
};