import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function ErrorMessage({ message }) {
  return (
    <span
      className={ styles.errorMessage }
      data-testid="common_login__element-invalid-email"
    >
      {message}
    </span>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
}.isRequired;
