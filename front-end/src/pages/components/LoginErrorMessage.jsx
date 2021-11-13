import React from 'react';
import PropTypes from 'prop-types';

const LoginErrorMessage = ({ errorMessage }) => (
  <div>
    <p
      data-testid="common_login__element-invalid-email"
    >
      { errorMessage }
    </p>
  </div>
);

export default LoginErrorMessage;

LoginErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
