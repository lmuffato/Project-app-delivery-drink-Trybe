import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Button({
  title, typeButton, onClick, type, dataTestId, disabled }) {
  return (
    <button
      type={ type ? 'submit' : 'button' }
      className={ styles[typeButton] }
      onClick={ onClick }
      data-testid={ dataTestId }
      disabled={ disabled }
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  typeButton: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  dataTestId: PropTypes.string,
}.isRequired;
