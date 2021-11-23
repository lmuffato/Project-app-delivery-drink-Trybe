import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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

function NavBar({ sellerView = false }) {
  const { userData } = useContext(ContextLogin);
  const userInLocalStorage = localStorage.getItem('user');
  const { name } = userData || JSON.parse(userInLocalStorage);
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
        { !sellerView && (
          <Link
            href="/customer/products"
            color="#FFF"
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </Link>) }
        <Link
          href="/customer/orders"
          color="#FFF"
          data-testid="customer_products__element-navbar-link-orders"
        >
          { sellerView ? 'Pedidos' : 'Meus Pedidos' }
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

NavBar.propTypes = {
  sellerView: PropTypes.bool,
};

NavBar.defaultProps = {
  sellerView: false,
};

export default NavBar;
