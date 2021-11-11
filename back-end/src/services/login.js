const md5 = require('md5');

const { User } = require('../database/models');

const loginUser = async (passWord, email) => {
  const password = md5(passWord);

  const findUser = await User.findOne({ where: { email, password } });
  const errMessage = { status: 401, message: 'login invalido' };
  if (!findUser) throw errMessage;

  return { status: 200, data: password };
};

module.exports = {
  loginUser,
};
