import React, { useContext } from 'react';
import { string } from 'prop-types';
import ProductsContext from '../../context/ProductsContext';

function QuantidadeItens({ data }) {
  const { id } = data;
  const { values: { productsCart } } = useContext(ProductsContext);
  const [arrayQuantity] = productsCart.filter((product) => product.id === id);
  const { quantity } = arrayQuantity || 0;
  return (
    <input
      data-testid={ `customer_products__input-card-quantity-${id}` }
      type="number"
      value={ quantity }
    />
  );
}
QuantidadeItens.propTypes = {
  id: string,
}.isRequired;

export default QuantidadeItens;
