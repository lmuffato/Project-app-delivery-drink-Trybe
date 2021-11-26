import React from 'react';
import PropTypes from 'prop-types';
import '../styles/saleCard.css';

function SaleCard({ sale }) {
  const { id, status } = sale;
  const saleDate = sale.sale_date;

  return (
    <a
      href={ `/customer/orders/${id}` }
      data-testid={ `customer_products__element-order-date-${id}` }
    >
      <button
        type="button"
        value={ id }
        id="saleCard"
      >
        <span>
          { `Pedido ${id}` }
        </span>

        <p>
          { status }
        </p>

        <span>
          { saleDate }
        </span>
      </button>
    </a>
  );
}

SaleCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    sale_date: PropTypes.string,
  }).isRequired,
};

export default SaleCard;
