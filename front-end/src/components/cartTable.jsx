import React from 'react';

export default function CartTable() {
  const indexTestId = 'customer_checkout__element-order-table-item-number-';
  const unitPriceTestId = 'customer_checkout__element-order-table-unit-price-';
  const subTotalTestId = 'customer_checkout__element-order-table-sub-total-';
  const cart = JSON.parse(localStorage.getItem('shoppingCart'));
  return (
    <table className="border-2">
      <thead>
        <tr>
          <th className="border-2 w-1/12">item</th>
          <th className="border-2">Descrição</th>
          <th className="border-2 w-1/12">Quantidade</th>
          <th className="border-2 w-1/12">Valor unitário</th>
          <th className="border-2 w-1/12">Sub-total</th>
          <th className="border-2 w-1/12">Remover item</th>
        </tr>
      </thead>
      {
        cart.map((item, index) => (
          <tbody key={ index }>
            <tr className="">
              <td
                data-testid={ `${indexTestId}${index}` }
                className="border-2 w-1/12"
              >
                { index + 1 }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
                className="border-2"
              >
                { item.name }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
                className="border-2 w-1/12"
              >
                { item.qtd }
              </td>
              <td
                data-testid={ `${unitPriceTestId}${index}` }
                className="border-2 w-1/12"
              >
                { item.price.toFixed(2).split('.').join(',') }
              </td>
              <td
                data-testid={ `${subTotalTestId}${index}` }
                className="border-2 w-1/12"
              >
                { item.subtotal.toFixed(2).split('.').join(',') }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                className="border-2 w-1/12"
              >
                Remover item
              </td>
            </tr>
          </tbody>
        ))
      }
    </table>
  );
}
