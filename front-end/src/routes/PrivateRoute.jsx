import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { func, string } from 'prop-types';
import Jwt from 'jsonwebtoken';
import Header from '../components/header';
import Context from '../context/Context';

function PrivateRoute({ element: Element }) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Context);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const data = Jwt.decode(token);
    const { exp, email, name, role } = data;
    const oneSecond = 1000;
    const expirationDate = exp * oneSecond;

    if (!token || expirationDate < Date.now()) {
      localStorage.removeItem('token');
      navigate('/login');
    } else {
      setUser({ name, email, role });
    }
  }, [user]);

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
