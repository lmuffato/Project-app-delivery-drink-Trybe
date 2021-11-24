import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import MD5 from 'crypto-js/md5';
import { IoMdBeer } from 'react-icons/io';
import Input from '../../components/Input';
import api from '../../services/api';
import './style.css';
import LeftSide from '../../components/LeftSide';

function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const history = useHistory();
  const checkEmail = () => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email);
  const minLength = 6;
  const checkPass = () => password.length >= minLength;
  const handleLogin = async () => {
    try {
      const passHash = MD5(password).toString();
      const response = await api.getLogin(email, passHash);
      localStorage.setItem('user', JSON.stringify(response));
      console.log('Login', response);

      if (response.role === 'customer') history.push('/customer/products');
      if (response.role === 'seller') history.push('/seller/orders');
    } catch (e) {
      setError('Login inválido');
    }
  };

  return (
    <section className="login-page">
      <LeftSide />
      <div className="right-side">
        <h1>
          dev
          <span className="beer">Beer</span>
          <IoMdBeer />
        </h1>
        <div className="login-container">
          <Input
            type="text"
            value={ email }
            dataid="common_login__input-email"
            placeholder="fulano@yahoo.com"
            setValue={ setEmail }
          />
          <Input
            type="password"
            value={ password }
            setValue={ setPassword }
            dataid="common_login__input-password"
            placeholder="Senha"
          />
          <button
            type="button"
            data-testid="common_login__button-login"
            disabled={ !(checkEmail() && checkPass()) }
            onClick={ handleLogin }
            className="loginButton"
          >
            Login
          </button>
          <div className="separator">ou</div>
          <button
            type="button"
            data-testid="common_login__button-register"
            className="createAccount"
          >
            <Link to="/register">Ainda não tenho conta</Link>
          </button>
          {error && (
            <p
              className="error"
              data-testid="common_login__element-invalid-email"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
