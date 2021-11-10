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
    const passHash = MD5(password).toString();
    const response = await api.getLogin(email, passHash);
    if (response.error) {
      setError('Login inválido');
      return;
    }
    history.push('/customer/products');
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
          >
            <Link to="/#">Login</Link>
          </button>
          <div className="separator">ou</div>
          <Link
            to="/register"
            data-testid="common_login__button-register"
            className="register-account"
          >
            Ainda não tenho conta
          </Link>
          {error && <p>{error}</p>}
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
