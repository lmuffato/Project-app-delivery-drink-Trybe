import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, placeholder, value, setValue, dataid }) {
  return (
    <input
      type={ type }
      placeholder={ placeholder }
      value={ value }
      onChange={ ({ target }) => setValue(target.value) }
      data-testid={ dataid }
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  dataid: PropTypes.string.isRequired,
};

export default Input;
