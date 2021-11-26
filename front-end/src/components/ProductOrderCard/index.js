import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductOrderStatus from '../ProductOrderStatus';
import OrderCardContainer from './styles';

const testids = (id) => ({
  seller: {
    id: `seller_orders__element-order-id-${id}`,
    status: `seller_orders__element-delivery-status-${id}`,
    date: `seller_orders__element-order-date-${id}`,
    price: `seller_orders__element-card-price-${id}`,
    address: `seller_orders__element-card-address-${id}`,
  },
  customer: {
    id: `customer_orders__element-order-id-${id}`,
    status: `customer_orders__element-delivery-status-${id}`,
    date: `customer_orders__element-order-date-${id}`,
    price: `customer_orders__element-card-price-${id}`,
    address: '',
  },
});

function ProductOrderCard({
  address,
  date,
  price,
  orderId,
  status,
  user,
}) {
  const testid = testids(orderId)[user];
  const orderStatus = () => (
    <div className="order-info-basic-mcontainer">
      <ProductOrderStatus
        full
        status={ status }
        testid={ testid.status }
      />
    </div>
  );
  const info2 = () => (
    <div className="order-info-basic-mcontainer">
      <div className="order-info-badges">
        <div
          className="info-badge"
          data-testid={ testid.date }
        >
          {date}
        </div>
        <div
          className="info-badge"
          data-testid={ testid.price }
        >
          {`R$ ${price.toFixed(2).replace('.', ',')}`}
        </div>
      </div>
    </div>
  );
  const userAdress = () => (
    <div
      className="order-info-adress"
      data-testid={ testid.address }
    >
      {address}

    </div>
  );

  return (
    <Link to={ `${orderId}` }>
      <OrderCardContainer>
        <div className="order-id">
          <div>
            <p className="order-label">Pedido</p>
            <p
              className="order-product-id"
              data-testid={ testid.id }
            >
              {orderId}
            </p>
          </div>
        </div>
        <div className="order-info">
          <div className="order-info-basic">
            {orderStatus()}
            {info2()}
          </div>
          {address && userAdress()}
        </div>
      </OrderCardContainer>
    </Link>
  );
}

ProductOrderCard.propTypes = {
  orderId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['pending', 'delivered', 'preparing']).isRequired,
  address: PropTypes.string,
  user: PropTypes.oneOf(['customer', 'seller']),
};

ProductOrderCard.defaultProps = {
  address: undefined,
  user: 'customer',
};

export default ProductOrderCard;
