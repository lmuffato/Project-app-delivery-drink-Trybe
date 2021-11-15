import React, { useState } from 'react';

const axios = require('axios').default;

export default function Cadastro() {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  // const [disableButton, setDisableButton] = useState(true);

  const handleChange = ({ target }, handle) => {
    const { value } = target;
    handle(value);
  };

  const handleRegister = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/users/',
        data: {
          name,
          password,
          email: user,
          role: 'customer',
        },
        responseType: 'json',
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <input
          type="text"
          data-testid="common_register__element-name"
          placeholder="Name"
          name="email"
          value={ name }
          onChange={ (e) => handleChange(e, setName) }
        />
        <input
          type="text"
          data-testid="common_register__element-email"
          placeholder="Email"
          name="email"
          value={ user }
          onChange={ (e) => handleChange(e, setUser) }
        />
        <input
          type="password"
          data-testid="common_register__element-password"
          placeholder="Senha"
          value={ password }
          onChange={ (e) => handleChange(e, setPassword) }
          name="senha"
        />
        <button
          type="button"
          data-testid="common_register__element-register"
          onClick={ () => handleRegister() }
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
