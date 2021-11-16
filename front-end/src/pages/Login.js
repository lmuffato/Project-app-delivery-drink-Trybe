import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import paths from '../routesPaths/paths';
import { goRoute } from '../utils/utils';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  useEffect(() => {
    const validateButton = document.querySelector('button');
    const { email, password } = userData;
    const validateEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    const validatePassword = new RegExp(/[\w\D]{6}/g).test(password);

    if (validateEmail && validatePassword) {
      validateButton.disabled = false;
    } else {
      validateButton.disabled = true;
    }
  });

  const history = useHistory();
  const id = 'common_login__element-invalid-email [Elemento oculto (Mensagens de erro)]';

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
          // value={ email }
          onChange={ handleInputChange }
        />
        <br />
        <input
          type="password"
          placeholder="Insira sua senha"
          data-testid="common_login__input-password"
          name="password"
          onChange={ handleInputChange }
        />
        <br />
        <button
          type="button"
          data-testid="common_login__button-login"
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
          data-testid={ id }
        >
          possivel erro
        </span>
      </form>
    </main>
  );
};

export default Login;
