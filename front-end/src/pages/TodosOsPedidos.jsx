import React, { useEffect, useState } from 'react';

import Card from '../components/salesCard';
// import Header from '../components/header';

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

  /*   const mock = [{
    totalPrice: '50.99',
    deliveryAddress: 'Rua B',
    deliveryNumber: '1257',
    status: 'Em rota de entregaaaaaaaa',
    saleDate: '2021-11-11',
    userId: 3,
    sellerId: 2,
    id: 1,
  },
  {
    totalPrice: '88.99',
    deliveryAddress: 'Rua FOdase',
    deliveryNumber: '666',
    status: 'Em rota de entregaaaa',
    saleDate: '2021-11-10',
    userId: 3,
    sellerId: 2,
    id: 2,
  },
  {
    totalPrice: '9999.99',
    deliveryAddress: 'Rua Absolution',
    deliveryNumber: '1257',
    status: 'Em rota de entregaaaa',
    saleDate: '2021-11-10',
    userId: 3,
    sellerId: 2,
    id: 3,
  }]; */

  return (
    <div>
      {/* <Header title="Produtos" subtitle="Meus Pedidos" name="Pa" /> */}
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
