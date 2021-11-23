import React from 'react';
import { useParams } from 'react-router-dom';
import Headers from './components/Headers';
import OrderDetails from './components/OrderDetails';

export default function SaleDetails() {
  const { id } = useParams();
  return (
    <div>
      <Headers />
      <OrderDetails id={ id } />
    </div>
  );
}
