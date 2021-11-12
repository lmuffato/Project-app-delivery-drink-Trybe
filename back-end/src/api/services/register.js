const md5 = require('md5');

const { User } = require('../../database/models');

const checkUserIfExist = (user) => {
  const errMessage = {
    status: 409,
    message: 'User already exist',
  };

  if (user) throw errMessage;
};

const register = async (name, email, passWord, role = 'customer') => {
  const password = md5(passWord);
  const user = await User.findOne({ where: { name, email } });

  checkUserIfExist(user);
  
  await User.create({ name, email, password, role });

  return {
    status: 201,
    message: 'User created',
  };
};

module.exports = {
  register,
};
