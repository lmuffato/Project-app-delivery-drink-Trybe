import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';

export default function LogoutButton({ history }) {
  const { setUser, setProducts } = useContext(ContextDeliveryApp);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setUser({});
    setProducts([]);
    localStorage.removeItem('user');
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

LogoutButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
