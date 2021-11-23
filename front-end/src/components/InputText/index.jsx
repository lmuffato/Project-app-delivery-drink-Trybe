import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ name, id, onChange, value, ...others }) => (
  <input
    type="text"
    name={ name }
    onChange={ onChange }
    value={ value }
    id={ id }
    { ...others }
  />
);

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputText;
