const { user } = require('../database/models/index');

const getUserbyEmail = async (email) => {
  const myUser = await user.findOne({ where: { email } });
  if (!myUser) {
    return { status: 404, message: 'email não cadastrado' };
  }
  return { status: 200, data: myUser };
};

module.exports = {
  getUserbyEmail,
};
