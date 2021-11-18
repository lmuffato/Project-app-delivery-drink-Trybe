import axios from 'axios';
import React, { useEffect } from 'react';
import NavBar from './NavBar'
import OrderCard from './OrderCard';

export default function Orders() {
  const { role } = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    axios.get('http://localhost:3001/sales/:id');
  }, []);
  console.log('usuario aqui', role);
  return (
    <div>
      <OrderCard />
      <NavBar />
    </div>
  );
}
