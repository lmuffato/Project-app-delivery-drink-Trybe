import React from 'react';
// import axios from 'axios';

export default function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [loginButton, setLoginButton] = useState(false);
  // function loginBtn() {}

  return (
    <main>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          name="Login-email"
          className="email-input"
          placeholder="exemplo@email.com"
          onChange={ console.log('validation') }
          data-testid="common_login__input-email"
        />
        <input
          type="password"
          name="Login-password"
          className="password-input"
          placeholder="Digite a senha"
          onChange={ console.log('validation') }
          data-testid="common_login__input-password"
        />
        <button
          type="submit"
          className="button-input"
          onClick={ console.log('validation') }
          // disabled={ !loginButton }
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
        <p>Aqui vai um erro</p>
      </div>
    </main>
  );
}
