import React from 'react';
import { func, string } from 'prop-types';

function TextInput(props) {
  const { name, dataTestId, onChange, placeholder } = props;

  return (
    <label htmlFor={ name }>
      <input
        className="input"
        id={ name }
        type="text"
        name={ name }
        data-testid={ dataTestId }
        onChange={ onChange }
        placeholder={ placeholder }
      />
    </label>
  );
}

TextInput.propTypes = {
  name: string,
  dataTestId: string,
  onChange: func,
  placeholder: string,
}.isRequired;

export default TextInput;
