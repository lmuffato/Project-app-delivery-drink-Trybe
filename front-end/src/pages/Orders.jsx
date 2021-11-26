import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import NavBar from '../components/CustomerNavBar';
import OrderCard from '../components/OrderCard';

function Orders() {
  const [sales, setSales] = useState([]);
  const { id } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    async function getSales() {
      const salesRequest = await axios.get(`http://localhost:3001/user/sale/${id}`);
      const allSales = salesRequest.data;
      setSales(allSales);
    }
    getSales();
  }, [id]);

  return (
    <div>
      <NavBar />
      { sales.map((sale, index) => (
        <OrderCard
          key={ index }
          id={ sale.id }
          status={ sale.status }
          totalPrice={ sale.total_price }
          saleDate={ moment(sale.sale_date).format(('DD/MM/YYYY')) }
        />
      )) }
    </div>
  );
}

export default Orders;
