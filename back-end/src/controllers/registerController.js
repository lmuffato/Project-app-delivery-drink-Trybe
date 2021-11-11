const rescue = require('express-rescue');
const registerServices = require('../services/registerService');
const success = require('../utils/success');

const createRegister = rescue(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const result = await registerServices.create({ name, email, password, role });

  if (result.error) return next(result);

  res.status(success.Created).json({ newRegister: result });
});

const getAllRegisters = rescue(async (_req, res, next) => {
  const result = await registerServices.getAll();

  if (result.error) return next(result);

  res.status(success.OK).json({ registers: result });
});

const getByRole = rescue(async (req, res, next) => {
  const { role } = req.params;
  const result = await registerServices.getByRole(role);

  if (result.error) return next(result);

  res.status(success.OK).json({ registers: result });
});

const getByIdRegister = rescue(async (req, res, next) => {
  const { id } = req.params;
  const result = await registerServices.getById(id);

  if (result.error) return next(result);

  res.status(success.OK).json({ register: result });
});

const updateByIdRegister = rescue(async (req, res, next) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;
  const result = await registerServices.updateById(id, { name, email, password, role });

  if (result.error) return next(result);

  res.status(success.OK).json({ message: result });
});

const deleteByIdRegister = rescue(async (req, res, next) => {
  const { id } = req.params;
  const result = await registerServices.deleteById(id);

  if (result.error) return next(result);

  res.status(success.OK).json({ register: result });
});

const getNameByIdRegister = rescue(async (req, res, next) => {
  const { id } = req.params;
  const result = await registerServices.getNameById(id);

  if (result.error) return next(result);
  
  res.status(success.OK).json({ register: result });
});

module.exports = {
  createRegister,
  getAllRegisters,
  getByIdRegister,
  updateByIdRegister,
  deleteByIdRegister,
  getNameByIdRegister,
  getByRole,
};
