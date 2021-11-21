import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [stateButton, setStateButton] = useState(false);
  const history = useHistory();
  const validations = () => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const minPasswordLength = 6;
    const minNameLength = 15;
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
    const nameValue = document.getElementById('name').value;

    if (!emailRegex.test(emailValue) || passwordValue.length < minPasswordLength
    || nameValue.length < minNameLength) {
      setStateButton(false);
    } else {
      setStateButton(true);
    }
  };

  const makeRegister = async () => {
    // console.log('Registrando de fato');
    await axios
      .post('http://localhost:3001/register', { name, email, password })
      .then((res) => {
        console.log(res);
        setShowError(false);
        history.push('/customer/products');
      })
      .catch((err) => {
        console.log(err);
        setShowError(true);
      });
  };

  const handleRegister = async () => {
    await makeRegister();
  };

  const handleInput = ({ target }) => {
    validations();
    const { value, id } = target;
    console.log(`${id} : ${value}`);
    if (id === 'name') setName(value);
    if (id === 'email') setEmail(value);
    if (id === 'password') setPassword(value);
  };

  return (
    <main
      className="min-h-full flex items-center justify-center
    py-12 px-4 sm:px-6 lg:px-8 w-full space-y-7 flex-col"
    >
      <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-600">
        Cadastro
      </h2>
      <form className="mt-8 space-y-8 w-1/3">
        <div className="rounded-md shadow-sm -space-y-px">
          <input
            className="appearance-none rounded-none relative block w-full
            px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900
            rounded-t-md focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
            id="name"
            type="text"
            placeholder="Nome completo"
            data-testid="common_register__input-name"
            onChange={ handleInput }
            required
          />
          <input
            className="appearance-none rounded-none relative block w-full
            px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900
            rounded-t-md focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
            id="email"
            type="email"
            placeholder="Email"
            data-testid="common_register__input-email"
            onChange={ handleInput }
            required
          />
          <input
            className="appearance-none rounded-none relative block w-full
            px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900
            rounded-t-md focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
            id="password"
            type="password"
            placeholder="Senha"
            data-testid="common_register__input-password"
            onChange={ handleInput }
            required
          />
        </div>
        <span
          style={ { color: 'red' } }
          id="span-error"
          data-testid="common_register__element-invalid_register"
          hidden={ !showError }
        >
          Dados incorretos
        </span>
        <div className="flex flex-row">
          <button
            className="group relative flex justify-center py-2 px-10 border
          border-transparent text-sm font-medium rounded-md text-white bg-indigo-600
          hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-indigo-500 w-2/3"
            id="register-btn"
            type="button"
            data-testid="common_register__button-register"
            disabled={ !stateButton }
            onClick={ handleRegister }
          >
            Cadastrar
          </button>
        </div>
      </form>
    </main>
  );
}
