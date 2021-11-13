import React from 'react';
import Header from '../Components/Header';

// Adaptar essas urls conforma a aplicação for implementada
const links = [
  { name: 'PRODUTOS', url: '/products' },
  { name: 'MEUS PEDIDOS', url: '/orders' },
];

function Checkout() {
  return (
    <>
      <Header links={ links } />
      <div>
        Finalizar Pedido
      </div>
    </>
  );
}

export default Checkout;
