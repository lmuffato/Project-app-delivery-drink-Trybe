import React, { useEffect, useState, useCallback } from 'react';

import NavBar from '../components/NavBar';

const axios = require('axios');

export default function Admin() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('seller');
  const [disabled, setDisabled] = useState(true);
  const [invalidRegister, setInvalidRegister] = useState(false);
  const url = 'http://localhost:3001';
  const minimumNameLength = 12;
  const minimumPasswordLength = 6;
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.name;

  const buttonsList = [
    { name: 'ADMIN',
      value: 'manage',
      testId: 'customer_products__element-navbar-link-products',
    },
  ];

  const verifyInfo = useCallback(
    () => {
      const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (userName.length >= minimumNameLength
        && userPassword.length >= minimumPasswordLength
        && regex.test(userEmail)
        && userRole) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    },
    [userEmail, userName.length, userPassword.length, userRole, setDisabled],
  );

  useEffect(() => {
    verifyInfo();
  }, [verifyInfo]);

  const insertUser = async (e) => {
    e.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('user'));

    const config = {
      headers: { Authorization: `${token}` },
    };
    try {
      const bodyParameters = {
        name: userName,
        email: userEmail,
        password: userPassword,
        role: userRole,
      };
      await axios
        .post(`${url}/admin`, bodyParameters, config)
        .then((res) => console.log(res.data));
      setUserName('');
      setUserEmail('');
      setUserPassword('');
      setUserRole('');
    } catch (error) {
      console.log(error);
      setInvalidRegister(true);
    }
  };

  return (
    <main
      className="flex h-screen w-screen
      bg-gray-500 flex-col
      content-center pt-20"
    >
      <NavBar buttonsList={ buttonsList } clientName={ username } />
      <form className="flex p-3 ml-auto justify-between mr-auto w-screen">
        <div className="flex rounded-md shadow-sm -space-y-px w-2/3">
          <label
            className="w-1/3"
            htmlFor="new-user"
          >
            <input
              type="text"
              className="appearance-none rounded-md w-full
              px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900
              rounded-t-md focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Nome"
              autoComplete="off"
              id="new-user"
              data-testid="admin_manage__input-name"
              onChange={ (e) => setUserName(e.target.value) }
            />
          </label>
          <label
            className="w-1/3 ml-3"
            htmlFor="new-email"
          >
            <input
              type="email"
              className="appearance-none rounded-md w-full
              px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900
              rounded-t-md focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
              id="new-email"
              placeholder="Endereço de email"
              autoComplete="off"
              data-testid="admin_manage__input-email"
              onChange={ (e) => setUserEmail(e.target.value) }
            />
          </label>
          <label
            className="w-1/3 ml-3"
            htmlFor="new-password"
          >
            <input
              type="password"
              className="appearance-none rounded-md w-full
              px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900
              rounded-t-md focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
              id="new-password"
              placeholder="Senha"
              data-testid="admin_manage__input-password"
              onChange={ (e) => setUserPassword(e.target.value) }
            />
          </label>
          { invalidRegister
              && (
                <span
                  data-testid="admin_manage__element-invalid-register"
                  className="text-center text-red-600 absolute top-0 right-0"
                >
                  Usuário invalido ou já cadastrado
                </span>
              ) }
        </div>
        <label htmlFor="new-user-type">
          <select
            id="new-user-type"
            className="rounded-md ml-3
            px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900
            rounded-t-md focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
            data-testid="admin_manage__select-role"
            defaultValue={ userRole }
            onChange={ (e) => setUserRole(e.target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
            <option value="customer">Cliente</option>
          </select>
        </label>
        <button
          type="submit"
          className="text-center text-white align-top w-40 h-10 ml-3
          bg-indigo-600 hover:bg-indigo-700 text-black rounded-md"
          data-testid="admin_manage__button-register"
          disabled={ disabled }
          onClick={ (e) => insertUser(e) }
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
}
