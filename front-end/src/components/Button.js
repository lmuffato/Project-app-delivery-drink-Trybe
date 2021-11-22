import React from 'react';
import PropTypes from 'prop-types';
import { BaseButton } from '../styles/baseComponents';

function Button({ children, type, onClick, datatestid, variant, full, disabled }) {
  return (
    <BaseButton
      type={ type }
      onClick={ onClick }
      data-testid={ datatestid }
      btnType={ variant }
      full={ full }
      disabled={ disabled }
    >
      {children}
    </BaseButton>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  variant: PropTypes.string,
  full: PropTypes.bool,
  datatestid: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
  disabled: false,
  full: false,
  datatestid: undefined,
  onClick: undefined,
};

export default Button;
