import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import moment from 'moment';
import './orderCard.css';

const OrderCard = ({ order, testIds }) => {
  const { id, status, saleDate, totalPrice } = order;
  const { orderId, orderStatus, orderDate, orderPrice } = testIds;
  const navigate = useNavigate();

  const navigateHandler = () => navigate(`/customer/orders/${id}`);

  return (
    <button
      type="button"
      className="order-card"
      onClick={ navigateHandler }
    >
      <div>
        <p>Pedido</p>
        <h4 data-testid={ (orderId + id) }>{ id }</h4>
      </div>
      <h3 data-testid={ orderStatus + id }>{ status }</h3>
      <div>
        <h4 data-testid={ orderDate + id }>{ moment(saleDate).format('DD/mm/yyyy') }</h4>
        <h4 data-testid={ orderPrice + id }>{ `R$ ${totalPrice}` }</h4>
      </div>
    </button>
  );
};

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
  testIds: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    orderStatus: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
    orderPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
