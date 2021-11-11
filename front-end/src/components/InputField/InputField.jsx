import React from 'react';
import PropTypes from 'prop-types';

export default function InputField({ labelName, type, name, id }) {
  return (
    <div>
      <label htmlFor={ id }>
        {labelName}
      </label>
      <input type={ type } name={ name } id={ id } />
    </div>
  );
}

InputField.propTypes = {
  labelName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
}.isRequired;
