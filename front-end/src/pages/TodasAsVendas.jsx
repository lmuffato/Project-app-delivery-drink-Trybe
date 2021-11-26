import React, { useEffect, useState } from 'react';

import Card from '../components/salesCard';
import Header from '../components/Header/Header';

const axios = require('axios').default;

export default function TodosAsVendas() {
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

  useEffect(() => getAllSales(), []);
  console.log(sales);
  return (
    <div>
      <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
      <h1>Todos Os Pedidos</h1>
      {
        loading ? <div>loading</div>
          : sales
            .map((e, i) => (
              <div key={ i }>
                <Card
                  id={ e.id }
                  status={ e.status }
                  sale_date={ e.sale_date }
                  total_price={ e.total_price }
                  sales={ sales }
                />
                <span
                  data-testid={ `seller_orders__element-card-address-${e.id}` }
                >
                  {`${e.delivery_address},${e.delivery_number}`}

                </span>
              </div>
            ))
      }
    </div>
  );
}
