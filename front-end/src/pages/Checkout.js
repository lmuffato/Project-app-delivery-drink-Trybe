import React from 'react';
import NavBar from '../components/NavBar';
import OrderDetails from '../components/OrderDetails';

const dataUser = JSON.parse(localStorage.getItem('user'));

const Checkout = () => (
  <>
    <NavBar dataUser={ dataUser } />
    <OrderDetails />
    <h2> Detalhes e Endereço para Entrega </h2>
    <h1> Finalizar Pedido </h1>
  </>
);

export default Checkout;
