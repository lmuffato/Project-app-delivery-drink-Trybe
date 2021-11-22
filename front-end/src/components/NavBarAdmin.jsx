import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
} from '@mui/material';
import ContextLogin from '../context/ContextLogin';
import { logoutUser } from '../utils/LocalStorageFunctions';

function NavBarAdmin() {
  const { userData: { name } } = useContext(ContextLogin);
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

export default NavBarAdmin;
