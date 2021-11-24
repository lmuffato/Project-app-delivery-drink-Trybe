import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../Components/NavBar';

import { getSalesByCustomerId } from '../services/endpointsAPI';

import userContext from '../context/userContext';
import { Link } from 'react-router-dom';

const dataTestid33 = 'customer_orders__element-order-id';
const dataTestid34 = 'customer_orders__element-delivery-status';
const dataTestid35 = 'customer_orders__element-order-date';

export default function CustomerOrder() {
  const { userData } = useContext(userContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadingTag = <h3>Loading ...</h3>;

  const renderTags = (orderNumber, status, date, index) => (
    <Link to={ `/customer/orders/${orderNumber}` }>
      <div key={ index }>
        <div className="cardContainer">
          <div data-testid={ `${dataTestid33}-${orderNumber}` } className="pedido">
            { orderNumber }
          </div>
          <div data-testid={ `${dataTestid34}-${orderNumber}` } className="status">
            { status }
          </div>
          <div data-testid={ `${dataTestid35}-${orderNumber}` } className="moment">
            { date }
          </div>
        </div>
      </div>
    </Link>
  );

  useEffect(() => {
    setIsLoading(true);
    getSalesByCustomerId(userData.id).then((resp) => setOrders(resp));
    setIsLoading(false);
  }, []);

  return (
    <div>
      { console.log(orders) }
      <Navbar />
      {
        isLoading
          ? loadingTag
          : orders.map((e, index) => renderTags(e.id, e.status, e.saleDate, index))
      }
    </div>
  );
}
