import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/CustomerNavBar';
import SellerOrderCard from '../components/SellerOrderCard';

function SellerOrders() {
  const [sales, setSales] = useState([]);

  async function getOrders() {
    const salesReq = await axios.get('http://localhost:3001/sales/getSales');
    const allSales = salesReq.data;
    setSales(allSales);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <NavBar />
      { sales.map((sale, index) => (
        <SellerOrderCard
          key={ index }
          id={ sale.id }
          status={ sale.status }
          totalPrice={ sale.total_price }
          saleDate={ sale.sale_date }
          deliveryAddress={ sale.delivery_address }
          deliveryNumber={ sale.delivery_number }
        />
      )) }
    </div>);
}

export default SellerOrders;
