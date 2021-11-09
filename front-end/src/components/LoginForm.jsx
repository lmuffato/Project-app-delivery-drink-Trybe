import React from 'react';
import '../styles/form.css';

function LoginForm() {
  return (
    <div className="border">
      <form action="submit">
        <input className="input" type="text" name="" id="" placeholder="email" />
        <input className="input" type="text" name="" id="" placeholder="senha" />
        <button type="submit">Login</button>
        <span className="input"> Esqueceu a senha?</span>
        <span className="input"> Cadastre-se</span>
      </form>
    </div>
  );
}

export default LoginForm;
