import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import LoginForm from '../components/LoginForm';
import logo from '../images/delivery-man.png';

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) navigate(`/${user.role}/products`);
  }, [navigate]);

  return (
    <div className="App">
      <div className="Header">
        <img src={ logo } alt="logo" className="Logo" />
        <div className="HeaderButton">
          <span>Cidades Atendidas</span>
          <span>Quero ser Parceiro</span>
          <span>Sobre a F & F Delivery</span>

        </div>
      </div>
      <div className="Login">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
