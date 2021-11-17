import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [signupValues, setSignupValues] = useState({ name: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);

  useEffect(() => {
    const passwordLength = 6;
    const nameLengh = 12;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const { name, email, password } = signupValues;
    if (
      emailRegex.test(email)
      && name.length >= nameLengh
      && password.length >= passwordLength
    ) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [signupValues.name, signupValues.email, signupValues.password, signupValues]);

  function handleLocalState(event) {
    const { name, value } = event.target;
    setSignupValues((prevState) => ({ ...prevState, [name]: value }));
  }

  const history = useHistory();
  async function registerUser() {
    axios.post('http://localhost:3001/user', {
      name: signupValues.name,
      email: signupValues.email,
      password: signupValues.password,
    }).then((response) => {
      localStorage.setItem('user', JSON.stringify(response));
      history.push('/customer/products');
    }).catch((e) => {
      console.log(e);
      setErrorMessage('Usuario já cadastrado');
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
            value={ signupValues.name }
            onChange={ (event) => handleLocalState(event) }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            data-testid="common_register__input-email"
            value={ signupValues.email }
            onChange={ (event) => handleLocalState(event) }
          />
        </label>

        <label htmlFor="password">
          <span>Senha</span>
          <input
            type="password"
            name="password"
            data-testid="common_register__input-password"
            value={ signupValues.password }
            onChange={ (event) => handleLocalState(event) }
          />
        </label>

        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ disableBtn }
          onClick={ registerUser }
        >
          Cadastrar
        </button>
        <span
          data-testid="common_register__element-invalid_register"
        >
          {errorMessage}
        </span>
      </div>
    </div>
  );
}

export default Signup;
