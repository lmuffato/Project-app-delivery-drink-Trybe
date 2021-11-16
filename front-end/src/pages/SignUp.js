import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const validForm = () => {
    const passwordMinLength = 6;
    const nameMaxLength = 12;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)
      || password.length < passwordMinLength || name.length > nameMaxLength) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <h1>Cadastre-se</h1>
      <form>
        <input
          type="text"
          name="nome"
          id="nome"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          placeholder="Seu nome"
          data-testid="common_register__input-name"
        />
        <input
          type="email"
          name="email"
          id="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          placeholder="Digite seu email"
          data-testid="common_register__input-email"
        />
        <input
          type="password"
          name="password"
          id="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="Digite uma senha"
          data-testid="common_register__input-password"
        />

        <button
          type="submit"
          disabled={ validForm() }
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>
        {/* <span
          data-testid="common_login__element-invalid-email"
          hidden={ error }
        >
          { user.error ? user.error : '' }
        </span> */}
      </form>
    </div>
  );
}

export default SignUp;
