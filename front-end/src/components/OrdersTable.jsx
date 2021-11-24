import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

export default function OrdersTable({ orderList }) {
  const path = useLocation().pathname;
  const [elements, setElements] = useState([]);
  useEffect(() => {
    const setState = () => {
      setElements(orderList);
    };
    setState();
  }, [orderList]);
  const removeElement = ({ target }) => {
    const filtered = elements.filter((product) => product.name !== target.value);
    setElements(filtered);
  };
  const button = (value) => (
    <button
      value={ value }
      onClick={ removeElement }
      type="button"
    >
      Remover
    </button>
  );
  const renderElements = () => elements.map((product, index) => (
    <tr key={ index }>
      <th>{index + 1}</th>
      <th>{product.name}</th>
      <th>{product.quantity}</th>
      <th>{`R$${product.price}`}</th>
      <th>{product.price * product.quantity}</th>
      <th>
        { path.includes('checkout')
          ? button()
          : null }
      </th>
    </tr>
  ));
  return (
    <table>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Qunatidade</th>
        <th>Valor Unitario</th>
        <th>Sub-Total</th>
        { path.includes('checkout') ? <th>Remover Item</th> : null}
      </tr>
      { renderElements() }
    </table>
  );
}

OrdersTable.propTypes = {
  orderList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
