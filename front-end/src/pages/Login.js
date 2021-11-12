import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginButton, setLoginButton] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const validateFields = () => {
      const minDigits = 6;
      const regex = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
      const resultButton = password.length > minDigits && email.match(regex);
      setLoginButton(resultButton);
    };
    validateFields();
  }, [email, password]);

  function loginBtn() {
    history.push('/register');
    const isEmail = { email };
    const formatedEmail = JSON.stringify(isEmail);
    localStorage.setItem('user', formatedEmail);
  }

  return (
    <main>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          name="Login-email"
          className="email-input"
          placeholder="exemplo@email.com"
          onChange={ (e) => setEmail(e.target.value) }
          data-testid="common_login__input-email"
        />
        <input
          type="password"
          name="Login-password"
          className="password-input"
          placeholder="Digite a senha"
          onChange={ (e) => setPassword(e.target.value) }
          data-testid="common_login__input-password"
        />
        <button
          type="submit"
          className="button-input"
          onClick={ loginBtn }
          disabled={ !loginButton }
          data-testid="common_login__button-login"
        >
          Login
        </button>
      </form>
      <button
        type="button"
        className="register-input"
        data-testid="common_login__button-register"
      >
        Registre-se
      </button>
      <div>
        <p common_login__element-invalid-email> Algo deu ruim </p>
      </div>
    </main>
  );
}
