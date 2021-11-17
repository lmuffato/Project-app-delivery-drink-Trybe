import React from 'react';
import PropTypes from 'prop-types';
import { BaseInput, InputContainer } from '../styles/baseComponents';

const Input = ({ name, label, onChange, value, datatestid, type, placeholder }) => (
  <InputContainer>
    <label htmlFor={ name && `input-${name}` }>
      <span>{label}</span>
      <BaseInput
        name={ name }
        id={ name && `input-${name}` }
        type={ type }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
        data-testid={ datatestid }
      />
    </label>
  </InputContainer>
);

Input.propTypes = {
  datatestid: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  datatestid: undefined,
  label: undefined,
  value: undefined,
  placeholder: undefined,
  type: 'text',
  name: undefined,
  onChange: null,
};

export default Input;
