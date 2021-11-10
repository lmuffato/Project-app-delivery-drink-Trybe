import React from 'react';

export default function Login() {
  return (
    <div>
      <form>
        <label htmlFor="login">
          Login
          <input type="email" id="email" placeholder="email@trybeer.com.br" required />
        </label>
        <label htmlFor="senha">
          Senha
          <input type="password" id="senha" placeholder="*********" />
        </label>
        <button type="button">LOGIN</button>
        <button type="button">Ainda não tenho conta</button>
      </form>
    </div>
  );
}
