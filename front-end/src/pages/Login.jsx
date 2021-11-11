import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import paths from '../routesPaths/paths';
import { handleInput, goRoute } from '../utils/utils';

function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();
  const { email, password } = userData;
  const validateEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const minPasswordLength = 5;

  return (
    <main>
      <section>
        {/* <img></img> */}
        <h1>Drink Delivery</h1>
      </section>
      <form>
        <input
          type="text"
          placeholder="Insira seu e-mail"
          data-testid="common_login__input-email"
          name="email"
          value={ email }
          onChange={ (e) => handleInput(e, userData, setUserData) }
        />
        <br />
        <input
          type="password"
          placeholder="Insira sua senha"
          data-testid="common_login__input-password"
          name="password"
          onChange={ (e) => handleInput(e, userData, setUserData) }
        />
        <br />
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ !(validateEmail && password.length > minPasswordLength) }
        >
          Login
        </button>
        <br />
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => goRoute(paths.routeRegister, history) }
        >
          Cadastre-se
        </button>
        <br />
        <span
          data-testid="common_login__element-invalid-email"
        >
          possivel erro
        </span>
      </form>
    </main>
  );
}

export default Login;
