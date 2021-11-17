import React from 'react';
import PropTypes from 'prop-types';
import { BaseButton } from '../styles/baseComponents';

const Button = ({ children, onClick, datatestid, btnType, full }) => (
  <BaseButton
    type="button"
    onClick={ onClick }
    data-testid={ datatestid }
    btnType={ btnType }
    full={ full }
  >
    {children}
  </BaseButton>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  btnType: PropTypes.string,
  full: PropTypes.bool,
  datatestid: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  btnType: 'primary',
  full: false,
  datatestid: undefined,
  onClick: undefined,
};

export default Button;
