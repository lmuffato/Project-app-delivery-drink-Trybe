const find = require('../../services/find');
const { passwordToken } = require('../../services');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const [user] = await find(
    'users',
    { email, password },
  );

  if (user.length <= 0) return res.status(404).json({ message: 'User not found' });
  const token = passwordToken(user.id);

  res.status(200).json({ token, name: user.name, email: user.email, role: user.role });
};