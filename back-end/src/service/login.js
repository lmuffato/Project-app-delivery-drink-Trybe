const { createHashPassword } = require('../encrypt/bcrypt');
const { User } = require('../database/models');


const loginServices = async (email, password) => {
  const findUser = await User.findOne({ where: { email } });
  
  if (!findUser) {
    return { code: 404, message: 'Not found' };
  }

  // await createHashPassword(password);
  
  return findUser;

};

module.exports = loginServices;
