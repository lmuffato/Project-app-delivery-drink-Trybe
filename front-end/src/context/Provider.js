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

  return (
    <Context.Provider
      value={ { setUser, user } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
