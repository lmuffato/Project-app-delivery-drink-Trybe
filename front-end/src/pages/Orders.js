import React from 'react';
import NavBar from '../components/NavBar';

function Orders() {
  const dataUser = JSON.parse(localStorage.getItem('user'));

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
