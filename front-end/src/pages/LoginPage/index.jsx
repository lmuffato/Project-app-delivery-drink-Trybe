import React from 'react';
import LoginForm from '../../components/LoginForm';
import styles from './styles.module.css';

export default function LoginPage() {
  return (
    <div className={ styles.container }>
      <LoginForm />
    </div>
  );
}
