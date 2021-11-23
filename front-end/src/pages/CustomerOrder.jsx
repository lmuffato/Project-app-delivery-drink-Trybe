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
  const [isLoading, setIsLoading] = useState(false);
  const loadingTag = <h3>Loading ...</h3>;

  const renderTags = () => (
    <section>
      <div className="cardContainer">
        <div data-testid={ dataTestid33 } className="pedido">
          { dataTestid33 }
        </div>
        <div data-testid={ dataTestid34 } className="status">
          { dataTestid34 }
        </div>
        <div data-testid={ dataTestid35 } className="moment">
          { dataTestid35 }
        </div>
      </div>
    </section>
  );

  useEffect(() => {
    setIsLoading(true);
    getSalesByCustomerId(userData.id).then((resp) => Json.resp())
      .then((data) => setOrders(data));
    setIsLoading(false);
    console.log(orders);
  }, []);

  return (
    <div>
      <Navbar />
      {
        !isLoading
          ? renderTags()
          : loadingTag
      }
    </div>
  );
}
