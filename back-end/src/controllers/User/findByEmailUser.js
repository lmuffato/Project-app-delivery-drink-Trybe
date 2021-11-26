const find = require('../../services/find');
const { passwordToken } = require('../../services');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);  
  const [user] = await find(
    'users',
    { email, password },
  );
   console.log(user);
  if (!user) return res.status(404).json({ message: 'User not found' });
  const token = passwordToken(user.id);
  return res.status(200).json({ token, name: user.name, email: user.email, role: user.role });
};