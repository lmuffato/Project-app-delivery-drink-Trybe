import React, { useContext } from 'react';
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

export default CheckoutTable;
