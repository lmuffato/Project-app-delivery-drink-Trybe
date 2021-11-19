const jwt = require('jsonwebtoken');
const md5 = require('md5');

const { user: userModel } = require('../../database/models');
const { getSecretKey } = require('../../utils/parseToken');

exports.findAll = async () => {
  const users = await userModel.findAll({});
  return users;
};

exports.login = async ({ email, password }) => {
  const JWT_SECRET = getSecretKey();
  const hashedPassword = md5(password);
  const user = await userModel.findOne(
    { where: { email, password: hashedPassword } },
  );
  if (user) {
  return {
    token: jwt.sign({ email }, JWT_SECRET, { expiresIn: '12h' }),
    name: user.name,
    email: user.email,
    role: user.role,
  }; 
} 
  return null;
};

exports.create = async ({ fullName: name, email, password }) => {
  const hashedPassword = md5(password);
  const JWT_SECRET = getSecretKey();
  const user = await userModel.findOne({ where: [{ name }, { email }] });
  if (user) return null;
  await userModel.create({ name, email, password: hashedPassword, role: 'customer' });
  return jwt.sign({ email }, JWT_SECRET, { expiresIn: '12h' });
};
