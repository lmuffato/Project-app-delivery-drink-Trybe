const { userService } = require('../service');

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const create = await userService.createUser(name, email, password, role);
    if (create.message) {
      return res.status(create.code).json({ message: create.message });
    }
    return res.status(201).json(create);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const getusers = async (_req, res) => {
  try {
    const create = await userService.getUsers();
    return res.status(200).json(create);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);
  return res.status(204).end();
};

module.exports = {
  createUser,
  getusers,
  deleteUser,
};
