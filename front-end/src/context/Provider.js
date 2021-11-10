import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
// import axios from "axios";

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

  const Endpoints = {
    login_form: 'login',
    register_form: 'register',
  };

  const postSubmit = (url) => {
    axios.post(`http://localhost:3001/${url}`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // Aguardar: Retorno do Back para prosseguir
      });
  };

  /// ////////////////////////Components Functions//////////////////////// ///

  const handleChange = (e) => {
    const { name, value } = e.target;
    const setuser = { ...user,
      [name]: value,
    };
    setUser(setuser);
    console.log(setuser);
  };

  const resetUser = () => {
    setUser({});
  };

  const submitChange = async (e, formType) => {
    e.preventDefault();
    await postSubmit(Endpoints[formType]);
    console.log(user);
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
