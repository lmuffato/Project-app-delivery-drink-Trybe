import React, { useState, useContext } from 'react';
import ContextLogin from '../context/ContextLogin';
import { useHistory } from 'react-router-dom';
function SignUp() {
  const { createUser } = useContext(ContextLogin);
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const askCreateUser = async () => {
    await createUser(name, email, password);
    history.push('/');
  };

  return (
    <div className="loginScreen">
      <h1
        className="login-title"
      >
        Cadastro
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
          data-testid="common_register__input-name"
          type="text"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          placeholder="Digite seu nome"
          required
        />
        <input
          className="input-login"
          data-testid="common_register__input-email"
          type="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          placeholder="Digite seu e-mail"
          required
        />
        <input
          className="input-login"
          data-testid="common_register__input-password"
          type="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="Digite sua senha"
          minLength="7"
          required
        />
        <button
          className="loginBtn"
          data-testid="common_register__button-register"
          type="submit"
        >
          Registrar
        </button>
      </form>
      <span
        className="error_message-span"
        data-testid="common_register__element-invalid_register"
      >
        { errorMessage }
      </span>
    </div>
  );
}

export default SignUp;
