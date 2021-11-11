const { User } = require("../models");
const { createToken } = require("../../validations/auth/validateJWT")

async function findUserByEmail(email) {
  const user = await User.findOne({ where: { email } });
  return user;
}

async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const userLogin = { password, email };

    const isUserResgistered = await findUserByEmail(email);

    if (isUserResgistered) {
      return res.status(409).json({ error: "User already registered" });
    }
    const token = await createToken(userLogin);

    await User.create({ name, email, password, token, role: "customer" });
    return res.status(201).json({ name, email, token, role: "customer" });
  } catch (e) {
    return res.status(404).json({ error: error.message });
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
