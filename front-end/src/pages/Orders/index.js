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

  console.log(salesOrder);

  return (
    <section className="ordersPage">
      <MenuCostumer />
      <div className="salesContainer">
        <p>Olá</p>
      </div>
    </section>
  );
}

export default Orders;
