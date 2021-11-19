import React, { useEffect, useState } from 'react';
import {
  nameVerification,
  emailVerification,
  passwordVerification } from '../../services/loginAndRegister/validations';

export default function AdminForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      nameVerification(name)
      && emailVerification(email)
      && passwordVerification(password)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password, role]);

  return (
    <form>
      <label htmlFor="name">
        Nome:
        <input
          name="name"
          type="text"
          placeholder="Nome e sobrenome"
          onChange={ (e) => setName(e.target.value) }
        />
      </label>

      <label htmlFor="email">
        E-mail:
        <input
          name="email"
          type="email"
          placeholder="seu-email@site.com.br"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>

      <label htmlFor="password">
        Senha:
        <input
          name="password"
          type="password"
          placeholder="********"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>

      <label htmlFor="userRole">
        Tipo:
        <select name="userRole" onChange={ (e) => setRole(e.target.value) }>
          <option value="seller">Vendedor</option>
          <option value="admin">Administrador</option>
          <option value="customer">Consumidor</option>
        </select>
      </label>

      <button
        disabled={ disabled }
        type="submit"
      >
        Cadastrar
      </button>
    </form>
  );
}
