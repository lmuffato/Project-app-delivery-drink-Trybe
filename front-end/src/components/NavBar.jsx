import React from 'react';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
} from '@mui/material';
// import ContextLogin from '../context/ContextLogin';
import { logoutUser, verifyUserExistance } from '../utils/LocalStorageFunctions';

function NavBar() {
  const user = verifyUserExistance();
  const { name } = user;
  const history = useHistory();
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
          { name }
        </Typography>
        <Button
          color="inherit"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => {
            logoutUser();
            history.push('/login');
          } }
        >
          Sair
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
