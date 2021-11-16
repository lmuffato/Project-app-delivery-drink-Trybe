const { User } = require('../../models');

const validateEntries = async (entries) => {
  const { name, email, password, role } = entries;
  if (!name || !email || !password || !role) {
    return {
      status: 404,
      message: "Entries not found",
    };
  }
  const exists = await User.findAll({ where: { email }});
  console.log(exists);
  if (exists.length > 0) {
    return {
      status: 409,
      message: "User already exists",
    };
  }
  return true;
};

module.exports = {
  validateEntries,
}
