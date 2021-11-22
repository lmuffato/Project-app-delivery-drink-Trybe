import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';

export default function LogoutButton() {
  const { setUser, setProducts } = useContext(ContextDeliveryApp);

  const history = useHistory();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setUser({});
    setProducts([]);
    localStorage.removeItem('user');
    localStorage.removeItem('productsCard');
    history.push('/login');
  };

  return (
    <div>
      <button
        id="logout-btn"
        type="submit"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ handleLogoutClick }
      >
        SAIR
      </button>
    </div>
  );
}
