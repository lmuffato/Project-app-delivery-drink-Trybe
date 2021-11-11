const { user } = require('../database/models');

const loginServices = async (email) => {
  const findUser = await user.findOne({ where: { email } });
  
  if (!findUser) {
    return { code: 404, message: 'Not found' };
  }
  
  return findUser;
};

module.exports = loginServices;
