import React, { useEffect, useState } from 'react';
import { validateLogin } from '../components/ultility';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const sucessValidate = validateLogin(emailInput, passwordInput);
    setIsValid(sucessValidate);
  }, [email, password]);

  function loginBtn() {
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
        <p data-testid="common_login__element-invalid-email">Usuário ou Senha inválido</p>
      </div>
    </main>
  );
}
