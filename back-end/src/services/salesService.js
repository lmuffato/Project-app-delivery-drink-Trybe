const { Sale } = require('../database/models');
const { SaleProduct, Product } = require('../database/models');

const createSaleElement = async (saleInfo) => {
  const { totalPrice, deliveryAddress, deliveryNumber, userId, sellerId } = saleInfo;
  const result = await Sale.create({
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    userId,
    sellerId,
    status: 'Pendente',
  }).catch((error) => ({ error: { message: error.message } }));
  return result;
};

const registerProductsOnSale = async (saleId, products) => {
  // console.log(saleId);
  // const { error } = products.reduce(async (_acc, product) => {
  //   console.log(_acc);
  //   const { productId, quantity } = product;
  //   const { er } = await SaleProduct.create({
  //     productId,
  //     saleId,
  //     quantity,
  //   }).catch((e) => ({ er: e.message }));
  //   if (er !== undefined) {
  //     return { error: { message: er } };
  //   }
  // }, {});
  // return { error };
  const productsInfo = products.map(({ id, quantity }) => ({ productId: id, quantity }));

  productsInfo.forEach(async (product) => {
    try {
      await SaleProduct.create({ ...product, saleId });
    } catch (e) {
      return { error: { message: e.message } };
    }
  });
  return true;
};

const createSale = async (saleData) => {
  const { totalPrice, deliveryAddress, deliveryNumber, userId, sellerId, products } = saleData;
  const saleInfo = { totalPrice, deliveryAddress, deliveryNumber, userId, sellerId };
  const { dataValues, error } = await createSaleElement(saleInfo);
  if (error !== undefined) {
    return { error };
  }
  const saleId = dataValues.id;

  // const { error: errorProductsInception } = await registerProductsOnSale(saleId, products);
  // if (errorProductsInception !== undefined) {
  //   return { error: errorProductsInception };
  // }

  const saleProductResponse = await registerProductsOnSale(saleId, products);
  if (saleProductResponse.error) {
    return { error: saleProductResponse };
  }
  return { saleId: dataValues.id };
};

const getProductsQuantities = async (sale) => {
  const productsLength = sale.products.length;
  const products = sale.products;
  let quantityArray = [];
  for (let index = 0; index < productsLength; index += 1) {
    const [{quantity}] = await SaleProduct.findAll({
      where: { sale_id: sale.id, product_id: sale.products[index].id},
      attributes: ['quantity'],
    });
    quantityArray.push(quantity);
  }
  return quantityArray;
};

const saleById = async (id) => {
  const [sale] = await Sale.findAll({
    where: { id },
    include: [{ model: Product, as: 'products', through: { attributes: [] } }],
  });

  const productsQuantities = await getProductsQuantities(sale);
  return { sale, productsQuantities };
}

module.exports = {
  createSale,
  saleById,
};