import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function CustomerNavBar() {
  const [linkMsg, setLinkMsg] = useState('');
  const { name, role } = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

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

  function redirectToOrders(e) {
    e.preventDefault();
    if (role === 'custumer') {
      history.push('/customer/orders');
    }
  }

  function redirectToProds(e) {
    e.preventDefault();
    history.push('/customer/products');
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="me-auto">
        <Nav.Link
          hidden={ role !== 'customer' }
          onClick={ (e) => redirectToProds(e) }
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </Nav.Link>
        <Nav.Link
          onClick={ (e) => redirectToOrders(e) }
          data-testid="customer_products__element-navbar-link-orders"
        >
          { linkMsg }
        </Nav.Link>
        <Nav.Link
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
