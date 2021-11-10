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
          data-testid="1"
          name="email"
          onChange={ handleInput }
        />
        <br />
        <input
          type="password"
          placeholder="Insira sua senha"
          data-testid="2"
          name="password"
          onChange={ handleInput }
        />
        <br />
        <button
          type="submit"
          data-testid="3"
        >
          Login
        </button>
        <br />
        <button
          type="submit"
          data-testid="4"
          // onClick={ handle }
        >
          Cadastre-se
        </button>
        <br />
        <span
          data-testid="5"
        >
          possivel erro
        </span>
      </form>
    </main>
  );
}

export default Login;
