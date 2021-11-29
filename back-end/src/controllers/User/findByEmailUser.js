const find = require('../../services/find');

module.exports = async (req, res) => {
  const { email } = req.body;
  const [user] = await find(
    'users',
    { email },
  );
  if (!user) return res.status(404).json({ message: 'User not found' });
  
  return res.status(200).json({ name: user.name, email: user.email, role: user.role });
};