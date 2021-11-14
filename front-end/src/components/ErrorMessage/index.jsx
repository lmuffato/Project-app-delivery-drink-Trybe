import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function ErrorMessage({ message, dataTestId }) {
  return (
    <span
      className={ styles.errorMessage }
      data-testid={ dataTestId }
    >
      {message}
    </span>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
}.isRequired;
