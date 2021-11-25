import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import LoginForm from '../components/LoginForm';

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) navigate(`/${user.role}/products`);
  }, [navigate]);

  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      <LoginForm />
    </div>
  );
}

export default Login;
