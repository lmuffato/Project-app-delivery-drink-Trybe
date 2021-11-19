import React from 'react';

export default function CheckoutTable() {
  return (
    <table className="table-checkout">
      <thead>
        <tr>
          <th className="th-item">Item</th>
          <th>Descrição</th>
          <th className="th-quantity">Quantidade</th>
          <th className="th-unit-price">Valor Unitário</th>
          <th className="th-sub-total">Sub-total</th>
          <th className="th-remove">Remover Item</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            data-testid={
              `customer_checkout__element-order-table-item-number-${0}`
            }
            className="td-item"
          >
            1
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-name-${0}`
            }
            className="td-description"
          >
            Cerveja Stella 250ml
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-quantity-${0}`
            }
            className="td-quantity"
          >
            3
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-unit-price-${0}`
            }
            className="td-unit-price"
          >
            R$ 3,50
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-sub-total-${0}`
            }
            className="td-subtotal"
          >
            R$ 10,50
          </td>
          <td
            data-testid={
              `customer_checkout__element-order-table-remove-${0}`
            }
            className="td-remove bg-danger"
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
            className="td-remove bg-danger"
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
            className="td-remove bg-danger"
          >
            Remover
          </td>
        </tr>
      </tbody>
    </table>
  );
}
