import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Button({ title, typeButton }) {
  return (
    <button type="button" className={ styles[typeButton] }>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  typeButton: PropTypes.string,
}.isRequired;
