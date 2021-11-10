import React, { useState } from 'react';

function Login() {
  const [password, setPassword] = useState([]);
  const [email, setemail] = useState();

  return (
    <main>
      <section>
        {/* <img></img> */}
        <h1>Drink Delivery</h1>
      </section>
      <section>
        <input
          type="text"
          placeholder="Insira seu e-mail"
          data-testid="1"
          value={ email }
          onChange={ (e) => setemail(e.target.value) }
        />
        <br />
        <input
          type="password"
          placeholder="Insira sua senha"
          data-testid="2"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <br />
        <button
          type="submit"
          data-testid="3"
          // onClick={ () => test() }
        >
          Login
        </button>
        <br />
        <button
          type="submit"
          data-testid="4"
          // onClick={ () => test() }
        >
          Cadastre-se
        </button>
        <br />
        <span
          data-testid="5"
        >
          possivel erro
        </span>
      </section>
    </main>
  );
}

export default Login;
