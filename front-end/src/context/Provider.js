import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Context from './Context';

const Endpoints = {
  login_form: 'login',
  register_form: 'register',
};

const status = {
  OK: 200,
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

  const postSubmit = async (url) => {
    console.log(user);

    const res = await axios.post(`http://localhost:3001/${url}`, user);

    console.log(res);

    if (res.status === status.OK) return res;
  };

  /// ////////////////////////Components Functions//////////////////////// ///

  const handleChange = (e) => {
    const { name, value } = e.target;
    const setuser = { ...user,
      [name]: value,
    };
    setUser(setuser);
  };

  const resetUser = () => {
    setUser({});
  };

  const submitChange = async (e, formType) => {
    e.preventDefault();
    await postSubmit(Endpoints[formType]);
  };

  return (
    <Context.Provider
      value={ { setUser, user, handleChange, submitChange, resetUser } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
