const jwt = require('jsonwebtoken');
const { user } = require('../database/models/index');

const secret = 'secret';

const getUserbyEmail = async (email) => {
  const myUser = await user.findOne({ where: { email } });
  if (!myUser) {
    return { status: 404, message: 'email não cadastrado' };
  }
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const payLoad = { name: myUser.name, email: myUser.email, role: myUser.role };
  const token = jwt.sign(payLoad, secret, jwtConfig);
  return { status: 200, data: myUser, token };
};

module.exports = {
  getUserbyEmail,
};
