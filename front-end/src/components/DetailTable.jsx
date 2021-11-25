import React from 'react';
import PropTypes from 'prop-types';

export default function DetailTable(props) {
  const { products } = props;
  const itemNumber = 'customer_order_details__element-order-table-item-number-';
  const tableName = 'customer_order_details__element-order-table-name-';
  const tableQuantity = 'customer_order_details__element-order-table-quantity-';
  const subTotal = 'customer_order_details__element-order-table-sub-total-';
  const totalPrice = 'customer_order_details__element-order-total-price-';

  return (
    <table className="border-2">
      <thead>
        <tr>
          <th className="border-2 w-1/12">item</th>
          <th className="border-2">Descrição</th>
          <th className="border-2 w-1/12">Quantidade</th>
          <th className="border-2 w-1/12">Valor unitário</th>
          <th className="border-2 w-1/12">Sub-total</th>
        </tr>
      </thead>
      {
        products.map((item, index) => (
          <tbody key={ index }>
            <tr className="">
              <td
                data-testid={ `${itemNumber}${index}` }
                className="border-2 w-1/12"
              >
                { index + 1 }
              </td>
              <td
                data-testid={ `${tableName}${index}` }
                className="border-2"
              >
                { item.name }
              </td>
              <td
                data-testid={ `${tableQuantity}${index}` }
                className="border-2 w-1/12"
              >
                { item.quantity }
              </td>
              <td
                data-testid={ `${subTotal}${index}` }
                className="border-2 w-1/12"
              >
                { item.price.split('.').join(',') }
              </td>
              <td
                data-testid={ `${totalPrice}${index}` }
                className="border-2 w-1/12"
              >
                { item.subTotal.split('.').join(',') }
              </td>
            </tr>
          </tbody>
        ))
      }
    </table>
  );
}

DetailTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
