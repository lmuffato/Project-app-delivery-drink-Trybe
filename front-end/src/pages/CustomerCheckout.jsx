import React from 'react';
import NavBar from '../Components/NavBar';
import Table from '../Components/CustomerCheckout/Table';
import TotalValue from '../Components/CustomerCheckout/TotalValue';
import DeliveryDetails from '../Components/CustomerCheckout/DeliveryDetails';
// import '../Components/CustomerCheckout/style.css';

const CustomerCheckout = () => (
  <div>
    <NavBar />
    <Table />
    <TotalValue />
    <DeliveryDetails />
  </div>
);

export default CustomerCheckout;
