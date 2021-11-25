import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import LoginForm from '../components/LoginForm';

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('user');
    console.log(user);
    if (user) navigate('/customer/products');
  }, []);

  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      <LoginForm />
    </div>
  );
}

export default Login;
