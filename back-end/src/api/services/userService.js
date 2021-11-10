const crypto = require('crypto');
const { Op } = require('sequelize');
const { User } = require('../../database/models');

const encrypt = (data) => 
  crypto.createHash('md5').update(data).digest('hex');

const createUser = async ({ name, email, password, role }) => {
  const hashPassword = encrypt(password);
  const [user, created] = await User.findOrCreate({
    where: {
      [Op.or]: [{ name }, { email }],
    },
    defaults: {
      name,
      email,
      password: hashPassword,
      role,
    },
  });

  if (!created) {
    return created;
  }

  return user;
};

module.exports = {
  createUser,
};