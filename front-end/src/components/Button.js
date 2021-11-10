import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, datatestid }) => (
  <button
    type="button"
    onClick={ onClick }
    data-testid={ datatestid }
  >
    {label}
  </button>
);

Button.propTypes = {
  datatestid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
