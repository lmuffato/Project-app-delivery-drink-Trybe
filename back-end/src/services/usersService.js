const { User } = require('../database/models/index');

const getUserbyEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return { status: 404, message: 'email não cadastrado' };
  }
  return { status: 200, data: user };
};

module.exports = {
  getUserbyEmail,
};