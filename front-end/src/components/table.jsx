import React, { useContext } from 'react';
import { string } from 'prop-types';
import Context from '../context/Context';

function Table({ props }) {
  const { productId, productName, productPrice, productQuant } = props;
  const { deleteProduct } = useContext(Context);

  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${productId}` }
      >
        {productId}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${productId}` }
      >
        {productName}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${productId}` }
      >
        {productQuant}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${productId}` }
      >
        {Number(productPrice).toFixed(2).toString().replace('.', ',')}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${productId}` }
      >
        {(Number(productPrice) * productQuant).toFixed(2)
          .toString()
          .replace('.', ',')}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${productId}` }
      >
        <button
          type="button"
          onClick={ () => deleteProduct(productId) }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

Table.propTypes = {
  productId: string,
  productName: string,
  productPrice: string,
  productQuant: string,
}.isRequired;

export default Table;
