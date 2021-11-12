import React from 'react';
import { string, bool, func } from 'prop-types';

const Button = ({
  className,
  disabled = false,
  onClick,
  testid,
  text,
  typeIsSubmit = false,
}) => (
  <button
    className={ className }
    data-testid={ testid }
    disabled={ disabled }
    onClick={ onClick }
    type={ typeIsSubmit ? 'submit' : 'button' }
  >
    { text }
  </button>
);

Button.propTypes = {
  className: string.isRequired,
  disabled: bool,
  onClick: func.isRequired,
  testid: string.isRequired,
  text: string.isRequired,
  typeIsSubmit: bool,
};
Button.defaultProps = {
  disabled: false,
  typeIsSubmit: false,
};

export default Button;
