import React, { useState } from 'react';

function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  function handleInput({ target }, setData) {
    const { name, value } = target;
    setData({ ...userData, [name]: value });
  }

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
          onChange={ (e) => handleInput(e, setUserData) }
        />
        <br />
        <input
          type="password"
          placeholder="Insira sua senha"
          data-testid="common_login__input-password"
          name="password"
          onChange={ (e) => handleInput(e, setUserData) }
        />
        <br />
        <button
          type="submit"
          data-testid="common_login__button-login"
          id="buttonSubmit"
          disabled={ !(validateEmail && password.length > minPasswordLength) }
        >
          Login
        </button>
        <br />
        <button
          type="submit"
          data-testid="common_login__button-register"
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
