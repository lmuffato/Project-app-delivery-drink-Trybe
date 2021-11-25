import React from 'react';
import PropTypes from 'prop-types';

function CheckoutTable({ cart }) {
  return (
    <table className="checkoutContainer">
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
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{+price * +quantity}</td>
            <td>REMOVER</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

CheckoutTable.propTypes = {
  cart: PropTypes.objectOf.isRequired,
};

export default CheckoutTable;
