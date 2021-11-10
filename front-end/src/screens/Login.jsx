import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextLogin from '../context/ContextLogin';

function Login() {
  console.log('oi');
  const { makeLogin, allowed, getAllTasks, user } = useContext(ContextLogin);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const askLogin = async () => {
    await makeLogin(email, password);
    if (allowed) {
      await getAllTasks(user.id);
      history.push('/todo');
    }
  };

  return (
    <div className="loginScreen">
      <h1
        className="login-title"
      >
        Login
      </h1>
      <form
        className="form"
        onSubmit={ (e) => {
          e.preventDefault();
          askLogin();
        } }
      >
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
          Entrar
        </button>
      </form>
      { !allowed && <span>Informações do email ou senha estão erradas</span> }
      <a href="/register">Cadastre um novo usuário</a>
    </div>
  );
}

export default Login;
