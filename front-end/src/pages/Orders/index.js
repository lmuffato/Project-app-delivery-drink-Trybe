import React, { useEffect, useState } from 'react';
import MenuCostumer from '../../components/MenuCustomer';
import api from '../../services/api';

import './style.css';

function Orders() {
  const [salesOrder, setSalesOrder] = useState([]);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const magicNumber = 3;

    const fetchSales = async () => {
      const salesArray = await api.getSales(magicNumber, token);

      setSalesOrder(salesArray);
    };

    fetchSales();
  }, []);

  const createOrders = () => (
    salesOrder.map((order) => {
      const { id, status, sale_date: saleDate, total_price: totalPrice } = order;

      return (
        <div
          className="order-container"
          key={ id }
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          <div>
            <p>Pedido</p>
            <p>{id}</p>
          </div>
          <div
            className="status-order"
            data-testid={ `customer_orders__element-delivery-status-${id}` }
          >
            <p>{status.toUpperCase()}</p>
          </div>
          <div>
            <p
              data-testid={ `customer_orders__element-order-date-${id}` }
            >
              {saleDate.split('T')[0]}
            </p>
            <p>{totalPrice}</p>
          </div>
        </div>
      );
    })
  );

  console.log(salesOrder);

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
