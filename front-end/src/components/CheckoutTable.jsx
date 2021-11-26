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
    productName,
    productQuantity,
    productUnitPrice,
    productSubTotal } = testIds;

  const fillTable = ((cartt) => cartt.map(
    ({ productId: id, name, quantity, unitPrice, subTotal }, key) => (
      <tr key={ key }>
        <td data-testid={ `customer_checkout__element-order-table-item-number--${key}` }>
          { key + 1 }
        </td>
        <td data-testid={ productName + key }>{ name }</td>
        <td data-testid={ productQuantity + key }>{ quantity }</td>
        <td data-testid={ productUnitPrice + key }>
          { Number(unitPrice).toLocaleString('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2,
          }) }
        </td>
        <td data-testid={ productSubTotal + key }>
          {/* Colocar a vírgula na moeda: https://pt.stackoverflow.com/questions/264503/personalizar-o-tofixed-para-utilizar-v%C3%ADrgula-como-separador-decimal */}
          { Number(subTotal).toLocaleString('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2,
          }) }
        </td>
        <td data-testid={ productRemove + key }><ButtonRemoveItem id={ id } /></td>
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
    productRemove: PropTypes.string.isRequired,
  }).isRequired,
};

export default CheckoutTable;
