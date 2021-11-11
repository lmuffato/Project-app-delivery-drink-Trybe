const md5 = require('md5');
const registerSchema = require('../schemas/registerSchema');
const { user } = require('../database/models');
const clientError = require('../utils/clientError');

const getAll = async () => {
  const founds = await user.findAll();

  return founds.map(({ dataValues: { password: _, ...others } }) => others);
};

const create = async (data) => {
  const { error } = registerSchema.create.validate(data);

  if (error) return clientError.badRequest(error.details[0].message);

  const userList = await getAll();
  
  const checkExist = userList.some((userRegister) => userRegister.email === data.email);

  if (checkExist) return clientError.conflict('User Already Registered');
  
  const hashPassword = md5(data.password);

  const { dataValues: { password: _, ...result } } = await user
    .create({ ...data, password: hashPassword });

  return result;
};

const getById = async (id) => {
  const { error } = registerSchema.checkId.validate(id);

  if (error) return clientError.badRequest(error.details[0].message);
  
  try {
    const { dataValues: { password: _, ...result } } = await user.findByPk(id);

    return result;
  } catch (err) {
    return clientError.badRequest(`Not Found Id: ${id}`);
  }
};

const updateById = async (id, data) => {
  const { error } = registerSchema.updateById.validate(data);

  if (error) return clientError.badRequest(error.details[0].message);

  const { error: errorID } = registerSchema.checkId.validate(id);

  if (errorID) return clientError.badRequest(errorID.details[0].message);

  const checkFound = await getById(id);

  if (checkFound.error) return checkFound;

  const result = await user.update({ ...data }, { where: { id } });
  
  if (!result[0]) return clientError.badRequest('Data is Already updated');

  return `Success Update Id: ${id}`;
};

const deleteById = async (id) => {
  const { error } = registerSchema.checkId.validate(id);

  if (error) return clientError.badRequest(error.details[0].message);

  const result = await user.destroy({ where: { id } });

  if (!result) return clientError.badRequest(`Not Found Id: ${id}`);

  return `Success Delete Id: ${id}`;
};

const getByEmail = async (email) => {
  const foundUser = await user.findOne({ where: { email } });

  return foundUser;
};

const getByRole = async (role) => {
  const sellers = await user.findAll({ where: { role } });
  const { password: _, ...result } = sellers[0].dataValues;

  return [result];
};

const getNameById = async (id) => {
  const { error } = registerSchema.checkId.validate(id);

  if (error) return clientError.badRequest(error.details[0].message);
  
  try {
    const { dataValues: { password: _, ...result } } = await user.findByPk(id);
    
    return result.name;
  } catch (err) {
    return clientError.badRequest(`Not Found Id: ${id}`);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  getByEmail,
  getByRole,
  getNameById,
};
