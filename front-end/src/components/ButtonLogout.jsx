import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonLogout() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <button onClick={ logout } type="button">
      Logout
    </button>
  );
}

export default ButtonLogout;
