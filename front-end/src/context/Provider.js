import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Context from './Context';

const Endpoints = {
  login_form: 'login',
  register_form: 'register',
};

function Provider({ children }) {
  const [user, setUser] = useState({});

  // user {
  // name: 'John',
  // email: 'john@example.com'
  // role: 'customer/entregador'
  // token: 'retorno do Back'
  // }

  // UseEffect para salvar no localStorage

  /// ////////////////////////Link with BackEnd//////////////////////// ///

  const postSubmit = (url) => axios.post(`http://localhost:3001/${url}`, user);

  /// ////////////////////////Components Functions//////////////////////// ///

  const handleChange = (e) => {
    const { name, value } = e.target;
    const setuser = { ...user,
      [name]: value,
    };
    setUser(setuser);
  };

  const submitChange = (e, formType) => {
    e.preventDefault();
    return postSubmit(Endpoints[formType]);
  };

  return (
    <Context.Provider
      value={ { setUser, user, handleChange, submitChange } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
