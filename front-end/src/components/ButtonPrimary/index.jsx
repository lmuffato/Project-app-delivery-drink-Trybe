import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ type, name, disabled, ...others }) => (
  <button
    type={ type ? 'submit' : 'button' }
    disabled={ disabled }
    { ...others }
  >
    { name }
  </button>
);

ButtonPrimary.propTypes = {
  type: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ButtonPrimary;
