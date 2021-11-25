import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ButtonTertiary = ({ type, name, disabled, ...others }) => (
  <button
    type={ type ? 'submit' : 'button' }
    disabled={ disabled }
    { ...others }
    className="c_button_tertiary"
  >
    { name }
  </button>
);

ButtonTertiary.propTypes = {
  type: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ButtonTertiary;
