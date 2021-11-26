import React, { useEffect, useState } from 'react';
import CardSale from './cardSale';
import api from '../services/api';

export default function SalesList() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    const getSales = async () => {
      const token = localStorage.getItem('token');
      const path = window.location.href;
      const url = path.includes('seller')
        ? '/seller/sales' : '/user/sales';
      console.log(url);
      const response = await api(url, { headers: { authentication: token } });
      console.log(response);
      setSales([]);
    };
    getSales();
  }, []);
  const renderSales = () => sales.map((sale) => (
    <CardSale key={ sale.id } sale={ sale } />));

  return (
    <div>
      { sales.length > 0 ? renderSales() : null }
    </div>
  );
}
