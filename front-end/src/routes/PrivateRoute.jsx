import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { func, string } from 'prop-types';
import Jwt from 'jsonwebtoken';
import Header from '../components/header';
import Context from '../context/Context';

function PrivateRoute({ element: Element }) {
  const navigate = useNavigate();
  const { setUser } = useContext(Context);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const data = Jwt.decode(token);
    const oneSecond = 1000;

    if (!token || data.exp * oneSecond < Date.now()) {
      navigate('/login');
    } else {
      const { id, email, name, role } = data;
      setUser({ id, name, email, role });
    }
  }, []);

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
