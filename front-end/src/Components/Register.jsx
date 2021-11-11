import React, { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (target) => {
    const { id, value } = target;
    if (id === 'user-name') setName(value);
    if (id === 'user-email') setEmail(value);
    if (id === 'user-password') setPassword(value);
  };

  return (
    <main>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="user-name">
          Nome
          <input
            type="text"
            id="user-name"
            placeholder="Seu nome"
            value={ name }
            onChange={ (e) => handleChange(e.target) }
          />
        </label>
        <label htmlFor="user-email">
          Email
          <input
            type="email"
            id="user-email"
            placeholder="seu-email@site.com.br"
            value={ email }
            onChange={ (e) => handleChange(e.target) }
          />
        </label>
        <label htmlFor="user-password">
          Senha
          <input
            type="password"
            id="user-password"
            placeholder="**********"
            value={ password }
            onChange={ (e) => handleChange(e.target) }
          />
        </label>
        <button
          type="button"
          id="register-button"
        >
          CADASTRAR
        </button>
      </form>
    </main>
  );
}
