import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../redux/slices/userSlice';
import { removeUserDataFromLocalStorage } from './ultility';

const handleLogoutClick = (ev, dispatch, history) => {
  ev.preventDefault();

  dispatch(saveUser({ name: '', email: '', role: '', token: '' }));
  removeUserDataFromLocalStorage();
  history.push('/login');
};

function NavBar() {
  const { name } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <nav style={ { backgroundColor: 'yellow' } }>
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        PRODUTOS
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        MEUS PEDIDOS
      </Link>
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { name }
      </span>
      <button
        type="button"
        onClick={ (ev) => handleLogoutClick(ev, dispatch, history) }
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </nav>
  );
}

export default NavBar;
