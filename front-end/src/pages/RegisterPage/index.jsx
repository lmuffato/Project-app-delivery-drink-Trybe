import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import styles from './styles.module.css';

export default function RegisterPage() {
  return (
    <div className={ styles.container }>
      <h1>Cadastro</h1>
      <RegisterForm />
    </div>
  );
}
