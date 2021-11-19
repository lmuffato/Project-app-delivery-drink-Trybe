import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../contexts/CartContext';

function CheckoutTr({ item, index }) {
  const { cart, setCart } = useContext(CartContext);
  const subTotal = item.price * item.quantity;

  function handleClic() {
    const newCart = cart.filter((prod) => prod.name !== item.name);
    setCart(newCart);
  }

  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { item.name }
      </td>
      <td>
        <span
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        >
          { item.quantity }
        </span>
      </td>
      <td>
        R$
        <span
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          { item.price.replace('.', ',') }
        </span>
      </td>
      <td>
        R$
        <span
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          { subTotal.toFixed(2).toString().replace('.', ',') }
        </span>
      </td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          onClick={ handleClic }
          type="button"
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

CheckoutTr.propTypes = {
  item: PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
};

export default CheckoutTr;
