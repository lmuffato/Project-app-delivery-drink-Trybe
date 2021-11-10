import React from 'react';

export default function Login() {
  return (
    <div>
        <form>
         <label for="login">Login</label> 
        <input type="email" id="email" placeholder="email@trybeer.com.br" required>
        </input>
         <label for="senha">Senha</label> 
        <input type="password" id="senha" placeholder="*********">
        </input>
        <button type="button">LOGIN</button>
        <button type="button">Ainda não tenho conta</button>
      </form>
    </div>
  );
}
