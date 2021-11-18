import React from 'react';
// import Navbar from '../Components/NavBar';
import Table from '../Components/CustomerCheckout/Table';
import DeliveryDetails from '../Components/CustomerCheckout/DeliveryDetails';
import NavBar from '../Components/NavBar';
// import '../Components/CustomerCheckout/style.css';

const CustomerCheckout = () => (
  <div>
    <NavBar />
    <Table />
    <DeliveryDetails />
  </div>
);

export default CustomerCheckout;
