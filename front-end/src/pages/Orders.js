import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import * as request from '../services/requests';

function Orders() {
  const [sales, setSales] = useState([]);
  const dataUser = JSON.parse(localStorage.getItem('user'));

  console.log('vendas aqui, voou!:', sales);

  useEffect(() => {
    const getSale = async () => {
      const saleData = await request.getSales(dataUser);
      setSales(saleData);
    };
    getSale();
  }, []);

  return (
    <section>
      <nav>
        <NavBar dataUser={ dataUser } />
      </nav>

      <h1>Pedidos</h1>

    </section>
  );
}

export default Orders;
