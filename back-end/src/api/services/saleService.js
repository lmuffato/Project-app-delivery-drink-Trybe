const { Sales, SalesProducts } = require('../../database/models');

const registerSale = async (saleData) => {
  const { products, ...data } = saleData;

  console.log(products);
  const { dataValues } = await Sales.create(data);

  products.map(({ productId, quantity }) => SalesProducts.create({
     productId, saleId: dataValues.id, quantity,
    }));

  return dataValues;
};

module.exports = {
  registerSale,
};