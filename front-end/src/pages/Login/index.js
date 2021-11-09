import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import './style.css';

function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const checkEmail = () => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email);
  const minLength = 6;
  const checkPass = () => password.length >= minLength;

  return (
    <section className="login-page">
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
          placeholder="Senha (6 digitos)"
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ !(checkEmail() && checkPass()) }
        >
          <Link href="/#">Login</Link>
        </button>
        <Link href="/#" data-testid="common_login__button-register">
          Ainda não tenho conta
        </Link>
      </div>
    </section>
  );
}

export default LoginPage;
