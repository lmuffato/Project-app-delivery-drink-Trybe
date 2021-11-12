const { salesProducts } = require('../../database/models');

const getAll = async (req, res) => {
  try {
    const data = await salesProducts.findAll();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Buscar por id utilizando where
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = { sale_id: id};
    const data = await salesProducts.findOne({ where: obj });
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const objToFind = { sale_id: id };
    const { quantity, sale_id, product_id } = req.body;
    const obj = { quantity, sale_id, product_id };
    await salesProducts.update(obj, { where: objToFind });
  return res.status(200).json(obj);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = { sale_id: id};
    const dataToDelete = await salesProducts.findOne({ where: obj });
    await dataToDelete.destroy();
    return res.status(200).json(dataToDelete);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createNew = async (req, res) => {
  try {
    const { quantity, sale_id, product_id } = req.body;
    const obj = { quantity, sale_id, product_id };
    const newData = await salesProducts.create(obj);
    return res.status(201).json(newData);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  updateById,
  deleteById,
  createNew,
};
