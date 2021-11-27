import React from 'react';
import { useNavigate } from 'react-router-dom';

function LinkLogout() {
  const navigate = useNavigate();
  const handleCLickLogout = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <button
      type="button"
      data-testid="customer_products__element-navbar-link-logout"
      onClick={ handleCLickLogout }
    >
      Sair
    </button>
  );
}

export default LinkLogout;
