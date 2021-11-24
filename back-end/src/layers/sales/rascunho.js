// const array = [ // Apenas como exemplo, deve ser excluído apos funcionalidade
//   { productId: 1, name: 'cerveja', quantity: 10, price: 8 },
//   { productId: 2, name: 'cachaça', quantity: 2, price: 10 },
//   { productId: 3, name: 'vinho', quantity: 1, price: 60 },
//   { productId: 4, name: 'whisk', quantity: 5, price: 80 },
// ];

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
// const obj = { saleId: 1 };

/* Método 3 */
// const formatSalesObjectArray = (saleId, arr) => {
//   const newArr = arr.map(({ productId, quantity }) => {
//     const newObj = {
//      saleId,
//      productId,
//      quantity,
//     };
//     return newObj;
//   });
//   return newArr;
// };

// console.log(formatSalesObjectArray(obj, array));

// const saleProducts = {
//   saleProductsArray:
//     [
//       { productId: 2,
//       name: 'Heineken 600ml',
//       quantity: 5,
//       price: '7.50' },
//     { productId: 1,
//       name: 'Skol Lata 250ml',
//       quantity: 10,
//       price: '2.20' },
//     { productId: 3,
//       name: 'Antarctica Pilsen 300ml',
//       quantity: 6,
//       price: '2.49' },
//     ],
// };

// console.log(saleProducts);

// const array1 = [['A', 'B', 'C']];
// const [arr] = array1;

// console.log(arr);

const response = {
  id: 10,
  userId: 2,
  totalPrice: 100.00,
  deliveryAddress: 'Rua B',
  deliveryNumber: 666,
  status: 'em andamento',
  saleDate: '2021-11-24T17:53:04.000Z',
  products: [
    {
      id: 1,
      name: 'Skol Lata 250ml',
      price: 2.20,
      urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
      salesProducts: {
        quantity: 1,
        saleId: 10,
        productId: 1,
      },
    },
    {
      id: 2,
      name: 'Heineken 600ml',
      price: 7.50,
      urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
      salesProducts: {
        quantity: 2,
        saleId: 10,
        productId: 2,
      },
    },
    {
      id: 3,
      name: 'Antarctica Pilsen 300ml',
      price: 2.49,
      urlImage: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
      salesProducts: {
        quantity: 3,
        saleId: 10,
        productId: 3,
      },
    },
    {
      id: 4,
      name: 'Brahma 600ml',
      price: 7.50,
      urlImage: 'http://localhost:3001/images/brahma_600ml.jpg',
      salesProducts: {
        quantity: 4,
        saleId: 10,
        productId: 4,
      },
    },
  ],
};

// console.log(response);

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
// console.log(segregateItensList(response));

// Como remover chave de objeto
const segregateSale = (obj) => {
  const key = 'products';
  const { [key]: _, ...newObj } = obj;
   return newObj;
};
// console.log(segregateSale(response));

const mountResponseObj = (obj) => {
  const itensList = segregateItensList(obj);
  const sale = segregateSale(obj);
  const newObj = { ...sale, itensList };
  return newObj;
};

// const convertToJson = (obj) => JSON.stringify(obj, null, '\t');

// console.log(convertToJson(mountResponseObj(response)));

console.log(mountResponseObj(response));

const removeKeyInObject = (obj, key) => {
  const { [key]: _, ...newObj } = obj;
   return newObj;
};

console.log(removeKeyInObject(response, 'products'));
