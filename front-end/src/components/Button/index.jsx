import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Button({ title, typeButton, onClick, type }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={ type } className={ styles[typeButton] } onClick={ onClick }>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  typeButton: PropTypes.string,
}.isRequired;
