const { sales, salesProducts, products } = require('../../database/models');

const getAll = async (req, res) => {
  try {
    const data = await sales.findAll();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sales.findByPk(id);
    console.log(data);
    if (data === null) { return res.status(404).json({ message: 'User does not exist' }); }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

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
    const newData = await sales.create(obj);
    req.saleId = { saleId: newData.id };
    req.salesProducts = { salesProductsArray };
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  next();
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
    const { saleId } = req.saleId;
    const newArr = formatSalesObjectArray(saleId, arr[0]);
    // const newData = await salesProducts.bulkCreate(newArr);
    // return res.status(201).json(newData);
    await salesProducts.bulkCreate(newArr);
    return res.status(201).json(saleId);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const segregateItensList = (obj) => {
  const arr = obj.products;
  const itensList = arr.map((ele) => {
    const newObj = {
      productId: ele.id,
      name: ele.name,
      quantity: ele.salesProducts.quantity,
      price: ele.price,
    };
    return newObj;
  });
  return itensList;
};

const segregateSale = (obj) => {
  const key = 'products';
  const { [key]: _, ...newObj } = obj.dataValues;
  return newObj;
};

const mountResponseObj = (obj) => {
  const itensList = segregateItensList(obj);
  const sale = segregateSale(obj);
  const newObj = { sale, itensList };
  // const newObj = Object.assign(sale, itensList);
  return newObj;
};

// const removeKeyInObject = (objn, key) => {
//   const { [key]: _, ...newObj } = objn;
//    return newObj;
// };

const getSaleAndSaleProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = await sales.findOne({
      where: { id },
      include: [{ model: products, as: 'products' }],
    });
    // const { products: _, ...newObj } = obj.dataValues;

    // const newobj = segregateItensList(obj);
    // console.log(newobj);
    // delete obj.products;
    // const newobj = segregateSale(obj);
    // console.log(newobj);

    // const newObj = removeKeyInObject(obj, 'products');
    const newObj = mountResponseObj(obj);
    console.log(newObj);
    return res.status(200).json(newObj);
    // return res.status(200).json(obj);
    // return res.status(200).json(formatedObj);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// const getSaleAndSaleProducts = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const allProducts = await salesProducts.findAll({ where: { saleId: id } });
//     const sale = await sales.findOne({ where: { id } });
//     const obj = { sale, allProducts };
//     return res.status(200).json(obj);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

module.exports = {
  getAll,
  getById,
  updateById,
  deleteById,
  createNew,
  createSale,
  createManySaleProducts,
  getSaleAndSaleProducts,
};

/* BACKUP
const getSaleAndSaleProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = await sales.findAll({
      where: { id },
      include:
        [
          { model: products,
            include: {
              model: salesProducts,
            },
            as: 'products',
          // attributes: [[Sequelize.literal('salesProducts.quantity'), 'quantidade']],
        },
        ],
        attributes: [
          [Sequelize.literal('sales.id'), 'code'],
          // [Sequelize.literal('salesProducts.quantity'), 'quantidade'],
        ],
      });
    return res.status(200).json(obj);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// eslint-disable-next-line max-lines-per-function
const getSaleAndSaleProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = await sales.findAll({
      where: { id },
      include:
        [
          { model: products, as: 'products' },
        ],
      });
    return res.status(200).json(obj);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
*/