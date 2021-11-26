const { sale, saleProduct, product, user } = require('../database/models');

const addNew = async (payload) => sale.create(payload);

const addRelation = async (payload) => {
  try {
    const inserts = payload.map((item) => saleProduct.create(item));
    await Promise.all(inserts);
  } catch (error) {
    console.log(error.message);
  }
};

const getSales = async (id) => {
  const salesList = await sale.findAll({ where: { userId: id } });
  return salesList;
};

const getSaleById = async (id) => {
  const salesList = await sale.findOne({ where: { id } });
  return salesList;
};

const returnParams = (salesList, seller) => {
  const result = {
    id: salesList.id,
    products: salesList.products,
    seller,
    price: salesList.totalPrice,
    status: salesList.status,
    saleDate: salesList.saleDate,
  };
  return result;
};

const getSaleDetails = async (id) => {
  try {
    const salesList = await sale.findOne({
    include: [{
      model: product,
      as: 'products',
    }, 
    ],
    where: { id },
  });
  const seller = await user.findOne({
    where: { id: salesList.sellerId },
  });
  const result = returnParams(salesList, seller);
  return result;
  } catch ({ message }) {
    console.log(message);
  }
};

const changeStatus = async (id) => {
  await sale.update({ where: { id } }, { status: 'Entregue' });
};

module.exports = {
  addNew,
  addRelation,
  getSales,
  getSaleById,
  getSaleDetails,
  changeStatus,
};
