import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import MenuCostumer from '../../components/MenuCustomer';
import api from '../../services/api';

import './style.css';

function Orders() {
  const [salesOrder, setSalesOrder] = useState([]);

  useEffect(() => {
    const { token, id: userId } = JSON.parse(localStorage.getItem('user'));

    const fetchSales = async () => {
      const salesArray = await api.getSales(userId, token);

      setSalesOrder(salesArray);
    };

    fetchSales();
  }, []);

  const createOrders = () => {
    const { role } = JSON.parse(localStorage.getItem('user'));

    return salesOrder.map((order) => {
      const {
        id,
        status,
        sale_date: saleDate,
        total_price: totalPrice,
        delivery_address: deliveryAdress,
      } = order;

      const statusOrder = status === 'Em Trânsito' ? 'Em-Transito' : status;

      return (
        <Link
          key={ id }
          to={ `/${role}/orders/${id}` }
          style={ { textDecoration: 'none' } }
        >
          <div
            className="order-container"
            key={ id }
          >
            <div className="info-order">
              <p>Pedido</p>
              <p data-testid={ `${role}_orders__element-order-id-${id}` }>{id}</p>
            </div>
            <div
              className={ `status-order-${statusOrder}` }
              data-testid={ `${role}_orders__element-delivery-status-${id}` }
            >
              <p>{status}</p>
            </div>
            <div className="date-price-order">
              <p
                data-testid={ `${role}_orders__element-order-date-${id}` }
              >
                {moment(saleDate).format('DD/MM/yyyy')}
              </p>
              <p
                data-testid={ `customer_orders__element-card-price-${id}` }
              >
                { totalPrice }
              </p>
              {role === 'seller' && (
                <p data-testid={ `seller_orders__element-card-address-${id}` }>
                  { deliveryAdress }
                </p>
              )}
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <section className="ordersPage">
      <MenuCostumer />
      <div className="salesContainer">
        { salesOrder !== undefined ? createOrders() : <p>Sem pedidos!</p>}
      </div>
    </section>
  );
}

export default Orders;
