const md5 = require('md5');
const { Op } = require('sequelize');

const { User } = require('../../database/models');
const createToken = require('../auth/jwtFunctions');

const checkUserIfExist = (user) => {
  const errMessage = {
    status: 409,
    message: 'Conflict',
  };

  if (user) throw errMessage;
};

const register = async (name, email, passWord, role = 'customer') => {
  const password = md5(passWord);
  const user = await User.findOne({ where: { [Op.or]: [{ name }, { email }] } });
  checkUserIfExist(user);

  await User.create({ name, email, password, role });

  const createdUser = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['id', 'password'] },
  });

  const token = createToken.create({ email });

  return { status: 201, token, user: createdUser };
};

module.exports = {
  register,
};
