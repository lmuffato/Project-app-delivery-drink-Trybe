const jwt = require('jsonwebtoken');
const md5 = require('md5');

const { user: userModel } = require('../../database/models');

exports.findAll = async () => {
  const users = await userModel.findAll({});
  return users;
};

exports.login = async ({ email, password }) => {
  const hashedPassword = md5(password);
  const user = await userModel.findOne(
    { where: { email, password: hashedPassword } },
  );
  if (user) return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '12h' }); 
  return null;
};
