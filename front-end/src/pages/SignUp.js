import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [newUserData, setNewUserData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const passwordLength = 6;
    const nameLengh = 12;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const { name, email, password } = newUserData;
    if (
      emailRegex.test(email)
      && name.length >= nameLengh
      && password.length >= passwordLength
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [newUserData.name, newUserData.email, newUserData.password, newUserData]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewUserData((prevState) => ({ ...prevState, [name]: value }));
  }

  async function registerNewUser() {
    axios.post('http://localhost:3001/register', {
      name: newUserData.name,
      email: newUserData.email,
      password: newUserData.password,
    }).then((response) => {
      localStorage.setItem('newUser', JSON.stringify(response));
      console.log(response);
      history.push('/customer/products');
    }).catch((e) => {
      console.log(e);
      setError('Usuario já cadastrado');
    });
  }

  return (
    <div>
      <div>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            data-testid="common_register__input-name"
            value={ newUserData.name }
            onChange={ (event) => handleChange(event) }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            data-testid="common_register__input-email"
            value={ newUserData.email }
            onChange={ (event) => handleChange(event) }
          />
        </label>

        <label htmlFor="password">
          <span>Senha</span>
          <input
            type="password"
            name="password"
            data-testid="common_register__input-password"
            value={ newUserData.password }
            onChange={ (event) => handleChange(event) }
          />
        </label>

        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ isDisabled }
          onClick={ registerNewUser }
        >
          Cadastrar
        </button>
        <span
          data-testid="common_register__element-invalid_register"
        >
          {error}
        </span>
      </div>
    </div>
  );
}

export default Signup;
