import React from 'react';

import Header from '../components/Header/Header';

export default function VendaEspecífica() {
  const user = localStorage.getItem('user');
  const userName = JSON.parse(user);
  return (
    <div>
      <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
      <h1>VendaEspecífica</h1>
    </div>
  );
}
