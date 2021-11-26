import React, { useEffect, useState } from 'react';
import { CartContext } from '../contexts/Cart';

function OrderDetailsTable() {
  const { id } = req.params;
  const { cart } = useContext(CartContext);
  const { orderList } = useContext(OrdersContext);
  const [order, setOrder] = useState('Nenhum item adicionado ainda :(');

  useEffect(() => {
    async function getOrder() {
      if (orderList) {
        setOrder(orderList.find((ord) => ord.id === id));
        console.log(order);
      }
    }
    getOrder();
  }, []);

  const fillTable = ((cartt) => cartt.map(
    ({ productId: name, quantity, unitPrice, subTotal }, key) => (
      <tr key={ key }>
        <td data-testid="customer_order_details__element-order-table-item-number-">
          { key + 1 }
        </td>
        <td data-testid="customer_order_details__element-order-table-name-">{ name }</td>
        <td data-testid="customer_order_details__element-order-table-quantity-">
          { quantity }
        </td>
        <td data-testid="customer_order_details__element-order-table-sub-total-">
          { Number(unitPrice).toLocaleString('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2,
          }) }
        </td>
        <td data-testid=" customer_order_details__element-order-total-price-">
          {/* Colocar a vírgula na moeda: https://pt.stackoverflow.com/questions/264503/personalizar-o-tofixed-para-utilizar-v%C3%ADrgula-como-separador-decimal */}
          { Number(subTotal).toLocaleString('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2,
          }) }
        </td>
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
        </tr>
      </thead>
      <tbody>
        { cart ? fillTable(cart) : 'Nenhum item adicionado :(' }
      </tbody>
    </table>
  );
}

export default OrderDetailsTable;
