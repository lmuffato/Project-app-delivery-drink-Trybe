const md5 = require('md5');

const { User } = require('../database/models');

const loginUser = async (passWord, email) => {
  const password = md5(passWord);

  const findUser = await User.findOne({ where: { email, password } });
  const errMessage = { status: 404, message: 'Not Found' };
  if (!findUser) throw errMessage;

  return { status: 200, data: password };
};

module.exports = {
  loginUser,
};
