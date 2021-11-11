const { createHashPassword } = require('../encrypt/bcrypt');
const { User } = require('../database/models');

const createUser = async (name, email, password, role) => {
  const findUser = await User.findOne({ where: { email } });
 
  if (findUser) {
    return { code: 409, message: 'conflict' };
  }

  const passwordHash = await createHashPassword(password);
 
  const addUser = await User.create({ name, email, password: passwordHash, role });
  return addUser;
};

module.exports = createUser;
