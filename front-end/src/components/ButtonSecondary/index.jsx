import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ButtonSecondary = ({ type, name, disabled, ...others }) => (
  <button
    type={ type ? 'submit' : 'button' }
    disabled={ disabled }
    { ...others }
    className="c_button_secondary"
  >
    { name }
  </button>
);

ButtonSecondary.propTypes = {
  type: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ButtonSecondary;
