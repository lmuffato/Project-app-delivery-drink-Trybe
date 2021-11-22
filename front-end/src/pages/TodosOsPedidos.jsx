import React, { useEffect, useState } from 'react';

import Card from '../components/salesCard';

const axios = require('axios').default;

export default function TodosOsPedidos() {
  const user = localStorage.getItem('user');
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  const local = JSON.parse(user);

  async function getAllSales() {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3001/sales',
        responseType: 'json',
        headers: { Authorization: local.token },
      });
      setSales(response.data);
      console.log('RESPONSE -> ', response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => getAllSales(), []);

  return (
    <div>
      <h1>Todos Os Pedidos</h1>
      {
        loading ? <p>Loading....</p>
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
