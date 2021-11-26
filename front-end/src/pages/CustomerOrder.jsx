import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Components/NavBar';

import { getAllOrdersByCustomer } from '../services/endpointsAPI';

import UserContext from '../context/userContext';
import NewOrderContext from '../context/NewOrderContext';

const dataTestid33 = 'customer_orders__element-order-id';
const dataTestid34 = 'customer_orders__element-delivery-status';
const dataTestid35 = 'customer_orders__element-order-date';

export default function CustomerOrder() {
  const { userData } = useContext(UserContext);
  const { userId } = useContext(NewOrderContext);
  const [orders, setOrders] = useState([]);

  const renderTags = (orderNumber, status, date, index) => (
    <div key={ index }>
      <Link to={ `/customer/orders/${orderNumber} ` }>
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
      </Link>
    </div>
  );

  const getAllOrdes = async () => {
    const { token } = userData;
    const response = await getAllOrdersByCustomer(token, userId);
    setOrders(response);
    console.log(response);
  };

  useEffect(() => {
    getAllOrdes();
  }, []);

  const renderCustomerOrders = () => {
    if (orders.length !== 0 || orders !== undefined) {
      return (
        orders.map((e, index) => renderTags(e.id, e.status, e.saleDate, index))
      );
    }
  };

  return (
    <div>
      <Navbar />
      <h3>Meus pedidos</h3>
      { renderCustomerOrders() }
    </div>
  );
}
