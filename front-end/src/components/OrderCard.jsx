import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import moment from 'moment';
import './orderCard.css';

const OrderCard = ({ order, testIds, index }) => {
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
        <h4 data-testid={ (orderId + index) }>{ id }</h4>
      </div>
      <h3 data-testid={ orderStatus + index }>{ status }</h3>
      <div>
        <h4
          data-testid={ orderDate + index }
        >
          { moment(saleDate).format('DD/mm/yyyy') }
        </h4>
        <h4 data-testid={ orderPrice + index }>{ `R$ ${totalPrice}` }</h4>
      </div>
    </button>
  );
};

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
  index: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    orderStatus: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
    orderPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
