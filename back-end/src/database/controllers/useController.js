const { HTTP_NOT_FOUND, HTTP_BAD_REQUEST } = require('../../status');
const useService = require('../services/useService');

async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const { isRegistered, code, error, data } = await useService.createUserService({ name, email, password });

    if (isRegistered) return res.status(code).json({ error });

    if (!isRegistered) return res.status(code).json(data);
  } catch (e) {
    return res.status(HTTP_NOT_FOUND).json({ error: e.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { notFound, invalidPassword, code, error, data } = await useService.loginService({ email, password });

    if (notFound) return res.status(code).json({ error });

    if (invalidPassword) return res.status(code).json({ error });

    return res.status(code).json(data);
  } catch (e) {
    return res.status(HTTP_BAD_REQUEST).json({ error: e.message });
  }
}

module.exports = {
  createUser,
  login
}
