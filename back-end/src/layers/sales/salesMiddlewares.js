const {
  sales,
  salesProducts,
} = require('../../database/models');

const getAll = async (req, res) => {
  try {
    const data = await sales.findAll();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Busca por id utilizando a chave primária
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sales.findByPk(id);
    console.log(data);
    if (!data) { return res.status(404).json({ message: 'User does not exist' }); }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Buscar por id utilizando where
// const getById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await sales.findOne({
//       where: { id },
//       attributes: { exclude: ['password'] },
//     });
//     return res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, totalPrice, deliveryAddress, deliveryNumber, status, saleDate } = req.body;
    const obj = { userId, totalPrice, deliveryAddress, deliveryNumber, status, saleDate };
    await sales.update(obj, { where: { id } });
  return res.status(200).json(obj);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const dataToDelete = await sales.findByPk(id);
    await dataToDelete.destroy();
    return res.status(200).json(dataToDelete);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// const removeKeyInObject = (obj, key) => {
//   const { [key]: _, ...newObj } = obj;
//   return newObj;
// };

const createNew = async (req, res) => {
  try {
    const {
      userId, totalPrice, deliveryAddress, deliveryNumber, status,
    } = req.body;
    const obj = {
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status,
    };
    const newData = await sales.create(obj);
    return res.status(201).json(newData);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const formatSale = (saleObj) => {
  const {
    userId, totalPrice, deliveryAddress, deliveryNumber, status,
  } = saleObj;
  const obj = {
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
  };
  return obj;
};

const createSale = async (req, res, next) => {
  try {
    const { sale, salesProductsArray } = req.body;
    const obj = formatSale(sale);
    console.log('obj midd', obj);
    const newData = await sales.create(obj);
    req.userInfo = { saleId: newData.id };
    req.salesProducts = { salesProductsArray };
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const formatSalesObjectArray = (saleId, arr) => {
  const newArr = arr.map(({ productId, quantity }) => {
    const newObj = {
     saleId,
     productId,
     quantity,
    };
    return newObj;
  });
  return newArr;
};

const createManySaleProducts = async (req, res) => {
  try {
    const { salesProductsArray } = req.salesProducts;
    const arr = Object.values(salesProductsArray);
    const { saleId } = req.userInfo;
    const newArr = formatSalesObjectArray(saleId, arr[0]);
    const newData = await salesProducts.bulkCreate(newArr);
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
  createSale,
  createManySaleProducts,
};
