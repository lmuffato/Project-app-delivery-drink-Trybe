import React from 'react';
import PropTypes from 'prop-types';

export default function CustomerDetailsCard({ items }) {
  const subTotalCalc = (product) => {
    const { quantity, price } = product;
    const subtotal = quantity * parseFloat(price, 2);
    const res = subtotal.toFixed(2).toString().replace(/\./, ',');
    return res;
  };

  const totalPrice = () => {
    const price = items.reduce((acc, product) => acc
    + Number(product.price) * product.quantity, 0);
    return price.toFixed(2).toString().replace(/\./, ',');
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((product, index) => (
              <tr Key={ product.id }>
                <td
                  data-testid={ `customer_order_details__element-
          order-table-item-number-${index}` }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={ `customer_order_details__element-
          order-table-name-${index}` }
                >
                  {product.name}
                </td>
                <td
                  data-testid={ `customer_order_details__element-
          order-table-quantity-${index}` }
                >
                  {product.quantity}
                </td>
                <td
                  data-testid={ `customer_order_details__element-
          order-table-sub-total-${index}` }
                >
                  {product.price.replace(/\./, ',')}
                </td>
                <td
                  data-testid={ `customer_order_details__element-
          order$-total-price-${index}` }
                >
                  {subTotalCalc(product)}
                </td>
              </tr>))
          }
        </tbody>
      </table>
      <p>{`Total: R$${totalPrice()}`}</p>
    </div>
  );
}

CustomerDetailsCard.propTypes = {
  items: PropTypes.string.isRequired,
};
