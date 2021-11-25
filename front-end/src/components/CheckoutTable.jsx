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
    productSubTotal,
    productRemove } } = props;

  const fillTable = ((cartt) => cartt.map(
    ({ productId: id, name, quantity, unitPrice, subTotal }, key) => (
      <tr key={ key }>
        <td data-testid={ `${productId}-${key}` }>{ key + 1 }</td>
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
