import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CustomerNavBar() {
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
          data-testit="customer_products__element-navbar-user-full-name"
        >
          CICRANO SILVA
        </Nav.Link>
        <Nav.Link
          href="exit"
          data-testid="customer_products__element-navbar-link-logout"
        >
          SAIR
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomerNavBar;
