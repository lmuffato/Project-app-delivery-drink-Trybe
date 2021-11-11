const service = require('../service');

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const create = await service.user(name, email, password, role);
    if (create.message) {
      return res.status(create.code).json({ message: create.message });
    }
    return res.status(201).json(create);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = createUser;
