import React from 'react';
import { func, string } from 'prop-types';

function TextInput(props) {
  const { name, dataTestId, onChange, placeholder, type } = props;

  return (
    <label htmlFor={ name }>
      <input
        className="input"
        id={ name }
        type={ type || 'text' }
        name={ name }
        data-testid={ dataTestId }
        onChange={ onChange }
        placeholder={ placeholder }
        autoComplete="off"
      />
    </label>
  );
}

TextInput.propTypes = {
  name: string,
  dataTestId: string,
  onChange: func,
  placeholder: string,
  type: string,
}.isRequired;

export default TextInput;
