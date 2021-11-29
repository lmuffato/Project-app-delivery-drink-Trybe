import React, { useContext } from 'react';
import { string } from 'prop-types';
import ProductsContext from '../../context/ProductsContext';

function RmItem({ data }) {
  const { id } = data;
  const { values: { productsCart },
    actions: { setProductsCart } } = useContext(ProductsContext);
  const rmProduct = (identifier) => {
    const productIndex = productsCart.findIndex((item) => item.id === identifier);
    if (productIndex < 0) {
      setProductsCart((products) => [...products, { id: identifier, quantity: 1 }]);
    } else {
      const updatedProducts = productsCart.map((element, index) => {
        if (index === productIndex && element.quantity >= 1) element.quantity -= 1;
        return element;
      });
      setProductsCart(updatedProducts);
    }
  };
  return (
    <button
      data-testid={ `customer_products__button-card-rm-item-${id}` }
      type="button"
      onClick={ () => rmProduct(id) }
    >
      -
    </button>
  );
}
RmItem.propTypes = {
  id: string,
}.isRequired;

export default RmItem;
