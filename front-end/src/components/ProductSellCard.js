import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context/cart';

function ProductSellCard({ product, index }) {
  const { setCart } = useContext(CartContext);

  const removeItem = () => {
    const toRemove = Object.assign(product);
    toRemove.quantity = 0;
    setCart({ id: toRemove.productId, item: toRemove });
  };

  const { name, quantity, unitPrice, subTotal } = product;

  return (
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
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          onClick={ removeItem }
        >
          Remover Item
        </button>
      </td>
    </tr>
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
