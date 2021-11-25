const jwt = require('jsonwebtoken');
const md5 = require('md5');

const { user: userModel } = require('../../database/models');
const { getSecretKey } = require('../../utils/parseToken');

const generateToken = (object) => {
  const JWT_SECRET = getSecretKey();
  return jwt.sign(object, JWT_SECRET, { expiresIn: '24h' });
};

exports.findAll = async () => {
  const users = await userModel.findAll({});
  return users;
};

exports.login = async ({ email, password }) => {
  const hashedPassword = md5(password);
  const user = await userModel.findOne(
    { where: { email, password: hashedPassword } },
  );
  if (user) {
  return {
    token: generateToken({ email }),
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  }; 
} 
  return null;
};

exports.create = async ({ fullName: name, email, password, role }) => {
  const hashedPassword = md5(password);
  const user = await userModel.findOne({ where: [{ name }, { email }] });
  if (user) return null;
  await userModel.create({ name, email, password: hashedPassword, role });
  return generateToken({ email });
};
