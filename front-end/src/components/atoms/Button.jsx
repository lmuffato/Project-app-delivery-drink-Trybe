import React from 'react';
import { string, bool, func, shape } from 'prop-types';

const Button = ({
  className,
  enabled = false,
  onClick,
  'data-testid': testid,
  text,
  typeIsSubmit = false,
}) => (
  <button
    className={ className }
    data-testid={ testid }
    disabled={ !enabled }
    onClick={ onClick }
    type={ typeIsSubmit ? 'submit' : 'button' }
  >
    { text }
  </button>
);

Button.propTypes = shape({
  className: string,
  enabled: bool,
  onClick: func,
  testid: string,
  text: string,
  typeIsSubmit: bool,
}).isRequired;

export default Button;
