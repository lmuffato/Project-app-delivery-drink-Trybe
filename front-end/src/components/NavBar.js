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
      {
        role === 'customer' && (
          <Link
            data-testid="customer_products__element-navbar-link-products"
            to="/customer/products"
          >
            PRODUTOS
          </Link>
        )
      }
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to={ `/${role}/orders` }
      >
        MEUS PEDIDOS
      </Link>
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
