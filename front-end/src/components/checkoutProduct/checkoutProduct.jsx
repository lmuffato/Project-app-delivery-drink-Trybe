import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CheckoutContext from '../../context/checkoutContext';
import CardProduct from './checkoutProductElements';

export default function CheckoutProduct({ index, id, name, qtd, price }) {
  const newPrice = (price / qtd).toFixed(2).toString().replace(/\./g, ',');
  const subtotal = (price).toString().replace(/\./g, ',');
  const { aux, setAux } = useContext(CheckoutContext);

  function deleteItem(idx) {
    const sales = aux.filter((item) => item.product_id !== idx);
    setAux(sales);
  }

  return (
    <div key={ id } border="1px" border-style="groove">
      <CardProduct>
        <p
          className="numberItem"
          data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        >
          {index + 1}
        </p>
        <p
          className="nameItem"
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
        >
          {name}
        </p>
        <p
          className="quantityItem"
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        >
          {qtd}
        </p>
        <p
          className="priceItem"
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          {newPrice}
        </p>
        <p
          className="subTotalItem"
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          {`R$:${subtotal}`}
        </p>
        <button
          className="btnRemoveItem"
          type="button"
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          onClick={ () => deleteItem(id) }
        >
          REMOVER
        </button>
      </CardProduct>
    </div>
  );
}

CheckoutProduct.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  qtd: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
