import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../contexts/Cart';

function ButtonRemoveItem({ id }) {
  const { cart, setCart } = useContext(CartContext);

  const removeItem = () => {
    const updatedCart = cart.filter((product) => product.productId !== id);
    setCart(updatedCart);
  };

  return (
    <button type="button" onClick={ removeItem }>Remover</button>
  );
}

ButtonRemoveItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default ButtonRemoveItem;
