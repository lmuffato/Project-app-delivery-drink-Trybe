import React from 'react';
import PropTypes from 'prop-types';

const removeIten = (index) => {
  const sellProduts = Object.values(JSON.parse(localStorage.getItem('carrinho')));
  sellProduts.splice(index, 1);
};

function ProductSellCard({ product, index }) {
  const { name, quantity, unitPrice, subTotal } = product;
  return (
    <>
      <tr>
        <td
          data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        >
          { index + 1}
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
        >
          { name }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        >
          { quantity }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          { unitPrice.replace('.', ',') }
        </td>
        <td
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          { subTotal.replace('.', ',') }
        </td>
      </tr>
      <button
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        type="button"
        onClick={ () => removeIten(index) }
      >
        Remover Item
      </button>
    </>
  );
}

ProductSellCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.string,
    unitPrice: PropTypes.string,
    subTotal: PropTypes.string,
  }).isRequired,
  index: PropTypes.shape({}),
}.isRequired;

export default ProductSellCard;
