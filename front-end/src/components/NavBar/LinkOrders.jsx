import React from 'react';
import { Link } from 'react-router-dom';

function LinkOrders() {
  const path = window.location.href;
  const url = path.includes('seller') ? '/seller/orders' : '/customer/orders';
  return (
    <Link to={ url }>
      Meus pedidos
    </Link>
  );
}

export default LinkOrders;
