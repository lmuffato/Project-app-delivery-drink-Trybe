import React from 'react';
import '../styles/OrderDetails.css';

const pedido = [{
  id: 1,
  descricao: 'Refrigerante',
  quantidade: 4,
  valorUnitario: 6.00,
}];

const OrderDetails = () => (
  pedido.map(({ id, descricao, quantidade, valorUnitario }, index) => (
    <div key={ id }>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
        <tr>
          <td
            data-testid={
              `customer_checkout__element-order-table-item-number-${index}`
            }
          >
            { id }
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-name-${index}`
            }
          >
            { descricao }
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-quantity-${index}`
            }
          >
            { quantidade }
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-unit-price-${index}`
            }
          >
            {`R$ ${valorUnitario}` }
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-sub-total-${index}`
            }
          >
            {`R$ ${quantidade * valorUnitario}` }
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-remove-${index}`
            }
          >
            Remover Item
          </td>
        </tr>
      </table>
      <h1 data-testid="customer_checkout__element-order-total-price">
        Total: SOMA
      </h1>
    </div>))
);

export default OrderDetails;
