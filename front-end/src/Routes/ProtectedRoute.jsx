import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

export default function ProtectedRoute({ children, ...rest }) {
  const { user } = useContext(AuthContext);
  return (
    <Route
      { ...rest }
      render={ () => (user.token ? children : <Redirect to="/login" />) }
    />
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
