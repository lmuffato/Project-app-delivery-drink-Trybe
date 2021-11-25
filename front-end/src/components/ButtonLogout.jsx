import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonLogout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <button
      data-testid="customer_products__element-navbar-link-logout"
      onClick={ logout }
      type="button"
    >
      Logout
    </button>
  );
}

export default ButtonLogout;
