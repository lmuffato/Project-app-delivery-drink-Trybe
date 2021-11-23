import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../Components/NavBar';

import { getSalesByCustomerId } from '../services/endpointsAPI';

import userContext from '../context/userContext';

const dataTestid33 = 'customer_orders__element-order-id-';
const dataTestid34 = 'customer_orders__element-delivery-status-';
const dataTestid35 = 'customer_orders__element-order-date-';

export default function CustomerOrder() {
  const { userData } = useContext(userContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadingTag = <h3>Loading ...</h3>;

  const renderTags = (orderNumber, status, date, index) => (
    <div key={ index }>
      <div className="cardContainer">
        <div data-testid={ dataTestid33 } className="pedido">
          { orderNumber }
        </div>
        <div data-testid={ dataTestid34 } className="status">
          { status }
        </div>
        <div data-testid={ dataTestid35 } className="moment">
          { date }
        </div>
      </div>
    </div>
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
        !isLoading
          ? orders.map((e, index) => renderTags(e.id, e.status, e.saleDate, index))

          : loadingTag
      }
    </div>
  );
}
// iii teste evaluator
