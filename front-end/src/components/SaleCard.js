import React from 'react';
import PropTypes from 'prop-types';
import '../styles/saleCard.css';

function SaleCard({ sale }) {
  const { id, status } = sale;
  const saleDate = sale.sale_date;

  const formatDate = () => {
    if (saleDate) {
      const allDate = saleDate.split('T');
      const thisDate = allDate[0].split('-');
      const newDate = [thisDate[1], thisDate[2], thisDate[0]].join('/');
      return newDate;
    }
  };

  return (
    <a
      href={ `/customer/orders/${id}` }
    >
      <button
        type="button"
        value={ id }
        className="saleCard"
      >
        <span
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          { `Pedido ${id}` }
        </span>

        <p
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          { status }
        </p>

        <span
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          { formatDate() }
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
