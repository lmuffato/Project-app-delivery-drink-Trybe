const { User } = require('../database/models');

const loginServices = async (email, password) => {
  const findUser = await User.findOne({ where: { email } });
  
  if (findUser.password !== password || findUser.email !== email) {
    return { code: 404, message: 'Not found' };
  }
  
  return findUser;
};

module.exports = loginServices;
