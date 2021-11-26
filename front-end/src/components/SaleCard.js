import React from 'react';
import PropTypes from 'prop-types';

function SaleCard({ sale }) {
  const { id, status } = sale;
  const saleDate = sale.sale_date;

  return (
    <div>
      <span
        data-testid={ `customer_products__element-order-date-${id}` }
      >
        { `Pedido ${id}` }
      </span>

      <p data-testid={ `customer_products__element-card-title-${id}` }>
        { status }
      </p>

      <p data-testid={ `customer_products__element-card-title-${id}` }>
        { saleDate }
      </p>
    </div>
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
