const { User } = require('../database/models');

const loginServices = async (email) => {
  const findUser = await User.findOne({ where: { email } });
  
  if (!findUser) {
    return { code: 404, message: 'Not found' };
  }
  
  return findUser;
};

module.exports = loginServices;
