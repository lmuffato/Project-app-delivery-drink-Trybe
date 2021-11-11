const md5 = require('md5');
const { User } = require('../database/models');

const loginServices = async (email, password) => {
  const findUser = await User.findOne({ where: { email } });
  
  if (!findUser) {
    return { code: 404, message: 'Not found' };
  }
   
  const md5Password = md5(password); 
  
  if (md5Password !== findUser.password) {
    return { code: 401, message: 'Invalid username and/or password(s)' };
  }
  
  // o fluxo de jwt virá aqui
  return findUser;
};

module.exports = loginServices;
