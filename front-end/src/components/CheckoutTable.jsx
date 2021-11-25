import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../contexts/Cart';
import OrderItem from './OrderItem';

function CheckoutTable() {
  const { cart } = useContext(CartContext);
  const fillTable = ((cartt) => cartt.map(
    (info, index) => (
      <OrderItem info={ info } index={ index } key={ index } />
    ),
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>RemoverItem</th>
        </tr>
      </thead>
      <tbody>
        { cart ? fillTable(cart) : 'Nenhum item adicionado :(' }
      </tbody>
    </table>
  );
}

CheckoutTable.propTypes = {
  testIds: PropTypes.shape({
    productId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    productName: PropTypes.string.isRequired,
    productQuantity: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    productUnitPrice: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    productSubTotal: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    productRemove: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  }).isRequired,
};

export default CheckoutTable;
