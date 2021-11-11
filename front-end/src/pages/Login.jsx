import React, { useState } from 'react';

function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  function handleInput({ target }) {
    e.preventDefault();
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  }

  // function handle() {

  // }

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
          onChange={ handleInput }
        />
        <br />
        <input
          type="password"
          placeholder="Insira sua senha"
          data-testid="common_login__input-password"
          name="password"
          onChange={ handleInput }
        />
        <br />
        <button
          type="submit"
          data-testid="common_login__button-login"
        >
          Login
        </button>
        <br />
        <button
          type="submit"
          data-testid="common_login__button-register"
          // onClick={ handle }
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
