import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';

export default function LogoutButton({ history }) {
  const { setUser } = useContext(ContextDeliveryApp);

  const handleLogoutClick = () => {
    setUser({});
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <div>
      <label htmlFor="logout-btn">
        <input
          id="logout-btn"
          value="SAIR"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ handleLogoutClick }
        />
      </label>
    </div>
  );
}

LogoutButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
