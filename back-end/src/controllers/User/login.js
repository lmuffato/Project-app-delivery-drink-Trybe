const genHashMd5 = require('md5');
const find = require('../../services/find');
const { passwordToken } = require('../../services');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const [user] = await find('users', { email });

  if (!user) return res.status(404).json({ message: 'User not found' });

  const md5Password = genHashMd5(password);

  if (md5Password === user.password) {
    const token = passwordToken(user.id);
    return res.status(200).json({ token, name: user.name, email: user.email, role: user.role });
  }

  return res.status(400).json({ message: 'Invalid fields' });
};