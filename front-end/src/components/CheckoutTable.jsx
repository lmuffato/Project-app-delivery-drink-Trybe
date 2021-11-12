import React from 'react';

export default function CheckoutTable() {
  return (
    <table>
      <thead>
        <tr>
          <th
            // data-testid={
            //   `customer_checkout__element-order-table-item-number-${index} `
            // }
            className="th-item"
          >
            Item
          </th>
          <th>Descrição</th>
          <th
            // data-testid={
            //   `customer_checkout__element-order-table-quantity-${index} `
            // }
            className="th-quantity"
          >
            Quantidade
          </th>
          <th
            // data-testid={
            //   `customer_checkout__element-order-table-unit-price-${index} `
            // }
            className="th-unit-price"
          >
            Valor Unitário
          </th>
          <th
            // data-testid={
            //   `customer_checkout__element-order-table-sub-total-${index} `
            // }
            className="th-sub-total"
          >
            Sub-total
          </th>
          <th
            // data-testid={
            //   `customer_checkout__element-order-table-remove-${index} `
            // }
            className="th-remove"
          >
            Remover Item
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            className="td-item"
          >
            1
          </td>
          <td
            className="td-description"
          >
            Cerveja Stella 250ml
          </td>
          <td
            className="td-quantity"
          >
            3
          </td>
          <td
            className="td-unit-price"
          >
            R$ 3,50
          </td>
          <td
            className="td-subtotal"
          >
            R$ 10,50
          </td>
          <td
            className="td-remove"
          >
            Remover
          </td>
        </tr>
        <tr>
          <td
            className="td-item"
          >
            2
          </td>
          <td
            className="td-description"
          >
            Cerveja Skol Latão 450ml
          </td>
          <td
            className="td-quantity"
          >
            4
          </td>
          <td
            className="td-unit-price"
          >
            R$ 4,10
          </td>
          <td
            className="td-subtotal"
          >
            R$ 16,40
          </td>
          <td
            className="td-remove"
          >
            Remover
          </td>
        </tr>
        <tr>
          <td
            className="td-item"
          >
            3
          </td>
          <td
            className="td-description"
          >
            Salgadinho Torcida Churrasco
          </td>
          <td
            className="td-quantity"
          >
            1
          </td>
          <td
            className="td-unit-price"
          >
            R$ 1,56
          </td>
          <td
            className="td-subtotal"
          >
            R$ 1,56
          </td>
          <td
            className="td-remove"
          >
            Remover
          </td>
        </tr>
      </tbody>
    </table>
  );
}
