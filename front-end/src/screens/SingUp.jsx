import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextLogin from '../context/ContextLogin';

function SignUp() {
  const { createUser } = useContext(ContextLogin);
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const askCreateUser = async () => {
    await createUser(name, email, password);
    history.push('/');
  };

  return (
    <div className="loginScreen">
      <h1
        className="login-title"
      >
        Registrar novo usuário
      </h1>
      <form
        className="form"
        onSubmit={ (e) => {
          e.preventDefault();
          askCreateUser();
        } }
      >
        <input
          className="input-login"
          type="text"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          placeholder="Digite seu nome"
          required
        />
        <input
          className="input-login"
          type="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          placeholder="Digite seu e-mail"
          required
        />
        <input
          className="input-login"
          type="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="Digite sua senha"
          minLength="7"
          required
        />
        <button
          className="loginBtn"
          type="submit"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

export default SignUp;
