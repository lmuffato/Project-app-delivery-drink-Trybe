/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import Card from '../components/salesCard';
import Header from '../components/Header/Header';

const axios = require('axios').default;

export default function TodosOsPedidos() {
  const user = localStorage.getItem('user');
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  const userName = JSON.parse(user);

  async function getAllSales() {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3001/sales',
        responseType: 'json',
        headers: { Authorization: userName.token },
      });
      setSales(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => getAllSales(), [getAllSales]);

  return (
    <div>
      <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
      <h1>Todos Os Pedidos</h1>
      {
        loading ? <div>loading</div>
          : sales
            .map((e, i) => (
              <Card
                key={ i }
                id={ e.id }
                status={ e.status }
                saleDate={ e.saleDate }
                totalPrice={ e.totalPrice }
              />
            ))
      }
    </div>
  );
}
