import React, { useContext } from 'react';
import CheckoutContext from '../context/checkoutContext';
import Header from '../components/header';
import CheckoutProduct from '../components/checkoutProduct';

export default function CheckoutComprador() {
  const { aux } = useContext(CheckoutContext);
  const user = localStorage.getItem('user');

  const local = JSON.parse(user);
  return (
    <div>
      <Header title="meus pedidos" subtitle="xablau" name={ local.name } />
      <h1>Finalizar pedido</h1>
      {aux.map(({ id, title, name, price, qtd }, i) => (
        <CheckoutProduct
          id={ id }
          title={ title }
          name={ name }
          price={ price }
          qtd={ qtd }
          key={ i }
        />
      ))}
    </div>
  );
}
