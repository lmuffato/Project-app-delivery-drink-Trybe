import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, label, onChange, value, datatestid }) => (
  <label htmlFor={ name }>
    {label}
    <input
      name={ name }
      onChange={ onChange }
      value={ value }
      data-testid={ datatestid }
    />
  </label>
);

Input.propTypes = {
  datatestid: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  onChange: null,
};

export default Input;
