const { HTTP_NOT_FOUND } = require('../../status');
const useService = require('../services/useService');

async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const { isRegistered, code, error, data } = await useService.createUserService({ name, email, password, role });

    if (isRegistered) return res.status(code).json({ error });

    if (!isRegistered) return res.status(code).json(data);
  } catch (e) {
    return res.status(HTTP_NOT_FOUND).json({ error: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const userLogin = { password, email };
    const isUserResgistered = await findUserByEmail(email);

    if (!isUserResgistered) {
      return res.status(409).json({ error: "User dont exists" });
    }

    if (password !== isUserResgistered.password) {
      return res.status(409).json({ error: "Invalid data" });
    } else {
      const token = await createToken(userLogin);
      return res.status(200).json({ token });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createUser,
  login
}
