import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

const md5 = require('md5');
const axios = require('axios').default;

export default function Cadastro() {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = ({ target }, handle) => {
    const { value } = target;
    handle(value);
  };
  const resetInputs = () => {
    setName('');
    setPassword('');
    setUser('');
  };
  const handleRegister = async () => {
    try {
      await axios({
        method: 'post',
        url: 'http://localhost:3001/users',
        data: {
          name,
          password: md5(password),
          email: user,
          role: 'customer',
        },
        responseType: 'json',
      });
      setRedirect(true);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      console.error(error.response.data.message);
      resetInputs();
    }
    setName('');
    setUser('');
    setPassword('');
  };
  const verifyName = (n) => {
    const minChar = 12;
    if (n.length < minChar) {
      return false;
    }
    return true;
  };
  const verifyUser = (email) => {
    const emailRegex = RegExp(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    );
    if (emailRegex.test(email)) return true;
    return false;
  };
  const verifyPassword = (pass) => {
    const minPass = 6;
    if (pass.length < minPass) return false;
    return true;
  };
  useEffect(() => {
    if (verifyName(name) && verifyPassword(password) && verifyUser(user)) {
      setDisable(false);
    }
  }, [name, user, password]);

  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <input
          type="text"
          data-testid="common_register__input-name"
          placeholder="Name"
          name="email"
          value={ name }
          onChange={ (e) => handleChange(e, setName) }
        />
        <input
          type="text"
          data-testid="common_register__input-email"
          placeholder="Email"
          name="email"
          value={ user }
          onChange={ (e) => handleChange(e, setUser) }
        />
        <input
          type="password"
          data-testid="common_register__input-password"
          placeholder="Senha"
          value={ password }
          onChange={ (e) => handleChange(e, setPassword) }
          name="senha"
        />
        <button
          type="button"
          disabled={ disable }
          data-testid="common_register__button-register"
          onClick={ () => handleRegister() }
        >
          CADASTRAR
        </button>
        {redirect ? <Redirect to="/customer/products" /> : null}
        <p data-testid="common_register__element-invalid_register">{errorMessage}</p>
      </form>
      <h1>{errorMessage}</h1>
    </div>
  );
}
