import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

const axios = require('axios').default;

export default function Cadastro() {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const [redirect, setRedirect] = useState(false);

  // const [disableButton, setDisableButton] = useState(true);

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
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/users',
        data: {
          name,
          password,
          email: user,
          role: 'customer',
        },
        responseType: 'json',
      });
      console.log(response.data);
      setRedirect(true);
    } catch (error) {
      resetInputs();
      console.error(error);
    }
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
    console.log(verifyName(name));
    console.log(verifyPassword(password));
    console.log(verifyUser(user));
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
      </form>
    </div>
  );
}
