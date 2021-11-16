import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { func, string } from 'prop-types';
import Jwt from 'jsonwebtoken';
import Header from '../components/header';

function PrivateRoute({ element: Element }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const data = Jwt.decode(token);
    const { exp } = data;
    const oneSecond = 1000;
    const expirationDate = exp * oneSecond;

    console.log(data);

    if (!token || expirationDate < Date.now()) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  });

  return (
    <>
      <Header />
      <Element />
    </>
  );
}

PrivateRoute.propTypes = {
  path: string,
  element: func,
}.isRequired;

export default PrivateRoute;
