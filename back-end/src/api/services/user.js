const { Op } = require('sequelize');

const { User } = require('../../database/models');

const getAllUser = async () => {
  // const users = await User.findAll({ attributes: { exclude: ['password'] } });
  const users = await User.findAll();
  return { status: 200, data: users };
};

const findByIdRole = async (email, role) => {
const { id } = await User.findOne({
  where: { [Op.and]: [{ email }, { role }] },
}); // ok
  return { id };
};

module.exports = {
  getAllUser,
  findByIdRole,
};
