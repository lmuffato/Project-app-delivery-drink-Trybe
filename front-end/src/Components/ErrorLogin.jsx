import React from 'react';
import PropTypes from 'prop-types';

function ErrorLogin({ dataTestIdError, message }) {
  return (
    <p data-testid={ dataTestIdError }>
      { message }
    </p>
  );
}

ErrorLogin.propTypes = {
  dataTestIdError: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorLogin;
