import React from 'react';
import { useStore } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { userLogin } from '../redux/userSlice';
import NavBar from '../components/NavBar';

export default function Products() {
  const buttonsList = [
    { name: 'PRODUTOS', value: 'products' },
    { name: 'MEUS PEDIDOS', value: 'myOrders' },
  ];
  const store = useStore();
  const username = store.getState().user.name;

  return (
    <main>
      <NavBar buttonsList={ buttonsList } clientName={ username } />
    </main>
  );
}
