import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Label from '../Label';
import capitalizeString from '../../utils/capitalizeString';

const InputText = ({ type, name, id, onChange, value, ...others }) => (
  <div className="c_input_container">
    <Label id={ id } name={ capitalizeString(name) } />
    <input
      type={ type }
      name={ name }
      onChange={ onChange }
      value={ value }
      id={ id }
      { ...others }
      className="c_inputText"
    />
  </div>
);

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputText;
