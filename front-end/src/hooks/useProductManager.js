import { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

const quantityToOperation = ({ operation, quantity, inputQuantity }) => {
  let newQuantity = 0;

  switch (operation) {
  case 'add':
    newQuantity = quantity + 1;
    break;
  case 'rm':
    newQuantity = quantity - 1;
    break;
  default:
    newQuantity = inputQuantity || 0;
    break;
  }

  return newQuantity;
};

const productData = ({ id, price, quantity, operation, inputQuantity }) => {
  const calcQuantity = quantityToOperation({ operation, quantity, inputQuantity });

  const updateProd = {
    id,
    quantity: calcQuantity,
    price,
    total: calcQuantity * price,
  };

  return updateProd;
};

const useProductManager = () => {
  const {
    values: { productsCart },
    actions: { setProductsCart },
  } = useContext(ProductsContext);

  const setProduct = (data) => {
    const { id, price, operation, inputQuantity } = data;
    const productIndex = productsCart.findIndex((item) => item.id === id);
    let updatedDataProduct = {};

    if (productIndex < 0) {
      updatedDataProduct = productData({
        id, price, quantity: 0, operation, inputQuantity });

      setProductsCart((products) => [...products, updatedDataProduct]);
    } else {
      const newShopCart = productsCart;
      const actualQuantity = productsCart[productIndex].quantity;
      if (actualQuantity <= 0) {
        newShopCart.splice(productIndex, 1);
        console.log(newShopCart);
      } else {
        updatedDataProduct = productData({
          id, price, quantity: actualQuantity, inputQuantity, operation });
        newShopCart[productIndex] = updatedDataProduct;
        console.log(newShopCart);
      }
      setProductsCart(() => newShopCart);
    }
  };

  return [setProduct];
};

export default useProductManager;
