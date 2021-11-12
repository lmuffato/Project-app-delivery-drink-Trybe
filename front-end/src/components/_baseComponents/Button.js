// @ts-check
import React from 'react';
import PropTypes from 'prop-types';
import { BaseButton } from '../../styles/baseComponents';

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
  datatestid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  btnType: PropTypes.string,
  full: PropTypes.bool,
};

Button.defaultProps = {
  btnType: 'primary',
  full: false,
};

export default Button;
