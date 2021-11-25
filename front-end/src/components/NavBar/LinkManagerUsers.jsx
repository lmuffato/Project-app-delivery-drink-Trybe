import React from 'react';
import { Link } from 'react-router-dom';

function LinkManagerUsers() {
  return (
    <Link
      to="/admin/manage"
      data-testid="customer_products__element-navbar-link-orders"
    >
      GERENCIAR USUÁRIOS
    </Link>
  );
}

export default LinkManagerUsers;
