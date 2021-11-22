import PropTypes from 'prop-types';
import React from 'react';
import imgManHoldingBeer from '../images/man-holding-beer.png';
import styles from '../styles/pages/Auth.module.scss';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export default function Auth({ location }) {
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
