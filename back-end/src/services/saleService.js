// const database = require('../database/models');

// const register = async (customer, seller, products, address) => {
//   const value = products
//     .reduce((acc, product) => acc + Number(product.price) * product.quantity, 0);
//   const sale = await database.sale
//     .create({
//       user_id: customer.id,
//       seller_id: seller.id,
//       total_price: value,
//       delivery_address: address.street,
//       delivery_number: address.number,
//   });
//   // for (const product of products) {
//   //   if (product.quantity > 0) {
//   //     await database.salesProduct.create({ product_id: product.id, sale_id: sale.id, quantity: product.quantity })
//   //   }
//   // }
// // }
