import React from 'react';
import PropTypes from 'prop-types';
import '../styles/saleCard.css';

function SaleCard({ sale }) {
  const { id, status } = sale;
  const saleDate = sale.sale_date;
  const totalPrice = sale.total_price.replace('.', ',');
  const deliveryAddress = sale.delivery_address;

  const allDate = saleDate.split('T');
  const thisDate = allDate[0].split('-');
  const newDate = [thisDate[2], thisDate[1], thisDate[0]].join('/');

  return (
    <a
      href={ `/seller/orders/${id}` }
      data-testid={ `seller_orders__element-order-date-${id}` }
    >
      <button
        type="button"
        value={ id }
        className="saleCard"
      >
        <span
          data-testid={ `seller_orders__element-order-id-${id}` }
        >
          { `Pedido ${id}` }
        </span>

        <p
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          { status }
        </p>

        <span
          data-testid={ `seller_orders__element-order-date-${id}` }
        >
          { newDate }
        </span>

        <p>
          R$
          <span
            data-testid={ `seller_orders__element-card-price-${id}` }
          >
            {totalPrice}
          </span>
        </p>

        <p
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          { deliveryAddress }
        </p>
      </button>
    </a>
  );
}

SaleCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    sale_date: PropTypes.string,
    total_price: PropTypes.string,
    delivery_address: PropTypes.string,
  }).isRequired,
};

export default SaleCard;
