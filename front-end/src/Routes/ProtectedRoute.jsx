import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

export default function ProtectedRoute({ children, ...rest }) {
  const { user, logOut } = useContext(AuthContext);
  const [tokenValidated, setTokenValidated] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    if (user) {
      try {
        if (user.token) {
          const validJWT = jwt.verify(
            user.token, process.env.REACT_APP_JWT_SECRET_KEY || 'senha_dificil',
          );
          setTokenValid(validJWT !== undefined);
        }
      } catch (error) {
        logOut();
      }
      setTokenValidated(true);
    }
  }, [user, logOut]);

  if (!tokenValidated) return <h1>Carregando...</h1>;

  return (
    <Route
      { ...rest }
      render={ () => (tokenValid ? children : <Redirect to="/login" />) }
    />
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
