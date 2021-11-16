import React from 'react';
import { shape, string, func } from 'prop-types';

const Input = ({
  className,
  'data-testid': testid,
  name,
  value,
  onChange,
  placeholder,
}) => (
  <input
    className={ className }
    data-testid={ testid }
    name={ name }
    value={ value }
    onChange={ onChange }
    placeholder={ placeholder }
  />);

Input.propTypes = shape({
  className: string,
  testid: string,
  name: string,
  value: string,
  onChange: func,
  placeholder: string,
}).isRequired;

export default Input;
