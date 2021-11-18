import React from 'react';
import RegisterForm from '../components/registerForm';
import imgManHoldingBeer from '../images/man-holding-beer.png';

import styles from '../styles/pages/Register.module.scss';

function RegisterPage() {
  return (
    <section className={ styles.register }>
      <span className={ styles.manHoldingBeer }>
        <img
          src={ imgManHoldingBeer }
          alt="Homem sorrindo e segurando caneca de cerveja"
        />
      </span>
      <img src="./logo-compact.svg" alt="tchau problema" />
      <RegisterForm />
    </section>
  );
}

export default RegisterPage;
