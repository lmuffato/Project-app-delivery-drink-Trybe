import React from 'react';
import PropTypes from 'prop-types';

export default function OrderProductsTable({ items }) {
  console.log(items);

  const subTotalCalc = (product) => {
    const { quantity, price } = product;
    const subtotal = quantity * parseFloat(price, 2);
    const res = subtotal.toFixed(2).toString().replace(/\./, ',');
    return res;
  };

  const totalPrice = () => {
    const price = items
      .reduce((acc, product) => acc + Number(product.price) * product.quantity, 0);
    return price.toFixed(2).toString().replace(/\./, ',');
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          { items
            .map((product, index) => (
              <tr key={ product.id }>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </td>
                <td
                  data-testid={ `seller_order_details__element-order-table-name-
                  ${index}` }
                >
                  { product.name }
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-quantity-${index}`
                  }
                >
                  { product.quantity }
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  { product.price.replace(/\./, ',') }
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  { subTotalCalc(product) }
                </td>
              </tr>))}
        </tbody>
      </table>
      <h4 data-testid="seller_order_details__element-order-total-price">
        { totalPrice() }
      </h4>
    </div>
  );
}

OrderProductsTable.propTypes = {
  items: PropTypes.string.isRequired,
};
