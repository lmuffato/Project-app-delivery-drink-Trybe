import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ButtonPrimary = ({ type, name, disabled, dataTestId, ...others }) => (
  <button
    type={ type ? 'submit' : 'button' }
    disabled={ disabled }
    className="c_button_primary"
    data-testid={ dataTestId }
    { ...others }
  >
    { name }
  </button>
);

ButtonPrimary.propTypes = {
  type: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default ButtonPrimary;
