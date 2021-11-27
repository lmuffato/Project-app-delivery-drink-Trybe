const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { users } = require('../../database/models');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

const authentication = require('../authentication/authMiddleware');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = crypto.createHash('md5').update(password).digest('hex');
    const user = await users.findOne({ where: { email, password: hash } });
    if (!user) return res.status(404).json({ message: false });

    const { dataValues } = user;

    const { password: _, ...payload } = dataValues;

    const token = authentication.generateToken(payload);

    const { id, name, role } = payload;
 
    return res.status(200).json({ name, email, id, role, token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createNew = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = crypto.createHash('md5').update(password).digest('hex');
    const oldUserByEmail = await users.findOne({ where: { email } });
    const oldUserByName = await users.findOne({ where: { name } });

    if (oldUserByEmail || oldUserByName) return res.status(409).json({ message: false });
    const obj = { name, email, password: hash, role: 'customer' };
    await users.create(obj);
    return res.status(201).json({ message: true });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createByAdmin = async (req, res) => {
  try {
    const { name, email, password, role: roole } = req.body;
    const hash = crypto.createHash('md5').update(password).digest('hex');
    const oldUserByEmail = await users.findOne({ where: { email } });
    const oldUserByName = await users.findOne({ where: { name } });
    if (oldUserByEmail || oldUserByName) return res.status(409).json({ message: 'Conflict' });
    await users.create({ name, email, password: hash, role: roole });
    return res.status(201).json({ message: true });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const verifyTokenNotExpired = (req, res) => {
  try {
    const { token } = req.body;
    jwt.verify(token, secret);
    return res.status(200).json({ message: true });
  } catch (err) {
    return res.status(401).json({ message: false });
  }
};

const getAll = async (_req, res) => {
  try {
    const data = await users.findAll({ attributes: { exclude: ['password'] } });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getAllSellers = async (_req, res) => {
  try {
    const data = await users.findAll({
      where: { role: 'seller' },
      attributes: { exclude: ['password', 'role'] },
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getAllCustomers = async (_req, res) => {
  try {
    const data = await users.findAll({
      where: { role: 'customer' },
      attributes: { exclude: ['password'] },
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Busca por id utilizando a chave primária
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await users.findByPk(id,
      // { attributes: ['name'],
      { attributes: { exclude: ['password'] },
    });
    if (data === null) { return res.status(404).json({ message: 'User does not exist' }); }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { userEmail } = req.body;
    const data = await users.findOne({
      where: { email: userEmail },
      attributes: { exclude: ['password'] },
    });
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    const obj = { name, email, password, role };
    await users.update(obj, { where: { id } });
  return res.status(200).json(obj);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const dataToDelete = await users.findByPk(id);
    await dataToDelete.destroy();
    return res.status(200).json(dataToDelete);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/* // Como remover chave de objeto
const removeKeyInObject = (obj, key) => {
  const { [key]: _, ...newObj } = obj;
   return newObj;
};
*/

module.exports = {
  getAll,
  getAllSellers,
  getAllCustomers,
  getById,
  updateById,
  deleteById,
  createNew,
  login,
  createByAdmin,
  verifyTokenNotExpired,
  getUserByEmail,
};
