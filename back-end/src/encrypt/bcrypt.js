const bcrypt = require('bcrypt');

const saltRound = 10;

const createHashPassword = async (password) => {
  const encryptPassword = await bcrypt.hash(password, saltRound);
  return encryptPassword;
};

const isPasswordsEqual = async (password, hashPassword) => {
  try {
    const comparePassword = await bcrypt.compare(password, hashPassword);
    return comparePassword;
  } catch (error) {
    console.log('isPasswordsEqual', error);
  }
};

module.exports = {
  createHashPassword,
  isPasswordsEqual
};
