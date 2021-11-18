import React from 'react';
import Table from './CustomerCheckout/Table';
import NaviBar from './CustomerCheckout/NaviBar';
import DeliveryDetails from './CustomerCheckout/DeliveryDetails';

import './CustomerCheckout/style.css';

export default function Login() {
  return (
    <div>
      <NaviBar />
      <Table />
      <DeliveryDetails />
    </div>
  );
}
