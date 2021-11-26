import React, { useContext } from 'react';
import { string } from 'prop-types';
import ProductsContext from '../../context/ProductsContext';

function QuantidadeItens({ data }) {
  const { id } = data;
  const { values: { productsCart },
    actions: { setProductsCart } } = useContext(ProductsContext);
  const [arrayQuantity] = productsCart.filter((product) => product.id === id);
  const { quantity } = arrayQuantity || 0;

  const handleChange = ({ target }, identifier) => {
    const { value } = target;
    const productIndex = productsCart.findIndex((item) => item.id === identifier);
    if (productIndex < 0) {
      setProductsCart((products) => [...products, { id: identifier, quantity: value }]);
    } else {
      const updatedProducts = productsCart.map((element, index) => {
        if (index === productIndex) element.quantity = parseInt(value, 10);
        return element;
      });
      setProductsCart(updatedProducts);
    }
  };

  return (
    <input
      data-testid={ `customer_products__input-card-quantity-${id}` }
      type="number"
      value={ quantity || 0 }
      onChange={ (e) => handleChange(e, id) }
    />
  );
}
QuantidadeItens.propTypes = {
  id: string,
}.isRequired;

export default QuantidadeItens;
