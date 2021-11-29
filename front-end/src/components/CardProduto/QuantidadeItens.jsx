import React, { useContext } from 'react';
import { string } from 'prop-types';
import ProductsContext from '../../context/ProductsContext';
import useProductManager from '../../hooks/useProductManager';

function QuantidadeItens({ data }) {
  const [setProduct] = useProductManager();
  const { id, price } = data;

  const { values: { productsCart } } = useContext(ProductsContext);

  const [arrayQuantity] = productsCart.filter((product) => product.id === id);
  const { quantity } = arrayQuantity || '';

  const handleChange = ({ target }) => {
    const { value } = target;
    const dataProductAdd = {
      id, price, inputQuantity: Number(value), operation: 'change',
    };

    setProduct(dataProductAdd);
  };

  return (
    <input
      data-testid={ `customer_products__input-card-quantity-${id}` }
      type="number"
      value={ quantity }
      onChange={ (e) => handleChange(e) }
    />
  );
}
QuantidadeItens.propTypes = {
  id: string,
}.isRequired;

export default QuantidadeItens;
