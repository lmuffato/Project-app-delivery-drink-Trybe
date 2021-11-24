import React, { useContext } from 'react';
import { number, shape, string } from 'prop-types';
import Context from '../context/Context';

function Table({ product, index }) {
  const { productId, productName, productPrice, productQuant } = product;
  const { deleteProduct } = useContext(Context);
  console.log(index);

  return (
    <tbody>
      <tr>
        <td
          data-testid={
            `customer_checkout__element-order-table-item-number-${index}`
          }
        >
          {index + 1}
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
        >
          {productName}
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        >
          {productQuant}
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          {Number(productPrice).toFixed(2).toString().replace('.', ',')}

        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          {(Number(productPrice) * productQuant).toFixed(2)
            .toString()
            .replace('.', ',')}
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        >
          <button
            type="button"
            onClick={ () => deleteProduct(productId) }
          >
            Remover
          </button>
        </td>
      </tr>
    </tbody>
  );
}

Table.propTypes = {
  product: shape({
    productId: string,
    productName: string,
    productPrice: string,
    productQuant: string,
  }),
  index: number,
}.isRequired;

export default Table;
