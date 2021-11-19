const md5 = require('md5');

const { user: userModel } = require('../../database/models');
const { generateToken } = require('../../utils/generateToken');

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
    token: generateToken({ email: user.email, role: user.role }),
    name: user.name,
    email: user.email,
    role: user.role,
  }; 
} 
  return null;
};

exports.create = async ({ fullName: name, email, password }) => {
  const hashedPassword = md5(password);
  const user = await userModel.findOne({ where: [{ name }, { email }] });
  if (user) return null;
  await userModel.create({ name, email, password: hashedPassword, role: 'customer' });
  return generateToken({ email: user.email, role: user.role });
};
