import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { validations, handleError } from '../helpers/validationsRegister';
import { loginAfterRegistering } from '../helpers/loginAfterRegister';
import { userLogin } from '../redux/userSlice';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [stateButton, setStateButton] = useState(false);
  // const [logging, setLogging] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleRoutes = (role) => {
    if (role === 'customer') history.push('/customer/products');
    if (role === 'administrator') history.push('/admin/manage');
    if (role === 'seller') history.push('/seller/orders');
  };
  const logIn = async () => {
    const { token, role } = await loginAfterRegistering(email, password);
    dispatch(userLogin({ token, role }));
    handleRoutes(role);
  };

  useEffect(() => {
    const validate = validations(name, email, password);
    setStateButton(validate);
  }, [name, email, password]);

  const makeRegister = async () => {
    await axios
      .post('http://localhost:3001/register', { name, email, password })
      .then(() => {
        setShowError(false);
        logIn();
      })
      .catch((err) => {
        document.getElementById('span-error').innerText = handleError(err);
        setShowError(true);
      });
  };

  const handleRegister = async () => {
    await makeRegister();
  };

  const handleInput = ({ target }) => {
    const { value, id } = target;
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
        />
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
