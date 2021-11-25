import { array } from 'prop-types';
import React from 'react';
// import { Link } from 'react-router-dom';
import './orderCard.css';

const OrderCard = ({ order }) => {
  const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = order;
  // console.log(props.userId);

  return (
    <div className="order-container">
      {/* <Link
        to={ `/${}/orders/${id}` }
        data-testid={}
        key={ id }
      > */}
      <div className="order-card">
        <span>
          {id}
        </span>
        <span>
          <h4>
            {status}
          </h4>
        </span>
        <span>
          {saleDate}
        </span>
        <span>
          {totalPrice}
        </span>
        <span>{deliveryAddress}</span>
        <span>{deliveryNumber}</span>
      </div>
      {/* </Link> */}
    </div>
  );
};

OrderCard.propTypes = {
  orderList: array,
}.isRequired;

export default OrderCard;
