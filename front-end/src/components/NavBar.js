import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../redux/slices/userSlice';
import { removeUserDataFromLocalStorage } from './ultility';
import './NavBar.css';

const handleLogoutClick = (dispatch) => {
  dispatch(saveUser({ name: '', email: '', role: '', token: '' }));
  removeUserDataFromLocalStorage();
};

function NavBar() {
  const { name, role } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <nav style={ { backgroundColor: 'yellow' } }>
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        PRODUTOS
      </Link>
      { role === 'customer' && (
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
        >
          MEUS PEDIDOS
        </Link>
      )}
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { name }
      </span>
      <Link
        to="/login"
        onClick={ () => handleLogoutClick(dispatch) }
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </Link>
    </nav>
  );
}

export default NavBar;
