import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import SaleCard from '../components/SaleCard';
import * as request from '../services/requests';

function Orders() {
  const [sales, setSales] = useState([]);
  const dataUser = JSON.parse(localStorage.getItem('user'));

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

      <div>
        {Object.values(sales).map((sale) => (
          <SaleCard key={ sale.id } sale={ sale } />
        ))}
      </div>

    </section>
  );
}

export default Orders;
