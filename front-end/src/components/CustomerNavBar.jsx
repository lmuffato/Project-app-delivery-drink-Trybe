import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CustomerNavBar() {
  const [linkMsg, setLinkMsg] = useState('');
  const { name, role } = JSON.parse(localStorage.getItem('user'));

  function handleClic() {
    localStorage.removeItem('user');
  }

  useEffect(() => {
    if (role === 'customer') {
      setLinkMsg('MEUS PEDIDOS');
    } else if (role === 'administrator') {
      setLinkMsg('GERENCIAR USUÁRIOS');
    } else if (role === 'seller') {
      setLinkMsg('PEDIDOS');
    }
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="me-auto">
        <Nav.Link
          hidden={ role !== 'customer' }
          href="products"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </Nav.Link>
        <Nav.Link
          href="orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          { linkMsg }
        </Nav.Link>
        <Nav.Link
          href="profile"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
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
