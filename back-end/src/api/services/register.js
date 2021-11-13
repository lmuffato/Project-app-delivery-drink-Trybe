const md5 = require('md5');
const { Op } = require('sequelize');

const { User } = require('../../database/models');

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

  return {
    status: 201,
    message: 'Created',
  };
};

module.exports = {
  register,
};
