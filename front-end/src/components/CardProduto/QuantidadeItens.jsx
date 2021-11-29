import React, { /*  useContext, */ useState } from 'react';
import { string } from 'prop-types';
// import ProductsContext from '../../context/ProductsContext';
import useProductManager from '../../hooks/useProductManager';

function QuantidadeItens({ data }) {
  const [setProduct] = useProductManager();
  // const { values: { productsCart } } = useContext(ProductsContext);
  const [qntItens, setQntItens] = useState(0);
  const { id, price } = data;

  // const [arrayQuantity] = productsCart.filter((product) => product.id === id);
  // const { quantity } = arrayQuantity;

  const handleChange = ({ target }) => {
    const { value } = target;
    setQntItens(value);
    const dataProductAdd = {
      id, price, inputQuantity: Number(value), operation: 'change',
    };

    setProduct(dataProductAdd);
  };

  return (
    <input
      data-testid={ `customer_products__input-card-quantity-${id}` }
      type="number"
      value={ qntItens }
      onChange={ (e) => handleChange(e) }
    />
  );
}
QuantidadeItens.propTypes = {
  id: string,
}.isRequired;

export default QuantidadeItens;
