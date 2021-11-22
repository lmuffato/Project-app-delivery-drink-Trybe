const array = [ // Apenas como exemplo, deve ser excluído apos funcionalidade
  { productId: 1, name: 'cerveja', quantity: 10, price: 8 },
  { productId: 2, name: 'cachaça', quantity: 2, price: 10 },
  { productId: 3, name: 'vinho', quantity: 1, price: 60 },
  { productId: 4, name: 'whisk', quantity: 5, price: 80 },
];

// const b = (id, arr) => {
//   const c = arr.map((ele) => ({ ...ele, saleId: id }));
//   return c;
// };

/* Método 1 */
// const d = (id, arr) => {
//   const c = arr.map((ele) => {
//     delete ele.price;
//     delete ele.name;
//     return { ...ele, saleId: id };
//   });
//   return c;
// };

// console.log(d(1, array));

/* Método 2 */
// const formatSalesObjectArray = (id, arr) => {
//   const newArr = arr.map(({ productId, quantity }) => {
//     const newObj = {
//      saleId: id,
//      productId,
//      quantity,
//     };
//     return newObj;
//   });
//   return newArr;
// };

// console.log(formatSalesObjectArray(1, array));
const obj = { saleId: 1 };

/* Método 3 */
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

console.log(formatSalesObjectArray(obj, array));

const saleProducts = {
  saleProductsArray:
    [
      { productId: 2,
      name: 'Heineken 600ml',
      quantity: 5,
      price: '7.50' },
    { productId: 1,
      name: 'Skol Lata 250ml',
      quantity: 10,
      price: '2.20' },
    { productId: 3,
      name: 'Antarctica Pilsen 300ml',
      quantity: 6,
      price: '2.49' },
    ],
};

console.log(saleProducts);
