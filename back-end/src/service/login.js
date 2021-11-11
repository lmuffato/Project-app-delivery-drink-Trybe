// const { createHashPassword } = require('../encrypt/bcrypt');
const { user } = require('../database/models');

const loginServices = async (email/* , password */) => {
  const findUser = await user.findOne({ where: { email } });
  
  if (!findUser) {
    return { code: 404, message: 'Not found' };
  }

  // await createHashPassword(password);
  
  return findUser;
};

module.exports = loginServices;
