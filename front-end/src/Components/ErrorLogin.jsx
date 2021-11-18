import React from 'react';
import PropTypes from 'prop-types';

function ErrorLogin({ dataTestIdError, message }) {
  return (
    <div>
      <p data-testid={ dataTestIdError }>
        { message }
      </p>
    </div>

  );
}

ErrorLogin.propTypes = {
  dataTestIdError: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorLogin;
