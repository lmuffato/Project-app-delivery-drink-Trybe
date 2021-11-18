const md5 = require('md5');
const { User } = require('../database/models');

const createUser = async (name, email, password, role) => {
  const findUser = await User.findOne({ where: { email } });
 
  if (findUser) {
    return { code: 409, message: 'Usuário já existe' };
  }
 
  const addUser = await User.create({ name, email, password: md5(password), role });

  return addUser;
};

module.exports = createUser;
