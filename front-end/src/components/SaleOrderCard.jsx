import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import moment from 'moment';
import './orderCard.css';

const SaleOrderCard = ({ order /* , testIds  */ }) => {
  const { id, status, saleDate, totalPrice } = order;
  // const { orderId, orderStatus, orderDate, orderPrice } = testIds;
  const { role } = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const navigateHandler = () => navigate(`/${role}/orders/${id}`);

  return (
    <button
      type="button"
      className="order-card"
      onClick={ navigateHandler }
    >
      <div data-testid={ `seller_orders__element-order-id-${id}` }>
        Pedido:
        {' '}
        { id }
      </div>
      <div data-testid={ `seller_orders__element-delivery-status-${id}` }>
        { status }
      </div>
      <span data-testid={ `seller_orders__element-order-date-${id}` }>
        { moment(saleDate).format('DD/MM/YYYY') }
      </span>
      <span data-testid={ `seller_orders__element-card-price-${id}` }>
        { Number(totalPrice).toLocaleString('pt-BR', {
          currency: 'BRL',
          minimumFractionDigits: 2,
        }) }
      </span>
    </button>
  );
};

SaleOrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
  }).isRequired,
  testIds: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    orderStatus: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
    orderPrice: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    orderStatus: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
    orderPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default SaleOrderCard;
