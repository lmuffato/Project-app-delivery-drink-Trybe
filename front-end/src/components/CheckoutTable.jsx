import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../contexts/Cart';
import ButtonRemoveItem from './ButtonRemoveItem';

function CheckoutTable() {
  const { cart } = useContext(CartContext);
  const testIds = {
    productId: 'customer_checkout__element-order-table-item-number-',
    productName: 'customer_checkout__element-order-table-name-',
    productQuantity: 'customer_checkout__element-order-table-quantity-',
    productUnitPrice: 'customer_checkout__element-order-table-unit-price-',
    productSubTotal: 'customer_checkout__element-order-table-sub-total-',
  };
  const {
    productId,
    productName,
    productQuantity,
    productUnitPrice,
    productSubTotal } = testIds;

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
    productId: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productQuantity: PropTypes.string.isRequired,
    productUnitPrice: PropTypes.string.isRequired,
    productSubTotal: PropTypes.string.isRequired,
  }).isRequired,
};

export default CheckoutTable;
