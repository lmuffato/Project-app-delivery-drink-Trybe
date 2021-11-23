import React, { useEffect, useState } from 'react';
import CardSale from './cardSale';

export default function SalesList() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    const getSales = async () => {
      const token = localStorage.getItem('token');
      const path = window.location.href;
      const url = path.includes('seller')
        ? 'http://localhost:3100/sales/seller' : 'http://localhost:3100/sales/user';
      const response = await fetch(url, { headers: { authentication: token } });
      const json = await response.json();
      setSales([...json]);
    };
    getSales();
  });
  const renderSales = () => sales.map((sale) => (
    <CardSale key={ sale.id } sale={ sale } />));

  return (
    <div>
      { sales.length > 0 ? renderSales() : null }
    </div>
  );
}
