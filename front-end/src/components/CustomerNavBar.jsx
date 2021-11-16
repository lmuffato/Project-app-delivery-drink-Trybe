import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CustomerNavBar() {
  const userName = JSON.parse(localStorage.getItem('user')).name;

  function handleClic() {
    localStorage.removeItem('user');
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="me-auto">
        <Nav.Link
          href="products"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </Nav.Link>
        <Nav.Link
          href="orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </Nav.Link>
        <Nav.Link
          href="profile"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { userName }
        </Nav.Link>
        <Nav.Link
          onClick={ handleClic }
          href="http://localhost:3000/login"
          data-testid="customer_products__element-navbar-link-logout"
        >
          SAIR
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomerNavBar;
