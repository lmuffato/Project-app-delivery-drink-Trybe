import React from 'react';
import PropTypes from 'prop-types';

function Alert({ style, message, testid }) {
  return (
    <span
      data-testid={ testid }
      style={ style }
    >
      {message}
    </span>
  );
}

Alert.propTypes = {
  style: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  testid: PropTypes.string,
};

Alert.defaultProps = {
  testid: '',
};

export default Alert;
