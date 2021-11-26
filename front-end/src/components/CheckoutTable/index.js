import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { useCart } from '../../hooks/useCart';

function CheckoutTable({ cart, setCart }) {
  const { removeTotalItem } = useCart();

  const dataTestID = (index) => (
    `customer_checkout__element-order-table-item-number-${index}`
  );

  const handleDelete = (id) => {
    removeTotalItem(id);
    setCart(JSON.parse(localStorage.getItem('carrinho')));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Total</th>
          <th>Remover</th>
        </tr>
      </thead>

      <tbody>
        {cart.map(({ id, name, quantity, price }, index) => (
          <tr key={ id }>
            <td
              data-testid={ dataTestID(index) }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {name}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {quantity}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {String(price).replace('.', ',')}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              R$
              {(+price * +quantity).toFixed(2).replace('.', ',')}
            </td>
            <td>
              <button
                type="button"
                onClick={ () => handleDelete(id) }
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                className="removeButtonCheckout"
              >
                REMOVER
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

CheckoutTable.propTypes = {
  cart: PropTypes.objectOf.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default CheckoutTable;
