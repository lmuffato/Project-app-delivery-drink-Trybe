import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const InputText = ({ name, id, onChange, value, ...others }) => (
  <input
    type="text"
    name={ name }
    onChange={ onChange }
    value={ value }
    id={ id }
    { ...others }
    className="c_inputText"
  />
);

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputText;
