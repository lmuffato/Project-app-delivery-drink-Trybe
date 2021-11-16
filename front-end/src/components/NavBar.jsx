import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
} from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar
        sx={ {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        } }
      >
        <Link
          href="/customer/products"
          color="#FFF"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </Link>
        <Link
          href="/customer/orders"
          color="#FFF"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </Link>
        <Typography
          variant="h6"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          Fulano da Silva
        </Typography>
        <Button
          color="inherit"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
