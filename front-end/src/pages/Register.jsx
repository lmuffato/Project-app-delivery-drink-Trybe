import React, { useState, useEffect } from 'react';

function Register() {
  const PASSWORD_LENGTH = 6;
  const NAME_LENGTH = 12;

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'name') setUserName(value);
  };

  useEffect(() => {
    const validateEmail = /^[\S]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/g.test(email);
    if (validateEmail
       && password.length >= PASSWORD_LENGTH
       && userName.length >= NAME_LENGTH) {
      setDisabled(false);
    } else { setDisabled(true); }
  }, [email, password, userName]);

  return (
    <div>
      Nome
      <input
        onChange={ handleChange }
        name="name"
        value={ userName }
        type="text"
        data-testid="common_register__input-name"
        placeholder="Digite seu nome"
      />
      Email
      <input
        onChange={ handleChange }
        name="email"
        value={ email }
        type="email"
        data-testid="common_register__input-email"
        placeholder="Digite seu e-mail"
      />
      <input
        onChange={ handleChange }
        name="password"
        value={ password }
        type="password"
        data-testid="common_register__input-password"
        placeholder="Digite sua senha"
      />
      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ disabled }
      >
        CADASTRAR
      </button>
      <p data-testid="common_register__element-invalid_register">
        Erro
      </p>
    </div>
  );
}

export default Register;
