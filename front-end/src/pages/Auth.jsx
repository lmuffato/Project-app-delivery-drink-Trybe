import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router';
import imgManHoldingBeer from '../images/man-holding-beer.png';
import styles from '../styles/pages/Auth.module.scss';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { AuthContext } from '../contexts/auth';

export default function Auth({ location }) {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    if (user) {
      try {
        const validJWT = jwt.verify(
          user.token, process.env.REACT_APP_JWT_SECRET_KEY || 'senha_dificil',
        );
        if (validJWT) {
          switch (validJWT.login.role) {
          case 'seller': {
            history.push('/seller/orders');
            break;
          }
          default: history.push('/customer/products');
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  }, [user, history]);

  return (
    <section className={ styles.auth }>
      <span className={ styles.manHoldingBeer }>
        <img
          src={ imgManHoldingBeer }
          alt="Homem sorrindo e segurando caneca de cerveja"
        />
      </span>
      <img src="./logo-compact.svg" alt="tchau problema" />
      { location.pathname.includes('login') ? (
        <LoginForm />
      ) : (
        <RegisterForm />
      ) }
    </section>
  );
}

Auth.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
