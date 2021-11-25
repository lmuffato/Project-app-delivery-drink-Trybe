import React from 'react';
import { useParams } from 'react-router-dom';
import Headers from './components/Headers';
import CustomerDetailsList from './components/CustomerDetailsList';

export default function CustomerOrder() {
  const { id } = useParams();
  return (
    <div>
      <Headers />
      <CustomerDetailsList id={ id } />
    </div>
  );
}
