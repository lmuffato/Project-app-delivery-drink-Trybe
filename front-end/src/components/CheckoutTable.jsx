import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../contexts/Cart';
import ButtonRemoveItem from './ButtonRemoveItem';

function CheckoutTable(props) {
  const { cart } = useContext(CartContext);
  const { testIds: {
    productId,
    productName,
    productQuantity,
    productUnitPrice,
    productSubTotal } } = props;

  const fillTable = ((cartt) => cartt.map(
    ({ productId: id, name, quantity, unitPrice, subTotal }, key) => (
      <tr key={ key }>
        <td data-testid={ productId + id }>{ id }</td>
        <td data-testid={ productName + id }>{ name }</td>
        <td data-testid={ productQuantity + id }>{ quantity}</td>
        <td data-testid={ productUnitPrice + id }>{ unitPrice }</td>
        <td data-testid={ productSubTotal + id }>{ subTotal }</td>
        <td><ButtonRemoveItem id={ id } /></td>
      </tr>
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
  }).isRequired,
};

export default CheckoutTable;
