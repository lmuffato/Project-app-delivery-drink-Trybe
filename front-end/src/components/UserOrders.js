import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router';
// import ProductCard from './ProductCard';

export default function UserOrders(props) {
  const { token } = props;
  const url = 'http://localhost:3001';
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  const getOrders = useCallback(
    async () => {
      await axios({
        method: 'get',
        url: `${url}/sales`,
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          setOrders(res.data);
        })
        .catch((err) => console.log(err));
    }, [setOrders, token],
  );

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const showdate = (data) => {
    const dateArr = data.split('-');
    const [year, month, dayArr] = dateArr;
    const arr2 = dayArr.split('T');
    const [day] = arr2;
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="w-full flex flex-wrap p-20">
      {
        orders.map((order) => (
          <button
            key={ order.id }
            type="button"
            onClick={ () => history.push(`/customer/orders/${order.id}`) }
          >
            <p
              data-testid={ `customer_orders__element-order-id-${order.id}` }
            >
              {order.id}
            </p>
            <p
              data-testid={ `customer_orders__element-delivery-status-${order.id}` }
            >
              {order.status}
            </p>
            <p
              data-testid={ `customer_orders__element-order-date-${order.id}` }
            >
              {showdate(order.sale_date)}
            </p>
            <p
              data-testid={ `customer_orders__element-card-price-${order.id}` }
            >
              {order.total_price.split('.').join(',')}
            </p>
          </button>
        ))
      }
    </div>
  );
}

UserOrders.propTypes = {
  token: PropTypes.string.isRequired,
};
