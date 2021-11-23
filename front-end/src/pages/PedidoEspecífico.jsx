import React from 'react';
import Header from '../components/Header/Header';

export default function PedidoEspecífico() {
  const user = localStorage.getItem('user');
  const userName = JSON.parse(user);
  return (
    <div>
      <Header title="Produtos" subtitle="Meus Pedidos" name={ userName.name } />
      <h1>Pedido Específico</h1>
    </div>
  );
}
