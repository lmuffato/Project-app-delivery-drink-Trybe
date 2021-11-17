const md5 = require('md5');
const { User } = require('../database/models');

const loginServices = async (email, password) => {
  const findUser = await User.findOne({ where: { email } });

  if (!findUser) {
    return { code: 404, message: 'Não encontrado' };
  }
   
  const md5Password = md5(password); 
  
  if (md5Password !== findUser.password) {
    return { code: 401, message: 'Senha ou Usuário inválido' };
  }
  
  return findUser;
};

module.exports = loginServices;
